'use strict';

angular.module('clientApp')
  .controller('UserRegisterCtrl', function ($scope, $routeParams, User, $location, FlashService) {
    $scope.user = {};

    $scope.register = function() {
      User.post($scope.user).then(function(response) {
        if (response.success) {
          FlashService.Success('Registration successful', true);
          $location.path('/login');
        } else {
          FlashService.Error(response.message);
        }
      });
    };
  });
