'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SongViewCtrl
 * @description
 * # SongViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SongViewCtrl', function ($scope, $routeParams, Song) {
    $scope.viewSong = true;
    Song.one($routeParams.id).get().then(function(song) {
      song.url = song.url.replace('/watch?v=', '/embed/') + '?autoplay=1';
      $scope.song = song;
    });
  });
