'use strict';

angular.module('inspinia')
    .controller('TaskboardController', function (dataservice, logger) {
    
        var vm = this;

        vm.userName = 'Example user';
        vm.helloText = 'Taskboard';
        vm.descriptionText = 'Taskboard';
        
        vm.taskDueStatusClass = function(task) {
            alert(task.dueStatus.status);
        switch(task.dueStatus.status)
        {
            case 'Overdue' :
                return 'danger-element';
                break;
            case 'On Time' :
                return 'success-element';
                break;
            case 'In Jeopardy' :
                return 'warning-element';
                break;
        }
    };
        
        activate();


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
