'use strict';

//Directive used to set metisMenu and minimalize button
angular.module('inspinia')
    .directive('sideNavigation', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                // Call metsi to build when user signup
                scope.$watch('authentication.user', function() {
                    $timeout(function() {
                        element.metisMenu();
                    });
                });

                // Colapse menu in mobile mode after click on element
                var menuElement = angular.element('#side-menu a:not([href$="\\#"])');
                menuElement.click(function(){
                  if (angular.element(window).width() < 769) {
                    angular.element("body").toggleClass("mini-navbar");
                  }
                });

                // Enable initial fixed sidebar
                if (angular.element("body").hasClass('fixed-sidebar')) {
                  var sidebar = element.parent();
                  sidebar.slimScroll({
                    height: '100%',
                    railOpacity: 0.9
                  });
                }

            }
        };
    })
    .directive('minimalizaSidebar', function ($timeout) {
        return {
            restrict: 'A',
            template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
            controller: function ($scope) {
                $scope.minimalize = function () {
                    angular.element('body').toggleClass('mini-navbar');
                    if (!angular.element('body').hasClass('mini-navbar') || angular.element('body').hasClass('body-small')) {
                        // Hide menu in order to smoothly turn on when maximize menu
                        angular.element('#side-menu').hide();
                        // For smoothly turn on menu
                        $timeout(function () {
                            angular.element('#side-menu').fadeIn(400);
                        }, 200);
                    } else {
                        // Remove all inline style from jquery fadeIn function to reset menu state
                        angular.element('#side-menu').removeAttr('style');
                    }
                };
            }
        };
    })
    .directive('pageTitle', function($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = 'Altius';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'Altius | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
})
.directive('formattedDate', function(dateFilter) {
  return {
    require: 'ngModel',
    scope: {
      format: "="
    },
    link: function(scope, element, attrs, ngModelController) {
      ngModelController.$parsers.push(function(data) {
        //convert data from view format to model format
        return dateFilter(data, scope.format); //converted
      });

      ngModelController.$formatters.push(function(data) {
        //convert data from model format to view format
        return dateFilter(data, scope.format); //converted
      });
    }
  }
})
.directive('modalTrigger', function($modalFactory) {
  return {
    link: function(scope, iElement, iAttrs) {
    function onClick() {
      var size = scope.$eval(iAttrs.size) || 'lg'; // default to large size
      var title = scope.$eval(iAttrs.title) || 'Default Title';
      var message = scope.$eval(iAttrs.message) || 'Default Message';
        var id = scope.$eval(iAttrs.id) || 0;
      $modalFactory.open(size, title, id, message);
    }
    iElement.on('click', onClick);
    scope.$on('$destroy', function() {
      iElement.off('click', onClick);
    });
  }
  };
});


