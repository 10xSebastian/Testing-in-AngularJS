
'use strict';

angular.module('applicationApp')
.service('User', function($http) {

  function User(){
    this.name = null;
    this.email = null;
    this.password = null;
  }

  User.create = function(user){
    return $http.post('http://localhost:3000/users', user).success(function(){
      localStorage.user = JSON.stringify(user);
    });
  };

  return User;
});
