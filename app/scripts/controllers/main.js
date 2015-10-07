'use strict';

/**
 * @ngdoc function
 * @name mauClockApp.controller:ClockCtrl
 * @description
 * # ClockCtrl
 * Controller of the mauClockApp
 */

var ClockCtrl = function ($timeout) {
  this.timeout = $timeout;

  this.clock = "loading clock..."; // initialise the time variable

  this.tickInterval = 1000;

  this.initializeClock();
};

ClockCtrl.prototype.initializeClock = function () {
  var _this = this;

  var tick = function () {
    _this.clock = Date.now();
    _this.timeout(tick, _this.tickInterval);
  };

  // Start the timer
  _this.timeout(tick, _this.tickInterval);
};

ClockCtrl.prototype.setAlarm = function () {
  console.log('set alarm');
};

ClockCtrl.$inject = ['$timeout'];

angular.module('mauClockApp').controller('ClockCtrl', ClockCtrl);
