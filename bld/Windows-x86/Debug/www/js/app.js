(function() {

    'use strict';
    /* ***************************************************************************** */
    // Init App
    /* ***************************************************************************** */
    var module = angular.module('app', ['onsen']);
    module.constant('API_URL', 'http://utnwsphonegap.herokuapp.com/');

    /* ***************************************************************************** */
    // Services
    /* ***************************************************************************** */
    module.service('sessions', function (API_URL, $http) {
        var baseUrl = API_URL + 'sessions';
        var data = {};

        data.logIn = function (params) {
            return $http.post(baseUrl, params);
        }

        return data;
    });


    

    /* ***************************************************************************** */
    // Contollers
    /* ***************************************************************************** */
    








  

})();

