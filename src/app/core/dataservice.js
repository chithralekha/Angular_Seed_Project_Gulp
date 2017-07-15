(function() {
    'use strict';

    angular
        .module('inspinia')
        .factory('dataservice', dataservice)
        .value('taskDueStatusClassService', {
            retrieveTaskDueStatusClass : retrieveTaskDueStatusClass
        });

    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger,config) {
        var isPrimed = false;
        var primePromise;

        var service = {
            
            getAvengers : getAvengers,
            getAllTasks : getAllTasks
            
        };

        return service;

        function getAvengers(bcp, filterId) {
            
            var deferred = $q.defer();
            
            var tasksPromise = getAllTasks(bcp, filterId);
            
            $q.when(tasksPromise)
            .then(function (tasksData) {
                
                var allTasks = tasksData.taskInfos;
                var todoList = [], inProgressList = [], completedList = [];
                
                allTasks.forEach(function (currentTask, index, array) {
                    
                    if(currentTask.taskState.id === 1)
                        todoList.push(currentTask);
                    else if(currentTask.taskState.id === 2)
                        inProgressList.push(currentTask);
                    else if( currentTask.taskState.id === 3)
                        completedList.push(currentTask);
                });
                
                var tasksSummaryData = {
                    todoList : todoList,
                    inProgressList : inProgressList,
                    completedList : completedList
                    
                };
                
                 deferred.resolve(tasksSummaryData);
            });
           
//            alert(tasksPromise);
            
//            return $http({
//                method: 'GET',
//                url: config.baseURL + 'WorkingSets/'+ bcp + '/Tasks?filterId=' + filterId
//                headers: {
//                    'PS-BookLogger-Version': constants.APP_VERSION
//                },
//                transformResponse: transformGetBooks,
//                cache: true
//            })
            
            //TODO: uncomment the bellow http get if no header specification required.
            //$http.get(config.baseURL + 'WorkingSets/'+ bcp + '/Tasks?filterId=' + filterId)
            //Following .then and .catch applies to both with headers and without headers.
//                .then(getAvengersComplete)
//                .catch(function(message) {
//                    exception.catcher('XHR Failed for getAvengers')(message);
//                    $location.url('/');
//                });

            function getAvengersComplete(data, status, headers, config) {
                return data.data;
            }
            return deferred.promise;
        }
        
        function getAllTasks(bcp, filterId) {

            return $http({
                method: 'GET',
                url: config.baseURL + 'WorkingSets/'+ bcp + '/Tasks?filterId=' + filterId
//                headers: {
//                    'PS-BookLogger-Version': constants.APP_VERSION
//                },
//                transformResponse: transformGetBooks,
//                cache: true
            })
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
