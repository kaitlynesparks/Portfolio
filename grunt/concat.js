module.exports = {
    options: {
        separator: ';'
    },
    dist: {
        src: ['app/*.js', 'tmp/*.js', 'app/services/*.js', 'app/controllers/*.js'],
        dest: 'dist/app.js'
    }
}