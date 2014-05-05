describe('Sign up', function(){

  var $httpBackend;

  beforeEach(module('applicationApp'));

  beforeEach(inject(function($injector){
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('creates a new user', inject(function($controller, $rootScope, $location){
    var $scope = $rootScope;
    $controller('SignUpCtrl', {$scope: $scope});
    $scope.$apply(function(){
      $scope.user = {
        name: 'Sebastian Pape',
        email: 'sebastian.pape@local.ch',
        password: 'ngPassword'
      };
    });
    $httpBackend.expectPOST('http://localhost:3000/users').respond(201, '');
    $scope.submit(true);
    $httpBackend.flush();
    expect($location.path()).toBe('/#/');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

});