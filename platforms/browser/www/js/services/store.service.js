(function () {
    'use strict';

    function Store() {
        /**
        * Coming from library
        * https://github.com/marcuswestin/store.js/
        **/
        function error() {
            console.log('Storejs lib is not initialized.');
        }

        function set(key, val) {
            if (store) {
                return store.set(key, val);
            } else {
                error();
            }
        }

        function get(key) {
            if (store) {
                return store.get(key);
            } else {
                error();
            }
        }

        function clear() {
            if (store) {
                return store.clear();
            } else {
                error();
            }
        }

        function token() {
            var data = get('cu');
            if (data) {
                return data.tk;
            }
            return null;
        }

        return {
            set: set,
            get: get,
            clear: clear,
            token: token,
        };
    }

    angular
        .module('app')
        .factory('storeSevice', Store);
})();