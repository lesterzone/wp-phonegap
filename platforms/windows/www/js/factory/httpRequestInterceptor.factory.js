(function () {
    'use strict';

    var httpRequestInterceptor = function (storeSevice) {
        return {
            request: function (config) {
                var token = storeSevice.get('token') || null;
                config.headers.Authorization = token;
                return config;
            },
            responseError: function (response) {
                if (response.status === 401) {
                    storeSevice.clear();
                }
                return response;
            }
        };
    }

    angular
        .module('app')
        .factory('httpRequestInterceptor', httpRequestInterceptor);

    httpRequestInterceptor.$inject = ['storeSevice'];

})();
