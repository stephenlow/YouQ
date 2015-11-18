'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SongDeleteCtrl
 * @description
 * # SongDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SongDeleteCtrl', function ($scope, $routeParams, Song, $location) {
    $scope.song = Song.one($routeParams.id).get().$object;

    $scope.deleteSong = function() {
      $scope.song.remove().then(function() {
        $location.path('/songs');
      });
    };

    $scope.back = function() {
      $location.path('/song/' + $routeParams.id);
    };
  });
