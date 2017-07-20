(function() {
  'use strict';

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "app/login/login.html",
        data: { pageTitle: 'Login' },
        controller: 'LoginController',
        controllerAs: 'vm'
                        
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
