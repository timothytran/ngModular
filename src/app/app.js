define([
  'config',
  'angular',
  'common/services',
  'common/filters',
  'common/directives',
  'modules/home/home',
  'angularUiRouter',
], function(config, angular) {
  'use strict';

  // Declare app level module which depends on filters, and services
  return angular.module(config.ngApp, [
    'ui.router',
    'myApp.services'
    'myApp.filters',
    'myApp.directives',
    'myApp.home'
  ]).config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      // Define initial route
      $urlRouterProvider.otherwise('/home');
    }
  ]);
});
