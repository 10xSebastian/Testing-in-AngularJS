var ScreenShotReporter = require('protractor-screenshot-reporter');

exports.config = {
  seleniumServerJar: null,
  seleniumPort: null,
  chromeOnly: false,
  seleniumArgs: [],
  sauceUser: null,
  sauceKey: null,
  seleniumAddress: 'http://localhost:'+(process.env["SELENIUMPORT"]|| 4444)+'/wd/hub',
  allScriptsTimeout: 20000,
  specs: [
    'node_modules/underscore/underscore.js',
    'test/e2e/factories/{,**/}*.js',
    'test/e2e/{,**/}*.js',
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  rootElement: 'body',
  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
    jasmine.getEnv().addReporter(new ScreenShotReporter({
      baseDirectory: '.tmp/test/failures'
    }));
    // add reporter for jenkins
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('xmloutput', true, true));
  },
  params: {
    login: {
      user: 'Jane',
      password: '1234'
    }
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 120000
  },
  mochaOpts: {
    ui: 'bdd',
    reporter: 'list'
  },
  onCleanUp: function() {}
};
