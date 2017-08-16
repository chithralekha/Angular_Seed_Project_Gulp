(function() {
    'use strict';

    angular
        .module('inspinia')
        .factory('dataservice', dataservice)
        .factory('AuthFactory', AuthFactory)
        .factory('$localStorage', $localStorage)
        .factory('userService', userService)
        .factory('$cookieFactory', $cookieFactory)
        .factory('$modalFactory', $modalFactory)
        .value('taskDueStatusClassService', {
            retrieveTaskDueStatusClass : retrieveTaskDueStatusClass
        });

    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger,config, $cookies) {
        var isPrimed = false;
        var primePromise;

        var service = {
            
            getTasksSummary : getTasksSummary,
            getAllTasks : getAllTasks,
            getTask : getTask,
            getAllWorkingSets : getAllWorkingSets,
            getAllFilters : getAllFilters,
            saveTask : saveTask,
            getAllControlSets : getAllControlSets,
            getAllRACITeams : getAllRACITeams,
            getAllUsers : getAllUsers
            
        };

        return service;

        function getTasksSummary(bcp, filterId) {
            
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

//            function getAvengersComplete(data, status, headers, config) {
//                return data.data;
//            }
            return deferred.promise;
        }
        
        function getTask(id) {
            var deferred = $q.defer();
            
            var tasksPromise = getTask(id);
            
            $q.when(tasksPromise)
            .then(function (tasksData) {
                var task = tasksData
                deferred.resolve(task);
            });
            
            return deferred.promise;
        }
        
        function getTask(id) {
            return $http({
                method: 'GET',
                url: config.baseURL + 'Tasks/' + id
            })
            .then(sendResponseData)
            .catch(sendGetTaskError)
        }
        
        function getAllControlSets() {
            return $http({
                method: 'GET',
                url: config.baseURL + 'Controls'
//                headers: {
//                    'PS-BookLogger-Version': constants.APP_VERSION
//                },
//                transformResponse: transformGetBooks,
//                cache: true
            })
            .then(sendResponseData)
            .catch(sendGetControlSetsError)
        }
        
        function getAllRACITeams() {
            return $http({
                method: 'GET',
                url: config.baseURL + 'raciteams'
//                headers: {
//                    'PS-BookLogger-Version': constants.APP_VERSION
//                },
//                transformResponse: transformGetBooks,
//                cache: true
            })
            .then(sendResponseData)
            .catch(sendGetRACITeamsError)
        }
        
        function getAllUsers() {
            return $http({
                method: 'GET',
                url: config.baseURL + 'Users'
//                headers: {
//                    'PS-BookLogger-Version': constants.APP_VERSION
//                },
//                transformResponse: transformGetBooks,
//                cache: true
            })
            .then(sendResponseData)
            .catch(sendGetUsersError)
        }
        
        function getAllTasks(bcp, filterId) {

            return $http({
                method: 'GET',
                url: config.baseURL + 'workingSets/'+ bcp + '/TaskInfos?filterId=' + filterId
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
        
        function sendGetControlSetsError(response) {

            return $q.reject('Error retrieving ControlSets. (HTTP status: ' + response.status + ')');

        }
        
        function sendGetRACITeamsError(response) {

            return $q.reject('Error retrieving RACITeams. (HTTP status: ' + response.status + ')');

        }
        
        function sendGetUsersError(response) {

            return $q.reject('Error retrieving ResponsibleUsers. (HTTP status: ' + response.status + ')');

        }
        
        function sendGetTaskError(response) {

            return $q.reject('Error retrieving Task. (HTTP status: ' + response.status + ')');

        }
        
        function getAllWorkingSets() {
            return $http({
                method: 'GET',
                url: config.baseURL + 'WorkingSets/'
//                headers: {
//                    'PS-BookLogger-Version': constants.APP_VERSION
//                },
//                transformResponse: transformGetBooks,
//                cache: true
            })
            .then(sendResponseData)
            .catch(sendGetWorkingSetsError)
        }
        
        function sendGetWorkingSetsError(response) {

            return $q.reject('Error retrieving WorkingSets. (HTTP status: ' + response.status + ')');

        }
        
        function getAllFilters() {
            return $http({
                method: 'GET',
                url: config.baseURL + 'Filters/'
//                headers: {
//                    'PS-BookLogger-Version': constants.APP_VERSION
//                },
//                transformResponse: transformGetBooks,
//                cache: true
            })
            .then(sendResponseData)
            .catch(sendGetFiltersError)
            
        }
        
        function sendGetFiltersError(response) {

            return $q.reject('Error retrieving Filters. (HTTP status: ' + response.status + ')');

        }
        
        function saveTask(task) {
            alert(task.title);
            //task.title = 'Policy Control 1 Task1';
            $http.put(config.baseURL + 'Tasks/' + task.id, task,{ headers: { 'Authorization' : 'Bearer ' + $cookies.get('AccessToken') } });
            alert('success');
        }

    }   
    
    function $localStorage($window) {
    return {
        store: function (key, value) {
            $window.localStorage[key] = value;
        },
        get: function (key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        remove: function (key) {
            $window.localStorage.removeItem(key);
        },
        storeObject: function (key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function (key, defaultValue) {
            return JSON.parse($window.localStorage[key] || defaultValue);
        }
    }
    }
    
    function $cookieFactory($cookies, $location) {
    return {
        put: function (key, value) {
            if ($location.host() === 'localhost') {
                $cookies.put(key, value, {'path' : '/' });
            }
            else {
                $cookies.put(key, value, {'domain' : $location.host(), 'path' : '/' });
            }
        },
        get: function (key, defaultValue) {
            return $cookies.get(key) || defaultValue;
        },
        remove: function (key) {
           $cookies.remove(key);
        }
    }
    }
    
    function $modalFactory($uibModal, $http, $q, config, $cookies) {
        var open = function (size, title, id, message) {
            //alert(id);
            return $uibModal.open({
                controller: 'TaskAddEditModalController',
                controllerAs: 'vm',
                templateUrl : 'app/taskboard/taskAddEditModal.html',
                size: size,
                windowClass: 'app-modal-window',
                backdrop :'static',
                keyboard :false,
                resolve: {
                    items: function() {
                        return $http.get(config.baseURL + 'Tasks/' + id, { headers: {'Authorization' : 'Bearer ' + $cookies.get('AccessToken')}})
                            .then(function (response) {
                            //alert(response.data);
                            return response.data;
                        })
                    }
                }
            });
        };
        
        return {
            open: open
        };
    }
    
    function AuthFactory($rootScope, $http, $location, $q, exception, logger, config, $localStorage, $cookieFactory) {
        
        var authFac = {},
            TOKEN_KEY = 'Token',
            PROFILE_KEY = 'Profile',
            isAuthenticated = false,
            username = '',
            authToken = undefined;
        
        var userData = {
                isAuthenticated: false,
                username: '',
                bearerToken: '',
                expirationDate: null
            };
        
        var authFac = {
            authenticate : authenticate,
            logout : logout,
            getUserName : getUserName,
            getUserData : getUserData
        };
        
        return authFac;
        
        function authenticate(username, password) {
            
            var deferred = $q.defer();
            
            var data = $.param({
                'grant_type' : 'password',
                'username' : username,
                'password' : password
            }),
                Config = {
                    headers : {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                };
            
            var authPromise  =   $http.post(config.authURL + 'oauth/token', data, Config);

            $q.when(authPromise)
            .then(function (authData) {
                
                userData.isAuthenticated = 'true';
                userData.username = username;
                userData.bearerToken = authData.data.access_token;
                userData.expirationDate = new Date(authData['.expires']);
                
                deferred.resolve(userData);
                
                storeUserCredentials(userData);
            })
            .catch(sendAuthError);
            
            return deferred.promise;
            
        //   return $http.post(config.authURL + 'oauth/token', data, Config)
          
            // following code for some reason gives CORS error.
            //  return $http({
           //     method: 'POST',
           //     url: config.authURL + 'oauth/token',
           //     headers : {
           //             'Content-Type' : 'application/x-www-form-urlencoded'
           //         }
            //                transformResponse: transformGetBooks,
            //                cache: true
            //   })
//            .then(function (response) {
//               storeUserCredentials({username:username, token: response.data.access_token});
//           })
//            .catch(sendAuthError)
        }
        
        function logout () {
            destroyUserCredentials();
            destroyUserProfile();
        }
        
        function destroyUserCredentials() {
            
            userData.isAuthenticated = 'false';
            userData.username = '';
            //userData.bearerToken = authData.access_token;
            //userData.expirationDate = new Date(authData['.expires']);
            //$http.defaults.headers.common['x-access-token'] = authToken;
            $localStorage.remove(TOKEN_KEY);
        }
        
        function destroyUserProfile() {
            
            $localStorage.remove(PROFILE_KEY);
        }
        
        function getUserName () {
            return userData.username;
        }
        
        function getUserData () {
            return userData;
        }
        
        function sendResponseData(response) {
            
            //alert(response.data.access_token);
            //alert('userName =' + response.data);
            storeUserCredentials({username:username, token: response.token});
            //$rootScope.$broadcast('login:Successful');
            return response.data;

        }
        
        function storeUserCredentials(credentials) {
            
            $localStorage.storeObject(TOKEN_KEY, credentials);
            $cookieFactory.remove('AccessToken');
            //alert(credentials.bearerToken);
            $cookieFactory.put('AccessToken', credentials.bearerToken)
            // Commented below code because this has been handled using $q.defer
            // useCredentials(credentials);
        }
        
        function useCredentials(credentials) {
            isAuthenticated = true;
            username = credentials.username;
            authToken = credentials.token;
            // alert(username);
            // Set the token as header for your requests!
            // $http.defaults.headers.common['x-access-token'] = authToken;
        }
        
        function sendAuthError(response) {

            return $q.reject('Error retrieving the AuthFac Service. (HTTP status: ' + response.status + ')');

        }
    }
    
    function userService ($http, $location, $q, exception, logger,config, $cookies, $localStorage) {
        
        var userProfile = {},
            PROFILE_KEY = 'Profile',           
            service = {
                
            getUserProfile : getUserProfile
            
            }
        return service
        
        function getUserProfile() {
            //alert($cookies.get('AccessToken'));
            var deferred = $q.defer();
            
            var userProfilePromise =  $http.get(config.authURL + 'user/profile', {
                        headers: {
                            'Authorization' : 'Bearer ' + $cookies.get('AccessToken')
                        }
                    });
            $q.when(userProfilePromise)
            .then(function (userProfileData) {
                
                userProfile = userProfileData;
                deferred.resolve(userProfile);
                storeUserProfile(userProfile);
                
            })
            .catch(sendGetUserProfileError)
            
            return deferred.promise;
        }
        
        function storeUserProfile(userProfile) {
            
            $localStorage.storeObject(PROFILE_KEY, userProfile);
        }
        
        function sendResponseData(response) {

            return response.data;

        }
        
        function sendGetUserProfileError(response) {

            return $q.reject('Error retrieving User Profile. (HTTP status: ' + response.status + ')');

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
