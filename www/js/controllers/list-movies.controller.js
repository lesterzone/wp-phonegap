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

        $scope.getDetails = function (id) {
            
             moviesService.getDetails(id,
                function (data) {
                    app.navi.pushPage('views/details-movie.html', {param1: 'bla bla'});

                    //alert('ok');
                }, function (error) {
                    ons.notification.alert({
                        message: error.data.error.message
                    });
                }
            )
        }

    	
    });
})();