var file, tests;

tests = [];

for (file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/.spec\.js$/.test(file) && file.indexOf('/src/vendor/') === -1) {
            tests.push(file);
        }
    }
}

require.config({
    baseUrl: '/base/src/app/',
    paths: {
        'angular': '../vendor/angular/angular',
        'angularMocks': '../vendor/angular-mocks/angular-mocks',
        'angularUiRouter': '../vendor/angular-ui-router/release/angular-ui-router',
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
    }
});

require(['config', 'angular'], function(config, angular) {
    'use strict';

    return require(['angularMocks', 'angularUiRouter'], function() {
        angular.module(config.ngApp, ['ngMock', 'ui.router']);
        return require(tests, function() {
            return window.__karma__.start();
        });
    });
});
