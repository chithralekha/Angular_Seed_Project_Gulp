'use strict';

angular.module('inspinia')
    .controller('NavigationController', function (dataservice, logger, $stateParams) {
    
        var vm = this;

        vm.userName = 'Example user';
        vm.helloText = 'Taskboard';
        vm.descriptionText = 'Taskboard';
        
        vm.businessControlProfileList = [
            {
                id : 1,
                name : 'bcp1'
            },
            {
                id : 2,
                name : 'bcp2'
            },
            {
                id : 3,
                name : 'bcp3'
            },
            {
                id : 4,
                name : 'bcp4'
            }
        ];
        vm.filters = [
            {
                id : 1,
                name : 'No Filter'
            },
            {
                id : 2,
                name : 'Unassigned'
            },
            {
                id : 3,
                name : 'Overdue'
            }
        ];
        vm.bcpNavClass = function (bcp) {
            //alert( $stateParams.bcp);
          return bcp.id ==  $stateParams.bcp ? 'active' : '';  
        };
        vm.filterNavClass = function (filter) {
            return filter.id == $stateParams.filterText ? 'active' : '';
        } 

        //activate();


        function activate() {
//            Using a resolver on all routes or dataservice.ready in every controller
//            var promises = [getAvengers()];
//            return dataservice.ready(promises).then(function(){
            return getAvengers().then(function () {
                logger.info('Activated Avengers View');
            });
        }

        function getAvengers() {
            return dataservice.getAvengers().then(function (data) {
                vm.todoList = data.taskInfos;
                return vm.todoList;
            });
        }
    });