'use strict';

angular.module('clientApp')
  .controller('UserLoginCtrl', function ($scope, $routeParams, AuthenticationService, $location, FlashService) {
    $scope.user = {};

    (function initController() {
      // reset login status
      AuthenticationService.ClearCredentials();
    })();

    $scope.login = function() {
      AuthenticationService.Login($scope.user.userName, $scope.user.password, function (response) {
      if (response.success) {
        AuthenticationService.SetCredentials(user.userName, user.password);
        $location.path('/song/');
      } else {
        FlashService.Error(response.message);
      }
      });
    };
  });
