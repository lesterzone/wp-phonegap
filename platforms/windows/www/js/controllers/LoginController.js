(function () {
    'use strict';
    var module = angular.module('app');

    //login screen
    module.controller('LoginController', function ($scope, sessions) {

        $scope.data = {
            'email': 'kenneth.89.an@gmail.com',
            'password': 'kalaro89'
        };
        var a = sessions.logIn($scope.data);
        console.log(a);

        // app.navi.pushPage('views/page.html');

        /*function openProtectedApp() {
            loginNavi.pushPage('views/main.html');
        }*/

    });
})();