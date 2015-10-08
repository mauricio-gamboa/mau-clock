'use strict';

/**
 * @ngdoc function
 * @name mauClockApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mauClockApp
 */

var AboutCtrl = function (ngAudio) {
  this.ngAudio = ngAudio;

  this.ngAudio.mute();

  this.me = {
    name: 'Mauricio Gamboa Loría',
    github: 'https://github.com/mauricio-gamboa',
    linkedin: 'https://cr.linkedin.com/in/magalocr'
  };
};

AboutCtrl.$inject = ['ngAudio'];

angular.module('mauClockApp').controller('AboutCtrl', AboutCtrl);
