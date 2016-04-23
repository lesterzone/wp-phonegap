(function () {
    'use strict';
    var module = angular.module('app');

    module.controller('ListMovieController', function ($scope, moviesService) {

        $scope.movies;

        function getMovies() {
            moviesService.getAll( { page: 1 },
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