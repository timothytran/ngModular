/**
 * Rename directories when `grunt rename` is executed.
 * NOTE: Karma outputs the coverage files into directories
 * that are named the platform they were generated on.
 * The names have spaces in them, which could cause errors.
 */
module.exports = {
    karma: {
        files: [{
            src: '<%= config.buildDir %>/test/PhantomJS*',
            dest: '<%= config.buildDir %>/test/coverage'
        }]
    },
};
