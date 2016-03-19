'use strict';

var app = angular.module('travelApp');

app.controller('destCtrl', function($scope, $http, $state, $stateParams) {

  $http({
  method: "GET",
  url: "/destinations"
  }).then(function(response){
    $scope.destinations= response.data;
  }, function(error){
    console.log('error');
  });
  console.log('destCtrl');
});

app.controller('singleCtrl', function($scope, $http, $state, $stateParams) {
  console.log('singleCtrl');

  $http({
  method: "GET",
  url: "/single"
  }).then(function(response){
    $scope.blogs= response.data;
  }, function(error){
    console.log('error');
  });
  console.log('destCtrl');
});
