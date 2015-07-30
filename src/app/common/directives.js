define(['angular'], function(angular) {
    'use strict';

    // Common directives used across all modules
    return angular.module('myApp.directives', ['myApp.services'])
        .directive('redText', function() {
            return {
                link: function($scope, $element) {
                    $element.css({
                        color: 'red'
                    });
                }
            };
        });
});
