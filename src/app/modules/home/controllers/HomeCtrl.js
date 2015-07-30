define(['angular'], function(angular) {
    'use strict';

    // Home controller
    var HomeCtrl = ['$scope', 'commonService',
        function($scope, commonService) {
            $scope.serviceText = commonService.serviceText;
            $scope.homeText = 'text from home controller';
        }
    ];

    return HomeCtrl;
});
