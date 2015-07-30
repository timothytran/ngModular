define(['modules/home/home', 'modules/home/directives/underline-text'], function() {
  'use strict';

  return describe('homeDirective', function() {
    beforeEach(function() {
      module('ui.router');
      module('myApp.home');
    });

    it('should make element text underline', function() {
      inject(function($compile, $rootScope) {
        var element = $compile('<span underline-text>test</span>')($rootScope);
        expect(element.css('textDecoration')).toEqual('underline');
      });
    });
  });
});