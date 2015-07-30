/**
 * Karma Unit Test.
 */
module.exports = {
    unit: {
        configFile: '<%= config.testDir %>/karma.conf.js',
        singleRun: true,
    },
    full: {
        configFile: '<%= config.testDir %>/karma.conf.js',
        singleRun: true,
        preprocessors: {
            '**/app/**/!(*.spec.js)': 'coverage'
        },
        reporters: ['coverage', 'dots', 'progress'],
        coverageReporter: {
            dir: '<%= config.testDir %>/report/coverage',
            reporters: [{
                type: 'html'
            }, {
                type: 'text-summary'
            }, {
                // Generates Jenkins Report XML
                type: 'cobertura'
            }]
        },
    }
};
