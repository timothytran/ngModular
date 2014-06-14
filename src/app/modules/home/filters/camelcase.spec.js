define(['modules/home/home', 'modules/home/filters/camelcase'], function() {
  'use strict';

  return describe('Home Filter', function() {
    var $filter;

    beforeEach(function() {
      module('ui.router');
      module('myApp.home');

      inject(function(_$filter_) {
        $filter = _$filter_;
      });
    });

    it('should camelcase a string', function() {
      var string = 'hello world',
        result;

      result = $filter('camelcase')(string, 'camelcase');
      expect(result).toEqual('helloWorld');
    });

    it('should camelcase a string', function() {
      var string = '',
        result;

      result = $filter('camelcase')(string, 'camelcase');
      expect(result).toEqual('');
    });
  });
});