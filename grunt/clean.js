/**
 * The directories to delete when `grunt clean` is executed.
 */
module.exports = {
    build: [
        '<%= config.buildDir %>'
    ],
    karma: ['<%= config.buildDir %>/test'],
};
