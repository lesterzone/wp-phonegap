(function () {
    'use strict';
    var module = angular.module('app');

    //login screen
    module.controller('NewAccountController', function ($scope, sessionsService) {

        $scope.data = {
            'email': '',
            'password': ''
        };
        
        $scope.returnLogin = function () {
            app.navi.pushPage('views/login.html');
        }


        // app.navi.pushPage('views/page.html');

        /*function openProtectedApp() {
            loginNavi.pushPage('views/main.html');
        }*/

    });
})();