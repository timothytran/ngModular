module.exports = function(config) {
	var browsers, exclude;
	exclude = function(path) {
		return {
			pattern: path,
			included: false
		};
	};
	return config.set({
		basePath: '../',
		browsers: ['PhantomJS'],
		files: [{
				pattern: 'src/vendor/**/*.js',
				included: false
			}, {
				pattern: 'src/app/**/*.js',
				included: false
			},
			'test/test-main.js'
		],
		exclude: ['src/app/main.js'],
		frameworks: ['jasmine', 'requirejs'],
		color: true,
		logLevel: config.LOG_INFO,
        singleRun: true,
        reporters: ['dots', 'junit'],
        junitReporter: {
           outputFile: 'test-results.xml' 
        }
	});
};
