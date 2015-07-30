module.exports = {
    local: {
        src: '**/*.html',
        ext: '.html',
        cwd: '<%= config.sourceDir %>',
        dest: '<%= config.buildDir %>',
        expand: true,
        options: {
            context: {
                javascript: '<script data-main="app/main" src="vendor/requirejs/require.js"></script>',
                styleLib: '<link rel="stylesheet" type="text/css" media="all" href="css/lib.css" />',
                styleMain: '<link rel="stylesheet" type="text/css" media="all" href="css/style.css" />',
            }
        }
    },
};
