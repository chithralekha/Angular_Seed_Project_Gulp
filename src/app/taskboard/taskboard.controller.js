'use strict';

angular.module('inspinia')
    .controller('TaskboardController', function (dataservice, taskDueStatusClassService, logger, $stateParams, $state, $uibModal, $scope,config,$cookies, $rootScope,$localStorage) {
    
    var vm = this;
    
    var dataFromStorage = $localStorage.getObject('Token','{}');
    vm.userName = dataFromStorage.username;
    var userFromStorage = $localStorage.getObject('Profile','{}');
    vm.userData = userFromStorage.data;
    //alert(vm.userData);
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
    $scope.$on('task:updated', function (event, task) {
            alert('From Parent  ..' + task.id + 'Task State=' + task.taskState.name);
        if(task.taskState.name === 'New') {
            vm.update(vm.todoList,task);
        }
        else if(task.taskState.name === 'In Progress') {
              vm.update(vm.inProgressList,task);  
            }
        else if(task.taskState.name === 'Completed') {
             vm.update(vm.completedList,task); 
        }
    })
    vm.update = function(source,task) {
           angular.forEach(source, function (item) {
                if(item.id === task.id) {
                    item.title = task.title;
                    item.code = task.code;
                    item.responsibleUser.userName = task.raciTeam.responsibleUser.userName;
                    var index = source.indexOf(item);
                    var copy = angular.copy(source[index]);
                    copy.dueStatus.status = 'Overdue';
                    source[index] = copy;
                }
            }) 
        }
    vm.sortableOptions = {
        connectWith: ".connectList",
        stop : function(e, ui) {
            var fromIndex = ui.item.sortable.index,
                toIndex = ui.item.sortable.dropindex,
                itemdata = {},
                destinationList = ui.item.sortable.droptarget.attr('ng-model');
            console.log('Destination List = ' + destinationList);
            
            if(destinationList === 'vm.todoList') {
                
                itemdata = vm.todoList[toIndex];
                getTask(itemdata.id, 1, "New");
                console.log('item in todoList' + vm.task);
            }
            
            if(destinationList === 'vm.inProgressList') {
                
                itemdata = vm.inProgressList[toIndex];
                itemdata.taskState.id = 2;
                itemdata.taskState.name = 'In Progress';
                getTask(itemdata.id, 2, "In Progress");
                console.log('item in inProgressList' + itemdata.id);
            }
            
            if(destinationList === 'vm.completedList') {
                
                itemdata = vm.completedList[toIndex];
                itemdata.taskState.id = 3;
                itemdata.taskState.name = 'Completed';
                getTask(itemdata.id, 3, "Completed");
                console.log('item in completedList' + itemdata);
            }
             
        }
    };
//    vm.open = function() {
//        var modalInstance = $uibModal.open( {
//            controller: 'TaskAddEditModalController',
//            controllerAs : 'vm',
//            templateUrl : 'app/taskboard/taskAddEditModal.html',
//            size : 'lg',
//            windowClass: 'app-modal-window',
//            backdrop :'static',
//            keyboard :false
//        });
//    }
    
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
    
    function getTask(id, state, stateName) {
        return dataservice.getTask(id)
        .then(function (data) {
            alert(data.id);
            data.taskState.id=state;
            data.raciTeam.responsibleUser = { id : vm.userData.id, userName : vm.userData.userName  };
            data.taskState.name = stateName;
            dataservice.saveTask(data);
            $rootScope.$broadcast('task:updated', data);
         return data;
        })
    }
});