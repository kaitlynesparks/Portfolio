module.exports = {
    dist: {
        options: {
            archive: 'dist/<%= package.name %>-<%= package.version %>.zip'
        },
        files: [{
            src: ['index.html'],
            dest: '/'
        }, {
            src: ['dist/**'],
            dest: '/'
        }, {
            src: ['Content/**'],
            dest: '/'
        }, {
            src: ['libs/**'],
            dest: '/'
        },{
            src: ['fonts/**'],
            dest: '/'
        },{
            src: ['images/**'],
            dest: '/'
        },{
            src: ['Scripts/**'],
            dest: '/'
        }

        ]
    }
}