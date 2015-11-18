'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SongAddCtrl
 * @description
 * # SongAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SongAddCtrl', function ($scope, Song, $location) {
    $scope.song = {};
    
    $scope.saveSong = function() {
      Song.post($scope.song).then(function() {
        $location.path('/songs');
      });
    };
  });
