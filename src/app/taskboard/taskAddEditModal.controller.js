'use strict';

angular.module('inspinia')
    .controller('TaskAddEditModalController', function ($uibModalInstance, items, dataservice, taskDueStatusClassService, logger, $stateParams, $state) {
    
    var vm = this;
    
    vm.userName = 'Example user';
    vm.helloText = 'Taskboard';
    vm.descriptionText = 'Taskboard';
    vm.content = items;
    
    vm.confirm = function() {
        dataservice.saveTask(vm.content);
        $uibModalInstance.close();
    }
        
    vm.cancel = $uibModalInstance.dismiss;
    
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