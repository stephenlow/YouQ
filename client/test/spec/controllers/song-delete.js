'use strict';

describe('Controller: SongDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SongDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SongDeleteCtrl = $controller('SongDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SongDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
