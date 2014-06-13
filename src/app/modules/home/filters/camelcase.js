define([], function() {
	'use strict';

	// Convert string to camelcase
	var homeFilter = function() {
		return function(input) {
			if (input) {
				input = input.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
				return input.trim().replace(/ /g, '-').toLowerCase().replace(/-(.)/g, function(match, group1) {
					return group1.toUpperCase();
				});
			} else {
				return input;
			}
		};
	};
	
	return homeFilter;
});