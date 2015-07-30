/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * Project folders
   */
  source_dir: 'src',
  build_dir: 'build',
  bin_dir: 'bin',
  test_dir: 'test',

  /**
   * App files
   */
  app_files: {
    js: ['app/**/*.js', '!app/**/*.spec.js'],
    templates: ['app/**/*.html'],
    sass_lib: 'sass/lib.scss',
    sass_style: 'sass/style.scss',
    jsunit: [ 'app/**/*.spec.js' ],
  },

  /**
   * Source files
   */
  source_files: {
    js: ['src/app/**/*.js', '!src/app/**/*.spec.js'],
    spec: ['src/app/**/*.js'],
    templates: ['src/app/**/*.html'],
    sass_style: ['src/sass/**/*.scss', 'src/app/**/*.scss'],
    jsunit: [ 'src/app/**/*.spec.js' ],
  },
};