'use strict';

describe('Controller: SongAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SongAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SongAddCtrl = $controller('SongAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SongAddCtrl.awesomeThings.length).toBe(3);
  });
});
