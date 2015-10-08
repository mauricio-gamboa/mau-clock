'use strict';

/**
 * @ngdoc directive
 * @name mauClockApp.directive:fullHeight
 * @description
 * # fullHeight
 */
angular.module('mauClockApp')
  .directive('fullHeight', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var height = $window.innerHeight;

        element.css({
          'height': height
        });

        angular.element($window).resize(function () {
          var newHeight = $window.innerHeight;
          element.css({
            'height': newHeight
          });
        });
      }
    };
  }]);
