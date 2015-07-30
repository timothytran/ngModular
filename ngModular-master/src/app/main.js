require.config({
  paths: {
    'jquery': '../vendor/dist/jquery',
    'angular': '../vendor/angular/angular',
    'angularUiRouter': '../vendor/angular-ui-router/release/angular-ui-router',
    'angularMocks': '../vendor/angular-mocks/angular-mocks',
    'text': '../vendor/requirejs-text/text'
  },
  shim: {
    'angular': {
      'exports': 'angular'
    },
    'angularUiRouter': {
      deps: ['angular']
    },
    'angularMocks': {
      deps: ['angular'],
      'exports': 'angular.mock'
    }
  },
  priority: [
    'angular'
  ]
});

window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'config',
  'angular',
  'app',
  'templates',
], function(config, angular, app) {
  'use strict';

  var $html = angular.element(document.getElementsByTagName('html')[0]);

  // Resume angular boostrap process
  angular.element().ready(function() {
    angular.resumeBootstrap([config.ngApp]);
  });
});