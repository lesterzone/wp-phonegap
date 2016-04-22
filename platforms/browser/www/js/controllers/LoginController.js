(function () {
    'use strict';
    var module = angular.module('app');

    //login screen
    module.controller('LoginController', function ($scope, sessionsService) {

        $scope.data = {
            'email': 'jm_neta@hotmail.com',
            'password': '12345'
        };
        
        $scope.signIn = function () {
            sessionsService.login($scope.data,
            function (data) {
                app.navi.pushPage('views/main.html');
            },
            function (error) {
                ons.notification.alert({
                    message: error.data.error.message
                });
            });
        }

        $scope.createAccount = function () {
            app.navi.pushPage('views/create-account.html');
        }

    });
})();