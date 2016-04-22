(function() {

    'use strict';
    /* ***************************************************************************** */
    // Init App
    /* ***************************************************************************** */
    var module = angular.module('app', ['onsen']);
    module.constant('API_URL', 'http://utnwsphonegap.herokuapp.com/');
    module.config(['$httpProvider',
        function($httpProvider) {
            $httpProvider.interceptors.push('httpRequestInterceptor');
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        }
    ]);

})();
