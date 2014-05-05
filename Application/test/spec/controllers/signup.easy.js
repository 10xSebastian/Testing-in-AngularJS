describe('Sign up', function(){

  beforeEach(module('applicationApp'));

  it('creates a new user', function(){
    inject(function($controller, $rootScope){
      var $scope = $rootScope;
      var UserMock = function(){};
      UserMock.create = function(){
        return {
          success: function(c){
            c();
          }
        };
      };
      spyOn(UserMock, 'create').and.callThrough();
      $controller('SignUpCtrl', {$scope: $scope, User: UserMock});
      $scope.$apply(function(){
        $scope.user = {
          name: 'Sebastian Pape',
          email: 'sebastian.pape@local.ch',
          password: 'ngPassword'
        };
      });
      $scope.submit(true);
      expect(UserMock.create).toHaveBeenCalled();
    });
  });
    
});
