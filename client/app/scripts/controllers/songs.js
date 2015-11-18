'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SongsCtrl
 * @description
 * # SongsCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
   .controller('SongsCtrl', function ($scope, Song) {
     $scope.songs = Song.getList().$object
   });
