'use strict';

var app = angular.module('travelApp');

app.controller('entryCtrl', function($scope, $http, $state, $stateParams) {

  $scope.submitEntryForm = function() {
    $scope.destinations = [];
    $scope.blogs = [];
    var dest = {name: $scope.dest.name, loc: $scope.dest.loc, image: $scope.dest.image, activity1: $scope.dest.activity1, activity2: $scope.dest.activity2, activity3: $scope.dest.activity3, category: 'custom'};
    var blog = {blog: $scope.blog.note, date: "2016-08-04", category: 'custom'};
    $scope.destinations.push(dest);
    $scope.blogs.push(blog);
    $http({
      method: 'POST',
      url: '/entry',
      data: {
        dest: dest,
        blog: blog
      }
      }).then(function(response){
        swal("Your destination has been uploaded!");
      }, function(err){
        console.error(err);
      })
      $scope.user = {};
    };
});

app.controller('splashCtrl', function($scope, $http, $state, $stateParams) {
  console.log('splashCtrl');
});
