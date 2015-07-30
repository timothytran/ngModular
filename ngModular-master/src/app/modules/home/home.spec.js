define(['modules/home/home'], function() {
  'use strict';

  return describe('Home module', function() {
    beforeEach(function() {
      module('ui.router');
      module('myApp.home');
    });

    it('Home controller should exist', inject(function($rootScope, $controller) {
      expect($controller).toBeDefined();
    }));
  });
});