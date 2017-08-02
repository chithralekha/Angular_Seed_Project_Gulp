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
    
    vm.responsibleUsers = {};
    vm.responsibleUsers.Values = [];
    
    vm.accountableUsers = {};
    vm.accountableUsers.Values = [];
    vm.informedUsers = {};
    vm.informedUsers.Values = [];
    vm.consultedUsers = {};
    vm.consultedUsers.Values = [];
    
    vm.raciTeams = {};
    vm.raciTeams.Values = [];
    vm.raciTeamList = [];
    
    var informedUsers =[], consultedUsers =[];
    
    var controls = dataservice.getAllControlSets()
    .then(function (data) {
        angular.forEach(data, function (item) {
            vm.controlSets.Values.push({ Name : item.code, Value : item.id});
        });
    });
    var raciTeams = dataservice.getAllRACITeams()
    .then(function (data) {
        console.log('Raci users data...', data.length);
        vm.raciTeamList = data;
        angular.forEach(data, function (item) {
            vm.raciTeams.Values.push({ Name : item.name, Value : item.id});
        });
    });
    var users = dataservice.getAllUsers()
    .then(function (data) {
        console.log('Responsible users data...', data.length);
        angular.forEach(data, function (item) {
            vm.responsibleUsers.Values.push({ Name : item.userName, Value : item.id});
            vm.accountableUsers.Values.push({ Name : item.userName, Value : item.id});
            vm.informedUsers.Values.push({ Name : item.userName, Value : item.id});
            vm.consultedUsers.Values.push({ Name : item.userName, Value : item.id});
        });
    });
    
    vm.responsibleUsers.Value = vm.content.raciTeam.responsibleUser.id;
    vm.accountableUsers.Value = vm.content.raciTeam.accountableUser.id;
    
    angular.forEach(vm.content.raciTeam.informedUsers, function (item) {
        informedUsers.push(item.id);
        vm.informedUsers.Value = informedUsers; });
    angular.forEach(vm.content.raciTeam.consultedUsers, function (item) {
        consultedUsers.push(item.id);
        vm.consultedUsers.Value = consultedUsers; });
    
    //alert(vm.responsibleUsers.Value);
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