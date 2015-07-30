/**
 * ngtemplates is a Grunt plugin that takes all of your template files and
 * places them into JavaScript files as strings that are added to
 * AngularJS's template cache.
 */
module.exports = {
    app: {
        cwd: '<%= config.sourceDir %>',
        src: '<%= config.sourceFiles.templates %>',
        dest: '<%= config.buildDir %>/app/templates.js',
        options: {
            bootstrap: function(module, script) {
                'use strict';

                return 'define([\'angular\', \'app\'], function(angular, app) { app.run([\'$templateCache\', function($templateCache) {' + script + '}]); });';
            }
        },
        htmlmin: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }
    }
};
