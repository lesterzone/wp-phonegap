(function () {
    'use strict';
    var module = angular.module('app');

    //login screen
    module.controller('NewAccountController', function ($scope, usersService) {
        
        $scope.returnLogin = function () {
            app.navi.pushPage('views/login.html');
        }

        $scope.signup = function () {    
            usersService.signup($scope.data,
            function (data) {
                app.navi.pushPage('views/login.html');
            },
            function (error) {
                ons.notification.alert({
                    message: error.data.error.message
                });
            });
        }
    });
})();