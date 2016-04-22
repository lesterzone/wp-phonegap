(function () {
    'use strict';
    var module = angular.module('app');

    //login screen
    module.controller('SlidingController', function ($scope, sessionsService,storeSevice) {

    	$scope.logout = function () {
    		sessionsService.logout(
            function (data) {
                storeSevice.clear();
                console.log('succes');
               // app.navi.pushPage('views/login.html');
            },
            function (error) {
                storeSevice.clear();
                console.log('error');
                //app.navi.pushPage('views/login.html');
            });
        }
    });
})();