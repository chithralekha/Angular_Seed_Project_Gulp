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
        controllerAs: 'vm',
        resolve : {
        workingSets : function(dataservice) {
                    return dataservice.getAllWorkingSets()
                        .then(function (data) { 
                    return data;
                    })
        },
        tasksSummary : function(dataservice) {
        }
        }
                              
      });


    $urlRouterProvider.otherwise('/index/main');
  }

})();
