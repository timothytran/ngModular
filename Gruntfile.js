module.exports = function(grunt) {
    'use strict';

    var path = require('path');

    // measures the time each task takes
    require('time-grunt')(grunt);

    /**
     * Remove source deleted files/folders from build
     */
    grunt.event.on('watch', function(action, filepath, target) {
        var deleteFilePath = filepath.replace('src/', 'build/'),
            isModuleImage;

        if (action === 'deleted') {
            isModuleImage = grunt.file.isMatch('src/app/modules/**/img/**', filepath);

            if (isModuleImage) {
                deleteFilePath = filepath.replace('/img/', '/').replace('src/app/modules/', 'build/img/');
            }

            if (grunt.file.exists(deleteFilePath)) {
                grunt.file.delete(deleteFilePath);
            }
        }
    });

    /**
     * This task creates a Grunt config variable called `git-commit` that contains the latest git commit sha1 hash.
     */
    grunt.registerTask('githash', 'grabs the latest git commit hash', function() {
        var config, done;
        done = this.async();
        config = {
            cmd: 'git',
            args: ['rev-parse', '--verify', 'HEAD']
        };
        return grunt.util.spawn(config, function(err, result) {
            grunt.config('git-commit', result.stdout);
            grunt.log.ok('Setting `git-commit` to ' + result.stdout);
            return done();
        });
    });

    /**
     * Load required Grunt tasks. These are installed based on the versions listed
     * in `package.json` when you do `npm install` in this directory.
     */
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'), //path to task.js files, defaults to grunt dir
        init: true, //auto grunt.initConfig
        data: {
            branding: grunt.option('branding') || 'default', //data passed into config.  Can use with <%= test %>
            fromTag: grunt.file.readJSON('package.json').version
        },
        loadGruntTasks: { //can optionally pass options to load-grunt-tasks.  If you set to false, it will disable auto loading tasks.
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: 'devDependencies'
        },
        postProcess: function(config) {} //can post process config object before it gets passed to grunt
    });

    /**
     * Project grunt tasks.
     */
    grunt.registerTask('test', ['karma:full', 'clean:karma', 'copy:karma', 'rename:karma']);
    grunt.registerTask('lint', ['jshint']);

    /**
     * Local build tasks.
     */
    grunt.registerTask('build', ['jshint', 'clean:build', 'copy:local', 'copy:images', 'concurrent:local', 'githash', 'preprocess:local']);

    /**
     * The default task is to build and watch.
     */
    grunt.registerTask('default', ['build', 'watch']);
};
