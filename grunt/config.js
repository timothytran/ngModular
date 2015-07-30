/**
 * This file contains all configuration for the build process.
 */
module.exports = {
    /**
     * Project folders
     */
    sourceDir: 'src',
    buildDir: 'build',
    testDir: 'test',
    analysisDir: 'analysis',

    /**
     * Source files
     */
    sourceFiles: {
        js: 'src/app/**/*.js',
        jsSrc: ['src/app/**/*.js', '!src/app/**/*.spec.js'],
        jsUnit: ['src/app/**/*.spec.js'],
        sass: ['src/sass/**/*.scss'],
        sassLint: ['src/sass/**/*.scss', '!src/sass/vendors/**', '!src/sass/vendors-ext/**'],
        templates: ['app/**/*.html'],
    },
};
