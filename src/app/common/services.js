define(['angular'], function(angular) {
    'use strict';

    return angular.module('myApp.services', [])
        .factory('commonService', function() {
            var pub = {
                serviceText: 'text from common service',
                count: 5
            };

            return pub;
        });
});
