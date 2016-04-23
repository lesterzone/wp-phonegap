(function () {
    'use strict';
    var module = angular.module('app');

    module.controller('DetailMovieController', function ($scope, moviesService) {

        var movie_id = $scope.app.naviSliding.getCurrentPage().options.id;
        $scope.movie;

        function getMovie() {
            moviesService.get(movie_id, function (data) {
                $scope.movie = data.data;
                console.log($scope.movie);
            }, function (error) {
                ons.notification.alert({
                    message: error.data.error.message
                });
            });
        }
        getMovie();
    });
})();