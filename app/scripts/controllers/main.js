'use strict';

/**
 * @ngdoc function
 * @name mauClockApp.controller:ClockCtrl
 * @description
 * # ClockCtrl
 * Controller of the mauClockApp
 */

var ClockCtrl = function ($timeout, ngAudio, localStorageService, $filter) {
  this.timeout = $timeout;

  this.tickSound = ngAudio.load('../sounds/tick.mp3');

  this.alarmSound = ngAudio.load('../sounds/alarm.mp3');

  this.localStorageService = localStorageService;

  this.filter = $filter;

  this.clock = "loading clock..."; // initialise the time variable

  this.tickInterval = 1000;

  this.isMuted = false;

  this.showAlarmStopper = false;

  this.alarmTime = '';

  this.initializeClock();
};

ClockCtrl.prototype.initializeClock = function () {
  var _this = this;

  var tick = function () {

    if (!(_this.isMuted)) {
      _this.tickSound.play();
    }

    if (_this.shouldStartAlarm()) {
      _this.startAlarm();
    }

    _this.clock = Date.now();

    _this.timeout(tick, _this.tickInterval);
  };

  // Start the timer
  _this.timeout(tick, _this.tickInterval);
};

ClockCtrl.prototype.setAlarm = function () {
  var _this = this;
  var date = _this.filter('date')(_this.alarmTime, 'medium');
  _this.localStorageService.set('alarm', date);
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

ClockCtrl.prototype.shouldStartAlarm = function () {
  var _this = this;

  var clockTime = _this.filter('date')(_this.clock, 'medium');
  var alarmTime = _this.localStorageService.get('alarm') || '';
  return clockTime === alarmTime;
};

ClockCtrl.prototype.startAlarm = function () {
  var _this = this;
  _this.alarmSound.play();
  _this.showAlarmStopper = true;
};

ClockCtrl.prototype.stopAlarm = function () {
  var _this = this;
  _this.alarmSound.stop();
  _this.showAlarmStopper = false;
  _this.localStorageService.remove('alarm');
};

ClockCtrl.$inject = ['$timeout', 'ngAudio', 'localStorageService', '$filter'];

angular.module('mauClockApp').controller('ClockCtrl', ClockCtrl);
