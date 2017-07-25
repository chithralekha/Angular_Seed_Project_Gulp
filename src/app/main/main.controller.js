'use strict';

angular.module('inspinia')
  .controller('MainController', function (AuthFactory) {

    var vm = this;

    vm.userName = AuthFactory.getUserName;
    vm.helloText = 'Welcome in INSPINIA Gulp SeedProject';
    vm.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';

  });
