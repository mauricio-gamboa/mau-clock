'use strict';

/**
 * @ngdoc directive
 * @name mauClockApp.directive:backgrounds
 * @description
 * # backgrounds
 */
angular.module('mauClockApp')
  .directive('backgrounds', ['$interval', function ($interval) {
    return {
      restrict: 'A',

      link: function (scope, element) {
        element.addClass('bgs');

        element.prepend('<div class="bg bg1 show"><div>');

        var current = 1;

        $interval(function () {
          setFooterBackground((current % 5) + 1);
          current++;
        }, 7000, 0);

        function setFooterBackground(bgNumber) {
          var prev = element.find('.bg');

          setTimeout(function () {
            prev.remove();
          }, 4100);

          var el = document.createElement('div');

          el.className += 'bg bg' + bgNumber;

          element.append(el);

          setTimeout(function () {
            el.className += ' show';
          }, 20);
        }
      }
    };
  }]);
