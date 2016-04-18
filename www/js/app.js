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

    module.service('usersService', function (API_URL, $http) {
        var baseUrl = API_URL + 'users';
    });

})();
