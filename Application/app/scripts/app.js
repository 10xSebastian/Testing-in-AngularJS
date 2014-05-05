'use strict';

angular
  .module('applicationApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: function(){
          if(localStorage.user !== undefined){
            return 'views/logged-in.html';
          } else {
            return 'views/main.html';
          }
        },
        controller: 'MainCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignUpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
