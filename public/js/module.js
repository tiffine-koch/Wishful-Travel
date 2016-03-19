'use strict';

var app = angular.module('travelApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/partials/splash.html', controller: 'splashCtrl'})
    .state('destinations', { url: '/destinations', templateUrl: 'partials/destinations.html', controller: 'destCtrl' })
    .state('entry', { url: '/entry', templateUrl: '/partials/entry.html', controller: 'entryCtrl'})
    .state('destination', { url: '/destination/:destination', templateUrl: 'partials/destination.html', controller: 'destCtrl' })
    .state('single', { url: '/single', templateUrl: 'partials/single.html', controller: 'singleCtrl' })

  $urlRouterProvider.otherwise('/');
});
