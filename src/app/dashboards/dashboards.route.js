(function() {
  'use strict';

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider     
        .state('index.dashboards', {
            url: "/home",
            templateUrl:"app/dashboards/home.html",
        data: { pageTitle: 'Dashboard' },
        controller: 'DashboardController',
        controllerAs: 'vm'
      });


    $urlRouterProvider.otherwise('/index/main');
  }

})();
