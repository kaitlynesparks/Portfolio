module.exports = {
    notify: {
        build: {
            options: {
                title: 'Build complete', // optional
                message: '<%= package.name %> build finished successfully.', //required
                duration: 3,
                success: true,
            }
        }
    }
}