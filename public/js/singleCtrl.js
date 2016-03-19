'use strict';

var app = angular.module('travelApp');

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

  $scope.deleteBlog = function(index) {
    var deleted = $scope.blogs.splice(index, 1);
    $http({
      method: 'DELETE',
      url: `/single/delete/${index}`
    })
    .then(function(data) {
      console.log('success');
    }, function(err) {
      console.error(err);
    })
  }
});
