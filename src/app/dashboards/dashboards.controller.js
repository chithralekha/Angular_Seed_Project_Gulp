'use strict';

angular.module('inspinia')
    .controller('DashboardController', function (dataservice, logger) {
    
        var vm = this;

        vm.userName = 'Example user';
        vm.helloText = 'Dashboard';
        vm.descriptionText = 'Dashboard';
    
    });
