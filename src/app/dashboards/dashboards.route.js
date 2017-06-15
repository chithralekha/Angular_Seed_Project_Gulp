(function() {
  'use strict';

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboards', {
            abstract: true,
            url: "/dashboards",
            templateUrl: "app/components/common/content.html"
        })
        .state('dashboards.home', {
            url: "/home",
            templateUrl:"app/dashboards/home.html",
        data: { pageTitle: 'Dashboard' },
        controller: 'DashboardController',
        controllerAs: 'vm'
      });


    $urlRouterProvider.otherwise('/dashboards/home');
  }

})();
