'use strict';

angular.module('applicationApp')
.controller('MainCtrl', function ($scope) {
  $scope.currentUser = function(){ return JSON.parse(localStorage.user); };
});
