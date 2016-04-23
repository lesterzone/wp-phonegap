(function () {
    'use strict';
    var module = angular.module('app');

    module.controller('ListMovieController', function ($scope, moviesService) {

        $scope.movies;

        function getMovies() {
            moviesService.get(
                function (data) {
                    $scope.movies = data.data.data;
                }, function (error) {
                    ons.notification.alert({
                        message: error.data.error.message
                    });
                }
            )
        }
        getMovies();

    	
    });
})();