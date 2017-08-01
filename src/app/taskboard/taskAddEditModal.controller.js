'use strict';

angular.module('inspinia')
    .controller('TaskAddEditModalController', function ($uibModalInstance, items, dataservice, taskDueStatusClassService, logger, $stateParams, $state, $scope, $rootScope) {
    
    var vm = this;
    
    vm.userName = 'Example user';
    vm.helloText = 'Taskboard';
    vm.descriptionText = 'Taskboard';
    vm.content = items;
    vm.taskStates = {};
    vm.taskStates.Values = [
                { Name : 'In Progress', Value : 2 },
                { Name : 'New', Value : 1 },
                { Name : 'Completed', Value : 3 }];
    
    vm.controlSets = {};
    vm.controlSets.Values = [];
    var controls = dataservice.getAllControlSets()
    .then(function (data) {
        angular.forEach(data, function (item) {
            vm.controlSets.Values.push({ Name : item.code, Value : item.id});
        });
    });
    
    $scope.$on('task:updated', function (event, task) {
           // alert(task.id);
        });
    
    vm.confirm = function() {
        //vm.content.title = 'Policy Control 1 Task2';
        dataservice.saveTask(vm.content);
        $rootScope.$broadcast('task:updated', vm.content);
        $uibModalInstance.close();
    }
        
    vm.cancel = $uibModalInstance.dismiss;
    
    vm.updateTaskState = function (taskStateId) {
        vm.content.taskState.id = taskStateId;
    }
    
    vm.updateControlSet = function (controlSetId) {
        alert(controlSetId);
    }
    
    vm.enableStatus = function(task) {
        return task === undefined || task.id === 0;
    };
    
    vm.enableControlStatus = function(task) {
        return task !== undefined && task.id !== 0;
    };
    
    //activate();
    function activate() {
        //Following comment is from the original sorce, CleanCode by John Papa
        //            Using a resolver on all routes or dataservice.ready in every controller
        //            var promises = [getAvengers()];
        //            return dataservice.ready(promises).then(function(){
        
      
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