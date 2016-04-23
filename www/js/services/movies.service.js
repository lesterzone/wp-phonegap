(function () {
    'use strict';

    var moviesService = function (API_URL, $http) {

        var baseUrl = API_URL + 'movies';

        function get(callback, error) {
            return $http.get(baseUrl).then(callback, error);
        }

        return {
            get: get
        };
    };

    angular
        .module('app')
        .service('moviesService', moviesService);

    moviesService.$inject = ['API_URL', '$http'];

})();