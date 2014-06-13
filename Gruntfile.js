module.exports = function(grunt) {

  /** 
   * Load required Grunt tasks. These are installed based on the versions listed
   * in `package.json` when you do `npm install` in this directory.
   */
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-conventional-changelog');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-docker');
  grunt.loadNpmTasks('grunt-contrib-concat');

  /**
   * Load in our build configuration file.
   */
  var userConfig = require('./build.config.js');

  /**
   * This is the configuration object Grunt uses to give each plugin its
   * instructions.
   */
  var taskConfig = {
    /**
     * We read in our `package.json` file so we can access the package name and
     * version. It's already there, so we don't repeat ourselves here.
     */
    pkg: grunt.file.readJSON("package.json"),

    /**
     * Project banner
     */
    tag: {
      banner: '/*!\n' +
        ' * <%= pkg.name %>\n' +
        ' * <%= pkg.description %>\n' +
        ' * @author <%= pkg.author %>\n' +
        ' * @version <%= pkg.version %>\n' +
        ' */\n'
    },

    /**
     * Creates a changelog on a new version.
     */
    changelog: {
      options: {
        dest: 'CHANGELOG.md',
        template: 'changelog.tpl'
      }
    },

    /**
     * Increments the version number, etc.
     */
    bump: {
      options: {
        files: [
          "package.json",
          "bower.json"
        ],
        commit: true,
        commitMessage: 'chore(release): v%VERSION%',
        commitFiles: [
          "package.json",
          "bower.json"
        ],
        createTag: false,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false,
        pushTo: 'origin'
      }
    },

    /**
     * The directories to delete when `grunt clean` is executed.
     */
    clean: {
      build: [
        '<%= build_dir %>'
      ],
      bin: [
        '<%= bin_dir %>'
      ],
      karma: ['<%= build_dir %>/test'],
      refresh: ['node_modules', '<%= source_dir %>/vendor'],
      docs: ['<%= build_dir %>/docs'],
      site_js: ['site.js']
    },

    /**
     * The `copy` task just copies files from A to B. We use it here to copy
     * our project assets (images, fonts, etc.) and javascripts into
     * `build_dir`, and then to copy the assets to `compile_dir`.
     */
    copy: {
      js: {
        files: [{
          src: ['<%= app_files.js %>'],
          dest: '<%= build_dir %>/',
          cwd: '<%= source_dir %>',
          expand: true
        }]
      },
      local: {
        files: [{
          src: ['**', '!sass/**', '!**/*.spec.js'],
          dest: '<%= build_dir %>/',
          cwd: '<%= source_dir %>',
          expand: true
        }]
      },
      dev: {
        files: [{
          src: ['**', '!sass/**', '!app/**/views/**', '!app/**/*.html', '!**/*.spec.js'],
          dest: '<%= build_dir %>/',
          cwd: '<%= source_dir %>',
          expand: true
        }]
      },
      prod: {
        files: [{
          src: ['**', '!app/**', '!vendor/**', '!css/*.map'],
          dest: '<%= bin_dir %>/',
          cwd: '<%= build_dir %>',
          expand: true
        }, {
          src: ['app/main.min.js'],
          dest: '<%= bin_dir %>/js',
          cwd: '<%= build_dir %>',
          expand: true,
          flatten: true
        }]
      },
      karma: {
        src: ['**'],
        dest: '<%= build_dir %>/test/',
        cwd: '<%= test_dir %>/report/coverage/',
        expand: true
      }
    },

    /**
     * Compiled Sass based upon environments
     */
    sass: {
      watch: {
        options: {
          style: 'expanded',
          banner: '<%= tag.banner %>',
          sourcemap: true,
          compass: true
        },
        files: {
          '<%= build_dir %>/css/style.min.css': '<%= source_dir %>/<%= app_files.sass_style %>'
        }
      },
      local: {
        options: {
          style: 'expanded',
          banner: '<%= tag.banner %>',
          sourcemap: true,
          compass: true
        },
        files: {
          '<%= build_dir %>/css/lib.min.css': '<%= source_dir %>/<%= app_files.sass_lib %>',
          '<%= build_dir %>/css/style.min.css': '<%= source_dir %>/<%= app_files.sass_style %>'
        }
      },
      dev: {
        options: {
          style: 'compact',
          banner: '<%= tag.banner %>',
          sourcemap: true,
          compass: true
        },
        files: {
          '<%= build_dir %>/css/lib.min.css': '<%= source_dir %>/<%= app_files.sass_lib %>',
          '<%= build_dir %>/css/style.min.css': '<%= source_dir %>/<%= app_files.sass_style %>'
        }
      },
      prod: {
        options: {
          style: 'compressed',
          banner: '<%= tag.banner %>',
          compass: true
        },
        files: {
          '<%= build_dir %>/css/lib.min.css': '<%= source_dir %>/<%= app_files.sass_lib %>',
          '<%= build_dir %>/css/style.min.css': '<%= source_dir %>/<%= app_files.sass_style %>'
        }
      }
    },

    /**
     * `jshint` defines the rules of our linter as well as which files we
     * should check. This file, all javascript sources, and all our unit tests
     * are linted based on the policies listed in `options`. But we can also
     * specify exclusionary patterns by prefixing them with an exclamation
     * point (!); this is useful when code comes from a third party but is
     * nonetheless inside `src/`.
     */
    jshint: {
      src: {
        src: '<%= source_files.js %>'
      },
      test: {
        src: '<%= source_files.jsunit %>'
      },
      gruntfile: [
        'Gruntfile.js'
      ],
      options: {
        curly: true,
        immed: true,
        newcap: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true
      }
    },

    /**
     * ngtemplates is a Grunt plugin that takes all of your template files and
     * places them into JavaScript files as strings that are added to
     * AngularJS's template cache.
     */

    ngtemplates: {
      app: {
        cwd: '<%= source_dir %>',
        src: '<%= app_files.templates %>',
        dest: '<%= build_dir %>/app/templates.js',
        options: {
          bootstrap: function(module, script) {
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
    },

    /**
     * Minify requirejs files
     */
    requirejs: {
      compile: {
        options: {
          mainConfigFile: "<%= build_dir %>/app/main.js",
          optimize: "uglify2",
          name: "main",
          out: "<%= build_dir %>/app/main.js",
          preserveLicenseComments: false,
          findNestedDependencies: true,
          generateSourceMaps: true,
          paths: {
            requireLib: '../vendor/requirejs/require'
          },
          include: [
            'requireLib'
          ],
        }
      }
    },

    preprocess: {
      local: {
        src: '<%= source_dir %>/index.html',
        dest: '<%= build_dir %>/index.html',
        options: {
          context: {
            javascript: '<script data-main="app/main" src="vendor/requirejs/require.js"></script>',
          }
        }
      },
      dev: {
        src: '<%= source_dir %>/index.html',
        dest: '<%= build_dir %>/index.html',
        options: {
          context: {
            javascript: '<script data-main="app/main.min" src="vendor/requirejs/require.js"></script>',
          }
        }
      },
      prod: {
        src: '<%= source_dir %>/index.html',
        dest: '<%= build_dir %>/index.html',
        options: {
          context: {
            javascript: '<script src="js/main.min.js"></script>',
          }
        }
      }
    },

    /**
     * Rename directories when `grunt rename` is executed.
     */
    rename: {
      dev: {
        files: [{
          src: '<%= build_dir %>/app/main.js',
          dest: '<%= build_dir %>/app/main.min.js'
        }]
      },
      prod: {
        files: [{
          src: '<%= bin_dir %>',
          dest: '<%= build_dir %>'
        }]
      },
      karma: {
        files: [{
          src: '<%= build_dir %>/test/PhantomJS*',
          dest: '<%= build_dir %>/test/coverage'
        }]
      }
    },

    /**
     * Karma Unit Test.
     */
    karma: {
      watch: {
        configFile: '<%= test_dir %>/karma.conf.js',
        singleRun: true,
      },
      unit: {
        configFile: '<%= test_dir %>/karma.conf.js',
        singleRun: true,
        preprocessors: {
          '**/app/**/*.js': 'coverage'
        },
        reporters: ['coverage', 'dots', 'junit', 'progress'],
        coverageReporter: {
          dir: '<%= test_dir %>/report/coverage',
          reporters: [{
            type: 'html'
          }, {
            type: 'text-summary'
          }]
        },
        junitReporter: {
          outputFile: '<%= test_dir %>/report/karma-unit.xml'
        },
      }
    },

    /**
     * Protractor e2e testing config
     */
    protractor: {
      options: {
        configFile: "node_modules/protractor/referenceConf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      your_target: {
        options: {
          configFile: "<%= test_dir %>/protractor-conf.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },
    },

    /**
     * shell commands
     */
    exec: {
      refresh: {
        cmd: 'npm install; bower install',
        stdout: true,
        stderr: false
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/app/**/*.js'],
        dest: 'site.js',
      }
    },

    /**
     * create annotated documentations
     */
    docker: {
      app: {
        src: ['Gruntfile.js', 'site.js'],
        dest: '<%= build_dir %>/docs/',
      },
      options: {
        onlyUpdated: true,
        colourScheme: 'friendly',
        ignoreHidden: false,
        sidebarState: false,
        exclude: false,
        lineNums: false
      }
    },

    /**
     * And for rapid development, we have a watch set up that checks to see if
     * any of the files listed below change, and then to execute the listed
     * tasks when they do. This just saves us from having to type "grunt" into
     * the command-line every time we want to see what we're working on; we can
     * instead just leave "grunt watch" running in a background terminal. Set it
     * and forget it, as Ron Popeil used to tell us.
     *
     * But we don't need the same thing to happen for all the files.
     */
    delta: {
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
       * When the Gruntfile changes, we just want to lint it. In fact, when
       * your Gruntfile changes, it will automatically be reloaded!
       */
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile'],
        options: {
          reload: true,
          livereload: false
        }
      },

      /**
       * When html files changes, we need to copy it to build.
       */
      index: {
        files: ['<%= source_dir %>/index.html'],
        tasks: ['preprocess:local']
      },

      /**
       * When our JavaScript source files change, we want to run lint them and
       * run our unit tests.
       */
      jssrc: {
        files: '<%= source_files.js %>',
        tasks: ['newer:jshint:src', 'newer:copy:js', 'karma:watch']
      },

      /**
       * When a JavaScript unit test file changes, we only want to lint it and
       * run the unit tests. We don't want to do any live reloading.
       */
      jsunit: {
        files: [
          '<%= source_files.jsunit %>'
        ],
        tasks: ['newer:jshint:test', 'karma:watch'],
        options: {
          livereload: false
        }
      },

      /**
       * When the Sass files change, we need to compile them to CSS.
       */
      sass: {
        files: '<%= source_files.sass_style %>',
        tasks: ['sass:watch']
      },

      /**
       * When the Template files change, we need to compile them to $templateCache.
       */
      templates: {
        files: '<%= source_files.templates %>',
        tasks: ['ngtemplates']
      },

      /**
       * Watch for new file/folder
       */
      local: {
        files: ['<%= source_dir %>/**', '!<%= source_dir %>/sass/**', '!<%= source_dir %>/**/*.spec.js'],
        tasks: ['newer:copy:local'],
      },
    },

  };

  /**
   * Remove source deleted files/folders from build
   */
  grunt.event.on('watch', function(action, filepath, target) {
    var deleteFilePath = filepath.replace('src/', 'build/');
    if (action === 'deleted') {
      if (grunt.file.exists(deleteFilePath)) {
        grunt.file.delete(deleteFilePath);
      }
    }
  });

  grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

  /**
   * In order to make it safe to just compile or copy *only* what was changed,
   * we need to ensure we are starting from a clean, fresh build. So we rename
   * the `watch` task to `delta` (that's why the configuration var above is
   * `delta`) and then add a new task called `watch` that does a clean build
   * before watching for changes.
   */
  grunt.renameTask('watch', 'delta');
  grunt.registerTask('watch', ['delta']);

  /**
   * Project grunt tasks.
   */
  grunt.registerTask('test', ['karma:unit', 'clean:karma', 'copy:karma', 'rename:karma']);
  grunt.registerTask('docs', ['clean:docs', 'concat', 'docker', 'clean:site_js']);
  grunt.registerTask('refresh', ['clean:refresh', 'exec:refresh', 'build']);

  /**
   * Build grunt tasks.
   */
  grunt.registerTask('build', ['jshint', 'clean:build', 'copy:local', 'sass:local', 'preprocess:local', 'test', 'docs']);
  grunt.registerTask('build-dev', ['jshint', 'clean:build', 'copy:dev', 'ngtemplates', 'requirejs', 'rename:dev']);
  grunt.registerTask('local', ['build']);
  grunt.registerTask('dev', ['build-dev', 'test', 'sass:dev', 'preprocess:dev', 'docs']);
  grunt.registerTask('prod', ['build-dev', 'karma:unit', 'sass:prod', 'preprocess:prod', 'clean:bin', 'copy:prod', 'clean:build', 'rename:prod']);


  /**
   * The default task is to build and watch.
   */
  grunt.registerTask('default', ['local', 'watch']);

};