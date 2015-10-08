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
    'ngTouch',
    'ui.bootstrap',
    'ui.bootstrap.datetimepicker',
    'ngAudio',
    'LocalStorageModule'
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
        controllerAs: 'about',
        stopAudio: true
      })
      .otherwise({
        redirectTo: '/'
      });
  });
