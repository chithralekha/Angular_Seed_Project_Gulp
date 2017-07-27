'use strict';

angular.module('inspinia')
    .controller('NavigationController', function (dataservice, logger, $stateParams, AuthFactory, $localStorage, USER_ROLES, userService) {
    
    var vm = this;
    var dataFromStorage = $localStorage.getObject('Token','{}');
    vm.userName = dataFromStorage.username;
    vm.userRoles = USER_ROLES;
    vm.userData = $localStorage.getObject('Profile', '{}');
    
    vm.isAuthorized = function (authorizedRoles) {
        
        var isAuthorizedUser = false;
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        angular.forEach(vm.userData.data.roles, function (item) {
            if(authorizedRoles.indexOf(item) !== -1) {
                isAuthorizedUser = true;
            }
        });
        return(isAuthorizedUser);
    };
    dataservice.getAllWorkingSets()
        .then(getWorkingSetsSuccess, null, getWorkingSetsNotification)
        .catch(errorCallback)
        .finally(getAllWorkingSetsComplete);

        function getWorkingSetsSuccess(workingSets) {
            
            vm.businessControlProfileList = workingSets;
        }

        function getWorkingSetsNotification(notification) {
            console.log('Promise Notification: ' + notification);
        }

        function errorCallback(errorMsg) {
            console.log('Error Message: ' + errorMsg);
        }

        function getAllWorkingSetsComplete() {
            console.log('getAllWorkingSets has completed');
        }
    
    dataservice.getAllFilters()
        .then(getFiltersSuccess, null, getFiltersNotification)
        .catch(errorCallback)
        .finally(getAllFiltersComplete);

        function getFiltersSuccess(filters) {
            
            vm.filters = filters;
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
    
        vm.bcpNavClass = function (bcp) {
            
          return bcp.id ==  $stateParams.bcp ? 'active' : '';  
        };
    
        vm.filterNavClass = function (filter) {
            
            var filterClass = filter.filterId == $stateParams.filterText ? 'active' : '';
            return filterClass
        }
    });