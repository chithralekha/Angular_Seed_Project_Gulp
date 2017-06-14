(function() {
    'use strict';

    angular
        .module('inspinia')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger,config) {
        var isPrimed = false;
        var primePromise;

        var service = {
            getAvengers: getAvengers
        };

        return service;

        function getAvengers() {
            return $http.get(config.baseURL + 'WorkingSets/1/Tasks?filterId=1')
                .then(getAvengersComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getAvengers')(message);
                    $location.url('/');
                });

            function getAvengersComplete(data, status, headers, config) {
                return data.data;
            }
        }

    }
})();
