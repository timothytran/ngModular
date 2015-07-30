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

        it('should titlecase a string', function() {
            var string = '',
                result;

            result = $filter('titlecase')(string, 'titlecase');
            expect(result).toEqual('');
        });
    });
});
