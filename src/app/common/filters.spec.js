define(['common/filters'], function() {
  'use strict';

  return describe('Common filters', function() {
    var $filter;

    beforeEach(function() {
      module('myApp.filters');

      inject(function(_$filter_) {
        $filter = _$filter_;
      });
    });

    it('should titlecase a string', function() {
      var string = 'hello world',
        result;

      result = $filter('titlecase')(string, 'titlecase');
      expect(result).toEqual('Hello World');
    });

    it('should titlecase an empty string', function() {
      var string = '',
        result;

      result = $filter('titlecase')(string, 'titlecase');
      expect(result).toEqual('');
    });

    it('should camel case a set of words', function() {
      var phrase = 'This could be used to tokenize phrases',
          result;
      result = $filter('camelcase')(phrase, 'camelcase');
      expect(result).toEqual('thisCouldBeUsedToTokenizePhrases');
    });
  });
});
