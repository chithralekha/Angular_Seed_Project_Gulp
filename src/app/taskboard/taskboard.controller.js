'use strict';

angular.module('inspinia')
    .controller('TaskboardController', function (dataservice, taskDueStatusClassService, logger, $stateParams) {
    
    var vm = this;
    
    vm.userName = 'Example user';
    vm.helloText = 'Taskboard';
    vm.descriptionText = 'Taskboard';
    vm.taskDueStatusClass = taskDueStatusClassService.retrieveTaskDueStatusClass;
    
    //Following function doesnot use the value service pointer.
    //            function(task) {
    //        switch(task.dueStatus.status)
    //        {
    //            case 'Overdue' :
    //                return 'danger-element';
    //                break;
    //            case 'On Time' :
    //                return 'success-element';
    //                break;
    //            case 'In Jeopardy' :
    //                return 'warning-element';
    //                break;
    //        }
    //    };
    
    vm.sortableOptions = {
        connectWith: ".connectList"
    };
    
    activate();
    
    function activate() {
        //Following comment is from the original sorce, CleanCode by John Papa
        //            Using a resolver on all routes or dataservice.ready in every controller
        //            var promises = [getAvengers()];
        //            return dataservice.ready(promises).then(function(){
        
        return getAvengers($stateParams.bcp,$stateParams.filterText)
                .then(function () {
                logger.info('Activated Taskboard View');
            });
        }
    
    function getAvengers(bcp, filterId) {
        return dataservice.getAvengers(bcp, filterId)
            .then(function (data) {
            vm.todoList = data.taskInfos;
            vm.inProgressList = data.taskInfos;
           return vm.todoList;
        });
    }
});

//        function getAvengers() {
//            return dataservice.getAvengers().then(function (data) {
//                vm.todoList = data.tasks;
//                vm.inProgressList = data.tasks;
//                return vm.todoList;
//            });
//        }
//    });
