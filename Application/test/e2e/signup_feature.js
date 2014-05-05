var SignUpPage = function(){
  this.get = function(){
    $('a[href*="signup"]').click();
    this.nameInput = $('*[ng-model="user.name"]');
    this.emailInput = $('*[ng-model="user.email"]');
    this.passwordInput = $('*[ng-model="user.password"]');
    this.submitButton = $('button[type="submit"]');
  };
  this.getHeader = function(){
    return $('.header .nav');
  };
  this.setName = function(val){
    this.nameInput.sendKeys(val);
  };
  this.setEmail = function(val){
    this.emailInput.sendKeys(val);
  };
  this.setPassword = function(val){
    this.passwordInput.sendKeys(val);
  };
  this.submit = function(){
    this.submitButton.click();
  };
  this.navigationContains = function(text){
    expect(this.getHeader().getText()).toMatch(text);
  };
  this.contains = function(text){
    expect($('body').getText()).toMatch(text);
  };
};

describe('Sign up', function() {

  it('allows you to become a new user.', function(){
    browser.get('http://localhost:9000');
    var user = userFactory.create();
    var page = new SignUpPage();
    page.get();
    page.setName(user.name);
    page.setEmail(user.email);
    page.setPassword(user.password);
    page.submit();
    browser.wait(function() {
      return browser.findElement(protractor.By.css('.nav')).isDisplayed();
    });
    page.navigationContains(user.name);
    page.contains('Thank you for sign up '+user.name);
  });

});