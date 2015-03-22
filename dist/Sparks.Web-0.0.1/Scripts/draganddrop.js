/*
 * draganddrop.js - modified from BlockBlobUpload.js from Microsoft
 */

+ function ($) {
    //'use strict';

    // UPLOAD CLASS DEFINITION
    // ======================

    var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');
    var progress = document.getElementById('js-upload');
    var progressStatus = document.getElementById('js-upload-progress');
    var statusLabel = document.getElementById('statusMessage');
    var progressPercent = 0;
    var blockLength = 1048576;
    var maxRetries = 3;
    var retryAfterSeconds = 5;
    var operationType = {
        "METADATA_SEND": 0,
        "CANCELLED": 1,
        "RESUME_UPLOAD": 2,
        "METADATA_FAILED": 3,
        "FILE_NOT_SELECTED": 4,
        "UNSUPPORTED_BROWSER": 5,
        "ZERO_BYTE_FILE": 6
    };

    /*
     * Mains the state of the current uploads
     */
    var UploadManager = {
        constructor: function() {
            this.files = [];
            this.totalBlocks = 0;
            this.completedBlocks = 0;
            this.totalSize = 0;
        },
        Add: function (uploadFileModel) {
            var found = 0;
            var index = -1;
            for (var i = 0; i < this.files.length; i++) {
                if (this.files[i].name == uploadFileModel.fileName) {
                    found = 1;
                }
            }

            if (found != 1) {
                var index = this.files.length;
                this.files[index] = uploadFileModel;
            }
            return index;
        },
        Get: function (index) {
            return this.files[index];
        },
        Put: function(index, uploadFileModel) {
            this.files[index] = uploadFileModel;
        }
    }

    /*
     * Model for uploads
     */
    var UploadFileModel = {
        constructor: function(file) {
            this.index = file.index;
            this.totalBlocks = Math.ceil(file.size / blockLength);
            this.fileName = file.name;
            this.fileSize = file.size;
            this.actualFile = file.actualFile;
            this.jqxhr = null;
        },

        /*
         * Recursively send a whole given file in chunks to the api.
         */ 
       

    }



    var uploader = Object.create(UploadManager);
    uploader.constructor();


    /*
     * Starts the Upload of a file
     */
    var startUpload = function(files) {
        
        for (var i = 0; i < files.length; i++) {
           
            var file = Object.create(UploadFileModel);

            alert(files[i].name);

            file.constructor(
            {
                "index": 0,
                "size": files[i].size,
                "name": files[i].name,
                "actualFile": files[i]
            });
               
            var index = uploader.Add(file);
            
           
            if (index != -1) {
                    file.index = index;
                    uploader.totalSize += file.fileSize;
                    uploader.totalBlocks += file.totalBlocks;
                    AddFileUploadMetadata(file);
            }
        }
    }

    /*
     * Add file(s) meta data to the upload session
     */
    var AddFileUploadMetadata = function (file) {
        $.ajax({
            type: "POST",
            async: true,
            url: '/Media/AddUploadFileMetadata',
            data: {
                'index': file.index,
                'blocksCount': file.totalBlocks,
                'fileName': file.fileName,
                'fileSize': file.fileSize
            },
            dataType: "json",
            error: function() {
                DisplayAlert(operationType.METADATA_FAILED);
                ResetControls();
            },
            success: function(operationState) {
                if (operationState === true) {
                    SendFile(file);
                }
            }
        });
    }

    var SendFile  = function (file) {
        var start = 0,
        end = Math.min(blockLength, file.fileSize),
        incrimentalIdentifier = 1,
        retryCount = 0,
        sendNextChunk, fileChunk;

        sendNextChunk = function (file) {

            fileChunk = new FormData();
            fileChunk.append("FileIndex", file.index);

            if (file.actualFile.slice) {
                fileChunk.append('Slice', file.actualFile.slice(start, end));
            }
            else if (file.actualFile.webkitSlice) {
                fileChunk.append('Slice', file.actualFile.webkitSlice(start, end));
            }
            else if (file.actualFile.mozSlice) {
                fileChunk.append('Slice', file.actualFile.mozSlice(start, end));
            }
            else {
                DisplayLabel(operationType.UNSUPPORTED_BROWSER);
                return;
            }
            file.jqxhr = $.ajax({
                async: true,
                url: ('/Media/UploadBlock/'+incrimentalIdentifier),
                data: fileChunk,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                error: function (request, error) {
                    if (error !== 'abort' && retryCount < maxRetries) {
                        ++retryCount;
                        setTimeout(sendNextChunk, retryAfterSeconds * 1000);
                    }

                    if (error === 'abort') {
                        DisplayLabel(operationType.CANCELLED);
                        ResetControls();
                        //TODO
                        uploader.files[index] = null;
                    }
                    else {
                        if (retryCount === maxRetries) {
                            UploadError(request.responseText);
                            ResetControls();
                            //TODO
                            //not sure what to do about error
                        }
                        else {
                            DisplayLabel(operationType.RESUME_UPLOAD);
                        }
                    }

                    return;
                },
                success: function (notice) {
                    if (notice.error || notice.isLastBlock) {
                        uploader.completedBlocks += 1;
                        RenderProgress();
                        if (notice.error) {
                            DisplayAlert(notice.message);
                        } else {
                            DisplaySuccessAlert(file.fileName,notice.message);
                        }
                        ResetControls();
                        //uploader = null;
                        //TODO
                        // not sure what to do about error
                        return;
                    }

                    ++incrimentalIdentifier;
                    start = (incrimentalIdentifier - 1) * blockLength;
                    end = Math.min(incrimentalIdentifier * blockLength, file.fileSize);
                    retryCount = 0;
                    uploader.completedBlocks += 1;
                    RenderProgress();
                    sendNextChunk(file);
                }
            });
        };

        sendNextChunk(file);



        //progressPercent += 25;
        //UpdateProgress(99);
        //DisplayStatusMessage("Upload Complete");
        RenderProgress();
    }
    

    /*
     * Sets the text on the status label
     */
    var DisplayStatusMessage = function(message) {
        ClearChilderen(statusLabel);
        if (message) {
            statusLabel.appendChild(document.createTextNode(message));
        }
    }

    /*
     * Displays the current progress
     */
    var RenderProgress = function () {

        var percentCompleted = Math.floor((uploader.completedBlocks) * 100 / uploader.totalBlocks);
        UpdateProgress(percentCompleted);
        DisplayStatusMessage("Completed: " + percentCompleted + '%');
    }

    /*
     * Clears all children nodes on the given node.
     */
    var ClearChilderen = function(node) {
        if (IsElementNode(node)) {
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
        }
    }

    /*
     * Returns true if the given node is a valid element node
     */
    var IsElementNode = function(node)
    {
        return !!(node.nodeType && node.nodeType === Node.ELEMENT_NODE);
    }


    /*
     * Updates the status bar at the bottom of the page
     */
    var UpdateProgress = function (value) {
        
        if (value >= 100) {
            progress.hidden = true;
        } else {
            $('.progress-bar').css('width', value + '%').attr('aria-valuenow', value);
            progress.hidden = false;
        }
    }

    /*
     * Resets the UI back to a non running state
     */
    var ResetControls = function () {
        var value = 0;
        $('.progress-bar').css('width', value + '%').attr('aria-valuenow', value);
        progress.hidden = true;
        ClearChilderen(statusLabel);
    }

    /*
     * Displays and alert msg
     */
    var DisplayAlert = function (msg) {

            var alertHtml = '<div class="alert alert-warning alert-dismissable">' +
               '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
               '<strong>Warning!</strong>' + msg + '</div>';

            $('#alert-container').append(alertHtml);
    }

    /*
     * Displays and success alert msg
     */
    var DisplaySuccessAlert = function (fileName,msg) {

        var alertHtml = '<div class="alert alert-success alert-dismissable">' +
           '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
           '<strong>Success Upload of '+fileName+'! </strong>' + msg + '</div>';

        $('#alert-container').append(alertHtml);
    }

    /*
     * Sets the display message for a given operation
     */
    var DisplayLabel = function (operation) {
        switch (operation) {
            case operationType.METADATA_SEND:
                DisplayStatusMessage('Sending file metadata to server. Please wait..');
                break;
            case operationType.CANCELLED:
                DisplayStatusMessage('File upload has been canceled.');
                break;
            case operationType.RESUME_UPLOAD:
                DisplayStatusMessage('Error encountered during upload. Resuming upload..');
                break;
            case operationType.METADATA_FAILED:
                DisplayStatusMessage('Failed to send file meta data. Retry after some time.');
                break;
            case operationType.FILE_NOT_SELECTED:
                DisplayStatusMessage('Please select a file to upload.');
                break;
            case operationType.UNSUPPORTED_BROWSER:
                DisplayStatusMessage("Your browser does not support this functionality.");
                break;
            case operationType.ZERO_BYTE_FILE:
                DisplayStatusMessage("File should not be empty.");
                break;
        }
    }

    /*
     * Displays an error message and quits the given upload
     */
    var UploadError = function (message) {
        //DisplayStatusMessage('The file could not be uploaded' + (message ? 'because ' + message : '') + '. Operation aborted.');
        DisplayAlert('The file could not be uploaded' + (message ? 'because ' + message : '') + '. Operation aborted.');
        //TODO
        if (jqxhr !== null) {
            jqxhr.abort();
        }
    }


    /*
     * Cancels and upload progress
     */
    var cancelUpload = function () {

        //TODO
        if (jqxhr !== null) {
            jqxhr.abort();
        }
    };


    /*
     * Drag and Drop functions
     */
    uploadForm.addEventListener('submit', function(e) {
        var uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault();

        startUpload(uploadFiles);
    });

    dropZone.ondrop = function (e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';

        startUpload(e.dataTransfer.files);
    }

    dropZone.ondragover = function () {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function () {
        this.className = 'upload-drop-zone';
        return false;
    }

}(jQuery);