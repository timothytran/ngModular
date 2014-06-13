define(['angular', 'modules/home/controllers/HomeCtrl', 'modules/home/directives/underline-text', 'modules/home/filters/camelcase'],
	function(angular, HomeCtrl, homeDirective, homeFilter) {
		'use strict';

		// Home module
		return angular.module('myApp.home', [])
			.config(['$stateProvider',
				function($stateProvider) {
					$stateProvider.state('home', {
						url: '/home',
						views: {
							"main": {
								controller: 'HomeCtrl',
								templateUrl: 'app/modules/home/home.html'
							}
						},
						data: {
							pageTitle: 'Home'
						}
					});
				}
			])
			.controller('HomeCtrl', HomeCtrl)
			.directive('underlineText', homeDirective)
			.filter('camelcase', homeFilter);
	});