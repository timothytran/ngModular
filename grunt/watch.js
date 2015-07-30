/**
 * And for rapid development, we have a watch set up that checks to see if
 * any of the files listed below change, and then to execute the listed
 * tasks when they do. This just saves us from having to type 'grunt' into
 * the command-line every time we want to see what we're working on; we can
 * instead just leave 'grunt watch' running in a background terminal. Set it
 * and forget it, as Ron Popeil used to tell us.
 *
 * But we don't need the same thing to happen for all the files.
 */
module.exports = {
    /**
     * By default, we want the Live Reload to work for all tasks; this is
     * overridden in some tasks (like this file) where browser resources are
     * unaffected. It runs by default on port 35729, which your browser
     * plugin should auto-detect.
     */
    options: {
        livereload: true
    },

    /**
     * When html files changes, we need to copy it to build.
     */
    index: {
        files: ['<%= config.sourceDir %>/index.html'],
        tasks: ['preprocess:local']
    },

    /**
     * When any JavaScript files change, we want to run lint them and
     */
    js: {
        files: ['<%= config.sourceFiles.jsSrc %>'],
        tasks: ['newer:jshint', 'newer:copy:local']
    },

    /**
     * When the Test files change, we need to unit test.
     */
    test: {
        files: '<%= config.sourceFiles.jsUnit %>',
        tasks: ['newer:jshint', 'karma:unit']
    },

    /**
     * When the Sass files change, we need to compile them to CSS.
     */
    sass: {
        files: '<%= config.sourceFiles.sass %>',
        tasks: ['compass:dev']
    },

    /**
     * When the module images files change sync it with img/ folder.
     */
    images: {
        files: '<%= config.sourceDir %>/app/modules/**/img/**',
        tasks: ['newer:copy:images']
    },

    /*
     * Watch for new file/folder
     */
    local: {
        files: ['<%= config.sourceDir %>/**/**', '!<%= config.sourceFiles.js %>', '!<%= config.sourceDir %>/vendor/**',
            '!<%= config.sourceDir %>/sass/**', '!<%= config.sourceDir %>/**/*.spec.js', '!<%= config.sourceDir %>/app/modules/**/img/**'
        ],
        tasks: ['newer:copy:local'],
    },
};
