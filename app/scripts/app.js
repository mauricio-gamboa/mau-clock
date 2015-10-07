'use strict';

/**
 * @ngdoc overview
 * @name mauClockApp
 * @description
 * # mauClockApp
 *
 * Main module of the application.
 */
angular
  .module('mauClockApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ClockCtrl',
        controllerAs: 'clock'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
