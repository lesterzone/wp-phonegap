(function () {
    'use strict';

    var usersService = function (API_URL, $http) {

        var baseUrl = API_URL + 'users';

        return {
            // login: login
        };
    };

    angular
        .module('app')
        .service('usersService', usersService);

    usersService.$inject = ['API_URL', '$http'];

})();