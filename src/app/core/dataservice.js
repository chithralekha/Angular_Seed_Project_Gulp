(function() {
    'use strict';

    angular
        .module('inspinia')
        .factory('dataservice', dataservice)
        .value('taskDueStatusClassService', {
            retrieveTaskDueStatusClass: retrieveTaskDueStatusClass
        });

    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger,config) {
        var isPrimed = false;
        var primePromise;

        var service = {
            getAvengers: getAvengers,
            getAllTasks : getAllTasks
        };

        return service;

        function getAvengers(bcp, filterId) {
            
            var deferred = $q.defer();
            
            var tasksPromise = getAllTasks(bcp, filterId);
            
            return $http.get(config.baseURL + 'WorkingSets/'+ bcp + '/Tasks?filterId=' + filterId)
                .then(getAvengersComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getAvengers')(message);
                    $location.url('/');
                });

            function getAvengersComplete(data, status, headers, config) {
                return data.data;
            }
            return deferred.promise;
        }
        
        function getAllTasks(bcp, filterId) {

            return $http.get(config.baseURL + 'WorkingSets/'+ bcp + '/Tasks?filterId=' + filterId)
            .then(sendResponseData)
            .catch(sendGetTasksError)

        }
        
        function sendResponseData(response) {

            return response.data;

        }

        function sendGetTasksError(response) {

            return $q.reject('Error retrieving Tasks. (HTTP status: ' + response.status + ')');

        }

    }
    
    function retrieveTaskDueStatusClass(task) {
        var dueStatusClass = null;
        switch(task.dueStatus.status)
        {
            case 'Overdue' :
                dueStatusClass = 'danger-element';
                break;
            case 'On Time' :
                dueStatusClass  = 'success-element';
                break;
            case 'In Jeopardy' :
                dueStatusClass = 'warning-element';
                break;
        }
        return dueStatusClass;
    }
})();
