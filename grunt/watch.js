module.exports = {
    dev: {
        files: ['Gruntfile.js', 'app/**/*.js', 'app/**/*.html'],
        //tasks: ['jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp'],
        tasks: ['jshint', 'html2js:dist', 'concat:dist', 'clean:temp'],
        options: {
            atBegin: true,
            spawn: false
        }
    },
    min: {
        files: ['Gruntfile.js', 'app/*.js', '*.html'],
        //tasks: ['jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist'],
        tasks: ['jshint', 'html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist'],
        options: {
            atBegin: true,
            spawn: false
        }
    }
}