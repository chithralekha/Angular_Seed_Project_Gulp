(function() {
  'use strict';

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index.taskboard', {
        url: "/taskboard/:filterText?bcp",
        templateUrl: "app/taskboard/taskboard.html",
        data: { pageTitle: 'Taskboard' },
        controller: 'TaskboardController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/index/main');
  }

})();
