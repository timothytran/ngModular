define(['common/services'], function() {
  'use strict';

  return describe('Common service', function() {
    var service;

    beforeEach(module('myApp.services'));
    beforeEach(inject(function($injector) {
      service = $injector.get('commonService');
    }));

    it('common service name', function() {
      return expect(service.serviceText).toEqual('text from common service');
    });

    it('common service context', function() {
      return expect(service.count).toBe(5);
    });
  });
});
