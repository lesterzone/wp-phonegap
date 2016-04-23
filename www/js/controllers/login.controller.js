(function () {
    'use strict';
    var module = angular.module('app');

    //login screen
    module.controller('LoginController', function ($scope, sessionsService, storeSevice) {

        $scope.showLogin = false;

        if ( sessionsService.isLoggedIn() ) {
            app.navi.pushPage('views/main.html', { animation: "none" });
        } else {
            $scope.showLogin = true;
        }

        $scope.data = {
            'email': '',
            'password': ''
        };
        
        $scope.signIn = function () {
            sessionsService.login($scope.data,
            function (data) {
                if (data.status === 200) {
                    storeSevice.set('token', data.data.token);
                    app.navi.pushPage('views/main.html');
                } else {
                    ons.notification.alert({
                        message: data.data.error.message
                    });
                }
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