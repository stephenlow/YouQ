'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'UserLoginCtrl',
      })
      .when('/register', {
        templateUrl: 'views/main.html',
        controller: 'UserRegisterCtrl',
      })
      .when('/songs', {
        templateUrl: 'views/songs.html',
        controller: 'SongsCtrl'
      })
      .when('/create/song', {
        templateUrl: 'views/song-add.html',
        controller: 'SongAddCtrl',
      })
      .when('/song/:id', {
        templateUrl: 'views/song-view.html',
        controller: 'SongViewCtrl',
      })
      .when('/song/:id/delete', {
        templateUrl: 'views/song-delete.html',
        controller: 'SongDeleteCtrl',
      })
      .when('/song/:id/edit', {
        templateUrl: 'views/song-edit.html',
        controller: 'SongEditCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('SongRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('UserRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Song', function(SongRestangular) {
    return SongRestangular.service('song');
  })
  .factory('User', function(UserRestangular) {
    return UserRestangular.service('user');
  })
  .filter('trusted', function($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
