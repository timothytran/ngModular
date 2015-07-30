/**
 * Concatenate multiple files into one
 */
module.exports = {
    options: {
        separator: ';',
    },
    dist: {
        src: '<%= config.sourceFiles.jsSrc %>',
        dest: 'app.js',
    }
};
