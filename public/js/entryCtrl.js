'use strict';

var app = angular.module('travelApp');

app.controller('entryCtrl', function($scope, $http, $state, $stateParams) {
  console.log('entryCtrl');


  $scope.submitEntryForm = function() {
  // $scope.submitEntryForm = function(formInvalid) {
  //   console.log('hehehe');
  //   if(formInvalid) {
  //     console.log('form invalid');
  //     swal("Your form is invalid");
  //     $scope.user = {};
  //   } else {
  //     console.log('submit:', $scope.user);
  //     $scope.addUser();
  //     $scope.user = {};
  //   }
  // };
  addDest();
  }

  // $scope.addDest = function() {
 function addDest() {
   $scope.destinations = [];
   $scope.blogs = [];
    console.log('click');
    var dest = angular.copy($scope.dest);
    var blog = angular.copy($scope.blog);
    console.log(dest);
    console.log(blog);
    $scope.destinations.push(dest);
    $scope.blogs.push(blog);
    console.log($scope.destinations);
    console.log($scope.blogs);
    $http({
      method: 'POST',
      url: '/destinations',
      data: {
        dest: dest,
        blog: blog
      }
    }).then(function(response){
      swal("Your destination has been uploaded!");
    }, function(error){
      console.error(err);
    })
    $scope.user = {};
  }
  };
});

app.controller('splashCtrl', function($scope, $http, $state, $stateParams) {
  console.log('splashCtrl');

});
