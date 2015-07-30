define(['modules/home/home', 'modules/home/controllers/HomeCtrl'], function() {
    'use strict';

    return describe('HomeCtrl', function() {
        var HomeCtrl,
            commonServiceMock;

        beforeEach(function() {
            module('ui.router');
            module('myApp.home');
        });

        beforeEach(function() {
            commonServiceMock = {
                serviceText: 'text from common service'
            };
        });

        it('HomeCtrl should exist', inject(function($rootScope, $controller) {
            var scope = $rootScope.$new();

            HomeCtrl = $controller('HomeCtrl', {
                $scope: scope,
                commonService: commonServiceMock
            });

            expect(HomeCtrl).toBeDefined();
        }));

        it('name should equal', inject(function($rootScope, $controller) {
            var scope = $rootScope.$new();

            HomeCtrl = $controller('HomeCtrl', {
                $scope: scope,
                commonService: commonServiceMock
            });
            expect(scope.serviceText).toEqual('text from common service');
        }));

        it('context should equal', inject(function($rootScope, $controller) {
            var scope = $rootScope.$new();

            HomeCtrl = $controller('HomeCtrl', {
                $scope: scope,
                commonService: commonServiceMock
            });

            expect(scope.homeText).toEqual('text from home controller');
        }));
    });
});
