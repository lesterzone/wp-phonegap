(function () {
    'use strict';

    var moviesService = function (API_URL, $http) {

        var baseUrl = API_URL + 'movies';

        function getAll(params, callback, error) {
            return $http.get(baseUrl, params).then(callback, error);
        }

        function get(id, callback, error) {
            return $http.get(baseUrl + "/" + id).then(callback, error);
        }

        return {
            getAll: getAll,
            get: get
        };
    };

    angular
        .module('app')
        .service('moviesService', moviesService);

    moviesService.$inject = ['API_URL', '$http'];

})();