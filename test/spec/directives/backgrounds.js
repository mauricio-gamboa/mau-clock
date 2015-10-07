'use strict';

describe('Directive: backgrounds', function () {

  // load the directive's module
  beforeEach(module('mauClockApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<backgrounds></backgrounds>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the backgrounds directive');
  }));
});
