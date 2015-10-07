'use strict';

/**
 * @ngdoc function
 * @name mauClockApp.controller:ClockCtrl
 * @description
 * # ClockCtrl
 * Controller of the mauClockApp
 */

var ClockCtrl = function ($timeout, ngAudio) {
  this.timeout = $timeout;

  this.tickSound = ngAudio.load('../sounds/tick.mp3');

  this.clock = "loading clock..."; // initialise the time variable

  this.tickInterval = 1000;

  this.isMuted = false;

  this.alarmTime = '';

  this.initializeClock();
};

ClockCtrl.prototype.initializeClock = function () {
  var _this = this;

  var tick = function () {

    if (!(_this.isMuted)) {
      _this.tickSound.play();
    }

    _this.clock = Date.now();

    _this.timeout(tick, _this.tickInterval);
  };

  // Start the timer
  _this.timeout(tick, _this.tickInterval);
};

ClockCtrl.prototype.setAlarm = function () {
  var _this = this;
  console.log(_this.alarmTime);
};

ClockCtrl.prototype.mute = function () {
  var _this = this;
  _this.tickSound.stop();
  _this.isMuted = true;
};

ClockCtrl.prototype.unmute = function () {
  var _this = this;
  _this.tickSound.play();
  _this.isMuted = false;
};

ClockCtrl.$inject = ['$timeout', 'ngAudio'];

angular.module('mauClockApp').controller('ClockCtrl', ClockCtrl);
