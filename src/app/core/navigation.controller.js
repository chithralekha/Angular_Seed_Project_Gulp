'use strict';

angular.module('inspinia')
    .controller('NavigationController', function (dataservice, logger, $stateParams, AuthFactory, $localStorage, USER_ROLES, userService) {
    
        var vm = this;
        var dataFromStorage = $localStorage.getObject('Token','{}');
        vm.userName = dataFromStorage.username;
        vm.helloText = 'Taskboard';
        vm.descriptionText = 'Taskboard';
        vm.userRoles = USER_ROLES;
        vm.userData = {};
    
    userService.getUserProfile()
    .then(getUserProfileSuccess, null, getUserProfileNotification)
    .catch(errorCallback)
    .finally(getUserProfileComplete);
    
    function getUserProfileSuccess(userProfile) {
            //throw 'error in success handler';
            vm.userData = userProfile;
            //alert(vm.businessControlProfileList);
        }

        function getUserProfileNotification(notification) {
            console.log('Promise Notification: ' + notification);
        }
    
        function getUserProfileComplete() {
            console.log('getUserProfile has completed');
        }
    
    vm.isAuthorized = function (authorizedRoles) {
        var isAuthorizedUser = false;
                if (!angular.isArray(authorizedRoles)) {
                  authorizedRoles = [authorizedRoles];
                }
            angular.forEach(vm.userData.roles, function (item) {
                if(authorizedRoles.indexOf(item) !== -1) {
                    isAuthorizedUser = true;
                }
            });
        return(isAuthorizedUser)
    };
        dataservice.getAllWorkingSets()
            .then(getWorkingSetsSuccess, null, getWorkingSetsNotification)
            .catch(errorCallback)
            .finally(getAllWorkingSetsComplete);

        function getWorkingSetsSuccess(workingSets) {
            //throw 'error in success handler';
            vm.businessControlProfileList = workingSets;
            //alert(vm.businessControlProfileList);
        }

        function getWorkingSetsNotification(notification) {
            //console.log('Promise Notification: ' + notification);
        }

        function errorCallback(errorMsg) {
            console.log('Error Message: ' + errorMsg);
        }

        function getAllWorkingSetsComplete() {
            //console.log('getAllBooks has completed');
        }

//        vm.businessControlProfileList = [
//            {
//                id : 1,
//                name : 'bcp1'
//            },
//            {
//                id : 2,
//                name : 'bcp2'
//            },
//            {
//                id : 3,
//                name : 'bcp3'
//            },
//            {
//                id : 4,
//                name : 'bcp4'
//            }
//        ];
    dataservice.getAllFilters()
            .then(getFiltersSuccess, null, getFiltersNotification)
            .catch(errorCallback)
            .finally(getAllFiltersComplete);

        function getFiltersSuccess(filters) {
            //throw 'error in success handler';
            vm.filters = filters;
            //alert(vm.filters);
        }

        function getFiltersNotification(notification) {
            console.log('Promise Notification: ' + notification);
        }

        function errorCallback(errorMsg) {
            console.log('Error Message: ' + errorMsg);
        }

        function getAllFiltersComplete() {
            console.log('getAllFilters has completed');
        }
//        vm.filters = [
//            {
//                id : 1,
//                name : 'No Filter'
//            },
//            {
//                id : 2,
//                name : 'Unassigned'
//            },
//            {
//                id : 3,
//                name : 'Overdue'
//            }
//        ];
        vm.bcpNavClass = function (bcp) {
            //alert( $stateParams.bcp);
          return bcp.id ==  $stateParams.bcp ? 'active' : '';  
        };
        vm.filterNavClass = function (filter) {
            //alert('FilterID =' + filter.id);
            //alert('FilterText =' + $stateParams.filterText);
            var filterClass = filter.filterId == $stateParams.filterText ? 'active' : '';
            //alert(filterClass);
            return filterClass
        }
    });