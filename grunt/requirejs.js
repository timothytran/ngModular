/**
 * Optimize requirejs files using r.js
 */
module.exports = {
    dev: {
        options: {
            mainConfigFile: '<%= config.buildDir %>/app/main.js',
            optimize: 'uglify2',
            name: 'main',
            out: '<%= config.buildDir %>/app/<%= package.name %>.min.js',
            preserveLicenseComments: false,
            findNestedDependencies: true,
            generateSourceMaps: true,
            uglify2: {
                mangle: false,
                output: {
                    beautify: true
                }
            },
            paths: {
                requireLib: '../vendor/requirejs/require'
            },
            include: [
                'requireLib'
            ],
        }
    },
};
