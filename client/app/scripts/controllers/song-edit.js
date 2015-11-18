'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SongEditCtrl
 * @description
 * # SongEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SongEditCtrl', function ($scope, $routeParams, Song, $location) {
    $scope.editSong = true;
    $scope.song = {};
    Song.one($routeParams.id).get().then(function(song) {
      $scope.song = song;
      
      $scope.saveSong = function() {
        $scope.song.save().then(function() {
          $location.path('/song/' + $routeParams.id);
        });
      };
    });
  });
