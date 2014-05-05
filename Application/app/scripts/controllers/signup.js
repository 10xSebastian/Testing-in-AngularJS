'use strict';

angular.module('applicationApp')
.controller('SignUpCtrl', function ($scope, $location, User) {
  $scope.user = new User();
  $scope.submit = function(isValid){
    $scope.formSubmitted = true;
    if(isValid){
      User.create($scope.user).success(function(){
        $location.path('/#/');
      });
    }
  };
});
