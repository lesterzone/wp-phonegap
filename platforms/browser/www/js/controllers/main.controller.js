(function () {
    'use strict';
    var module = angular.module('app');

    //login screen
    module.controller('MainController', function ($scope, sessionsService) {
    	$scope.getMovie = function () {
    		ons.notification.alert({
            	message: 'change viewsss'
             });
        }
    });
})();