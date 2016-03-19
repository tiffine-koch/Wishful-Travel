'use strict';

var app = angular.module('travelApp');

app.service('AppService', function($http, $q) {
  this.fetch = function() {
    return $http.get('/destinations');
  }
  this.create = function() {
    $http.post('/destinations', dest, blog);
    $http.post('/destinations', dest, blog);
  }
  this.edit = function(dest, blog) {
    return $http.put(`/destinations/${dest.id}`);
  }
  this.remove = function(dest, blog) {
    return $http.delete(`/destinations/${dest.id}`);
  }
});
