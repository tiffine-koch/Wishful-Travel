'use strict';

var app = angular.module('travelApp');

app.controller('entryCtrl', function($scope, $http, $state, $stateParams) {
  console.log('entryCtrl');


  $scope.submitUserForm = function(formInvalid) {
    console.log('hehehe');
    if(formInvalid) {
      console.log('form invalid');
      swal("Your form is invalid");
      $scope.user = {};
    } else {
      console.log('submit:', $scope.user);
      $scope.addUser();
      $scope.user = {};
    }
  };

  $http({
    method: "GET",
    url: "/users"
    }).then(function(response) {
      $scope.users = response.data;
    }, function(error) {
  });

  $scope.addUser = function() {
    console.log('click');
    var user = angular.copy($scope.user);
    console.log(user);
    $scope.users.push(user);
    $http({
      method: 'POST',
      url: '/users',
      data: user
    }).then(function(response){
      swal("Your information has been uploaded!");
    }, function(error){
      console.error(err);
    })
    $scope.user = {};
  }
  console.log($scope.users);
});

app.controller('splashCtrl', function($scope, $http, $state, $stateParams) {
  console.log('splashCtrl');

});
