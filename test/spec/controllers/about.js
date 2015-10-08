'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('mauClockApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should set the personal data', function () {
    expect(AboutCtrl.me.name).toBe('Mauricio Gamboa Loría');
    expect(AboutCtrl.me.github).toBe('https://github.com/mauricio-gamboa');
    expect(AboutCtrl.me.linkedin).toBe('https://cr.linkedin.com/in/magalocr');
  });
});
