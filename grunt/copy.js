/**
 * The `copy` task just copies files from A to B. We use it here to copy
 * our project assets (images, fonts, etc.) and javascripts into
 * `buildDir`, and then to copy the assets to `compileDir`.
 */
module.exports = {
    local: {
        files: [{
            src: ['**', '!sass/**', '!**/*.spec.js', '!app/modules/**/img/**'],
            dest: '<%= config.buildDir %>/',
            cwd: '<%= config.sourceDir %>',
            expand: true
        }]
    },
    images: {
        files: [{
            src: ['**/img/**'],
            dest: '<%= config.buildDir %>/img/',
            cwd: '<%= config.sourceDir %>/app/modules/',
            expand: true,
            rename: function(dest, src) {
                'use strict';

                return dest + src.replace('/img', '');
            }
        }]
    },
    karma: {
        src: ['**'],
        dest: '<%= config.buildDir %>/test/',
        cwd: '<%= config.testDir %>/report/coverage/',
        expand: true
    },
};
