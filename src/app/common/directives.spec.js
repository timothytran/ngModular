define(['common/directives'], function() {
    'use strict';

    return describe('common directives', function() {
        beforeEach(module('myApp.directives'));

        describe('redText', function() {
            it('should make element color red', function() {
                inject(function($compile, $rootScope) {
                    var element = $compile('<span red-text>test</span>')($rootScope);
                    expect(element.css('color')).toEqual('red');
                });
            });
        });
    });
});
