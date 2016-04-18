(function () {
   'use strict';
    var module = angular.module('app', ['onsen']);

    module.service('service', ["$http", function ($http) {
        var test = function (usertoken) {
            alert("fffffffffffffffffffff");

        }
        return {
            getUserSites: getUserSites
        };
    }]);
})();