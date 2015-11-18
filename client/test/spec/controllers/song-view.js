'use strict';

describe('Controller: SongViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SongViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SongViewCtrl = $controller('SongViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SongViewCtrl.awesomeThings.length).toBe(3);
  });
});
