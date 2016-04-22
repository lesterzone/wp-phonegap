(function () {
    'use strict';
    var module = angular.module('app');

    //login screen
    module.controller('LoginController', function ($scope, sessionsService) {

        $scope.data = {
            'email': 'kenneth.89.an@gmail.com',
            'password': 'kalfaro89'
        };
        
        $scope.signIn = function () {
            sessionsService.login($scope.data,
            function (data) {
                app.navi.pushPage('views/create-account.html');
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