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

        function signup() {}

        function isLoggedIn() {
            var token = storeSevice.get('token');
            if (token) {
                return true;
            }
            return false;
        }

        return {
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn
        };
    };

    angular
        .module('app')
        .service('sessionsService', sessionsService);

    sessionsService.$inject = ['API_URL', '$http', 'storeSevice'];

})();