(function() {
  'use strict';

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('dashboard', {
        abstract: true,
        templateUrl: "app/components/common/content.html"
      })
        .state('dashboard.dashboards', {
            url: "/home",
            templateUrl:"app/dashboards/home.html",
        data: { pageTitle: 'Dashboard' },
        controller: 'DashboardController',
        controllerAs: 'vm'
      });


    $urlRouterProvider.otherwise('/index/main');
  }

})();
