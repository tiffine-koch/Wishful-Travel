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

  $scope.deleteDest = function(index, dest) {
    var id = dest.id
    console.log('id', id);
    var deleted = $scope.destinations.splice(index, 1);
    $http({
      method: 'DELETE',
      url: `/destinations/${id}`
    })
    .then(function(data) {
      console.log('success');
    }, function(err) {
      console.error(err);
    })
  }
});

// $scope.deleteDest = function(dest) {
//   var id = dest.id
//   var deleted = $scope.destinations.splice(index, 1);
//   $http({
//     method: 'DELETE',
//     url: `/destinations/delete/${index}`
//   })
//   .then(function(data) {
//     console.log('success');
//   }, function(err) {
//     console.error(err);
//   })
// }
