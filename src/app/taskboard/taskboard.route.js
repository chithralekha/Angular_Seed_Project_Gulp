(function() {
  'use strict';

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('taskboard', {
        abstract: true,
        templateUrl: "app/components/common/content.html"
      })
      .state('taskboard.taskboard', {
        url: "/taskboard/:filterText?bcp",
        templateUrl: "app/taskboard/taskboard.html",
        data: { pageTitle: 'Taskboard' },
        controller: 'TaskboardController',
        controllerAs: 'vm'
                        
      });

    $urlRouterProvider.otherwise('/index/main');
  }

})();
