(function () {
    'use strict';
    var module = angular.module('app');

    //login screen
    module.controller('SlidingController', function ($scope, sessionsService,storeSevice) {

    	$scope.logout = function () {
    		sessionsService.logout(
            function (data) {
                logout();
            },
            function (error) {
                logout();
            });
        }

        $scope.movies = function () {
            app.navi.pushPage('views/main.html');
        }

        $scope.maps = function () {
            app.navi.pushPage('views/maps.html');
        }

        function logout() {
            storeSevice.clear();
            app.navi.pushPage('views/login.html');
        }

    });
})();