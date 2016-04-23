(function () {
    'use strict';

    var usersService = function (API_URL, $http) {

        var baseUrl = API_URL + 'users';

        function signup(params, callback, error) {
            return $http.post(baseUrl, params).then(callback, error);
        }

        return {
             signup: signup
        };
    };

    angular
        .module('app')
        .service('usersService', usersService);

    usersService.$inject = ['API_URL', '$http'];

})();