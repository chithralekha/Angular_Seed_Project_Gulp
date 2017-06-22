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
        controllerAs: 'vm',        
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.sortable',
                            files: ['../../bower_components/angular-ui-sortable/sortable.js']
                        }
                         ]);
                }
            }
                        
      });

    $urlRouterProvider.otherwise('/index/main');
  }

})();
