'use strict';

angular.module('inspinia')
    .controller('NavigationController', function (dataservice, logger, $stateParams, AuthFactory) {
    
        var vm = this;

        vm.userName = AuthFactory.getUserName();
        vm.helloText = 'Taskboard';
        vm.descriptionText = 'Taskboard';
        
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