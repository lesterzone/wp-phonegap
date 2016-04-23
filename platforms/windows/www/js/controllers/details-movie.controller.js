(function () {
    'use strict';
    var module = angular.module('app');

    module.controller('DetailsMovieController', function ($scope, moviesService) {

        function setValues() {
        	$scope.navigator.getCurrentPage().options.param1
        }
    });
})();