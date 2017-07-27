'use strict';

angular.module('inspinia')
    .controller('TaskboardController', function (dataservice, taskDueStatusClassService, logger, $stateParams, $state) {
    
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
    
    vm.reload = function () {
        $state.reload();
    }
    
    function activate() {
        //Following comment is from the original sorce, CleanCode by John Papa
        //            Using a resolver on all routes or dataservice.ready in every controller
        //            var promises = [getAvengers()];
        //            return dataservice.ready(promises).then(function(){
        
        return getTasksSummary($stateParams.bcp,$stateParams.filterText)
                .then(function () {
                logger.info('Activated Taskboard View');
            });
        }
    
    function getTasksSummary(bcp, filterId) {
        return dataservice.getTasksSummary(bcp, filterId)
            .then(function (data) {
            //alert(data.todoList);
            vm.todoList = data.todoList;
            vm.inProgressList = data.inProgressList;
            vm.completedList = data.completedList;
           return vm.todoList;
        });
    }
});