(function () {
    'use strict';

    var sessionsService = function (API_URL, $http, storeSevice) {

        var baseUrl = API_URL + 'sessions';

        function login(params, callback, error) {
            return $http.post(baseUrl, params).then(callback, error);
        }

        function logout(callback, error) {
            return $http.delete(baseUrl).then(callback, error);
        }
        
        return {
            login: login,
            logout: logout
        };
    };

    angular
        .module('app')
        .service('sessionsService', sessionsService);

    sessionsService.$inject = ['API_URL', '$http', 'storeSevice'];

})();