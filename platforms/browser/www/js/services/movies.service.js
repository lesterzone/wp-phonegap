(function () {
    'use strict';

    var moviesService = function (API_URL, $http) {

        var baseUrl = API_URL + 'movies';
        var baseUrlDetails = API_URL + 'movies/id';

        function get(callback, error) {
            return $http.get(baseUrl).then(callback, error);
        }

        function getDetails(id,callback, error) {
            return $http.get(baseUrlDetails.replace('id',id)).then(callback, error);
        }

        return {
            get: get,
            getDetails :getDetails
        };
    };

    angular
        .module('app')
        .service('moviesService', moviesService);

    moviesService.$inject = ['API_URL', '$http'];

})();