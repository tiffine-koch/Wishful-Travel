'use strict';

var app = angular.module('travelApp');

app.service('AppService', function($http) {
  this.fetch = function() {
    return $http.get('/destinations');
  }
  // this.create = function(dest, blog) {
  //   return $http.post('/destinations', dest, blog);
  // }
  //
  // this.edit = function(dest, blog) {
  //   return $http.put(`/destinations/${dest.id}`);
  // }
  //
  // this.remove = function(dest, blog) {
  //   return $http.delete(`/destinations/${dest.id}`);
  // }
});
