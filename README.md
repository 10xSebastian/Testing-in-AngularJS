[Download presentation PDF](https://github.com/spape/Testing-in-AngularJS/raw/master/Testing%20in%20AngularJS.pdf)

Why testing
===========



-   For any code you write, there will be unforseen problems — You cannot
    predict them or regard all circumstances — (NEXT) except if you have a
    crystal ball (NEXT) — buy you dont, so you should always try to uncover
    those onforseen problems as soon as possible - which means before they hit
    production

-   And one good way to do this — is testing



Whats out there
===============



Testing Frameworks
------------------

-   The first things out there are testing frameworks - like Jasmine or Mocha

-   Those provide us the basic frame for setting up tests

-   For example they provide this basic syntax to describe behaviours - like the
    „describe“ and the „it“ - and in addition they come with a lot of those
    matchers that enable you to setup all different kind of expectations.



Test Runners
------------

-   Then we have the test runners - like Karma and Protractor.

-   Those are responsible for loading and executing your tests and print those
    nice looking reports that inform you that everything is fine

-   (NEXT) Or in case of a problem, they inform you about what is actually
    broken and where the error occurred



Underlying Technologies
-----------------------

-   I also wanna mention some underyling technologies, because soon or later,
    when you write tests in the environment I will show you, you will be
    challenged by some strange problems and if you dont really now whats under
    the hood it will be hard for you to solve them.

-   First. Karma and Protractor are Node.js Applications. You should always try
    to run them on stable versions of node.

-   Second. Protractor is base upon WebdriverJS which provides javascript
    bindings for Selenium Webdriver. So if you try to find some documentation
    about commands you could use for E2E testing - and you dont find them in the
    protractor documentation possibly you will find them on the WebdriverJS
    docu.

-   Third. Selenium Webdriver was built to emulate user behavior. This means
    everytime you find your self performing some actions in your E2E test that a
    normal user would never be able to perform, like injecting some JavaScript,
    or call some urls directly with some parameters - yeah you do something
    wrong.



Jasmine
=======



Suite, Spec and Expectations
----------------------------

-   Ok now we can start, lets have a look at Jasmine

-   (NEXT) Here we can see to four existential parts of a Jasmine test.

-   The first one is the test suite. It starts with a call of the global
    „describe" function. It contains two parameters. A string that describes
    what is beeing tested and a function that holds a block of code that
    implements the test suite.

-   Second. The spec. It calls the global „it“ function and also takes a string
    that describes the specification and a function that implements the test.

-   Third. The Expectation. An expectation is a call of the global „expect“
    function and it takes the actual value that you want to test.

-   Last but not least. The Matcher. The expectation is chained with a matcher
    function. The matcher function takes the expected value and compares it with
    the actual value. The Matcher is reponsible for reporting if the expectation
    is true of false. Jasmine will then pass or fail the spec.



Matchers
--------

-   There are a lot of different kind of matchers and here you just see only
    some examples. There are also 3rd party libraries that are extending the
    collection of possible matchers.

-   I just wanna go through those examples quickly so that you can get a feeling
    for how they work.

-   Line 1 expects variable a and b to point to the same object or literal.

-   Line 2 expects variable a not to be null.

-   After that in Line 3 you can see an equality check for to objects, so in
    this case identity doesnt matter.

-   In Line 4 we use a regular expression to match a string

-   After that in line 5 the same but with a string instead of a regular
    expression

-   I let the other examples pass without comment, its pretty obivious in most
    of the cases what they are doing and I think you got a feeling for the
    matchers now.



BeforeEach and AfterEach
------------------------

-   Lets come to the before and after each blocks.

-   Here we are testing a Counter and the counter provides two functionalitities
    - a set method and an increase method

-   In this example we always wanna test, that in the end the count is always
    one

-   So we use the global beforeEach und afterEach function here to achive that

-   The beforeEach creates a new instance of the counter before each spec

-   And the after each block is always executing our expectation after each spec

-   Just remember that beforeEach and afterEach blocks apply for all specs of
    the surrounding describe block



Structure your tests
--------------------

-   What you can see here is testing two objects of the same kind in two
    different states

-   And its one of those usecase where it make sense to nest test suites in each
    other to dry up your tests

-   As you can see here you can just put a describe block into another describe
    block

-   The before and after each blocks will still just apply for the surrounding
    describe block.



Asynchronous Support
--------------------



### Asynchronous support in 1.3

-   Jasmine also supports testing asynchronous operations

-   Currently there are two versions of Jasmin arround 1.3 and version 2 and
    both handle testing asynchronous operations differntly

-   Lets start with how version 1.3 handles that

-   There are two global functions that you have to use when test asynchronous
    operations. „runs" and „waitsFor".

-   Both are queuing blocks of code for beeing executed one after the other.

-   But waitsFor has to return a boolean indicating that the queue can continue
    with the next block. so the code in the waitsFor block is continuously
    executed until a certain timeout is reached - in this case 1 second.

-   and then the last of the three blocks contains the expectation — the
    waitsFor ensured that the value was set before the expectation is executed



### Asynchronous support in 2.0

-   In Jasmine 2 the way to perform tests for asynchronous operations is a
    little bit more promise oriented

-   The global functions: „beforeEach", „afterEach“ and „it“ can take a done
    parameter that you just call when the specific block is finished

-   By default Jasmine’s default waiting is 5 seconds until it replies that the
    test just timed out — and yes you have control over the default waiting time
    which means you can change it, eveny dynamic.

-   If you dont use the done parameter for a specific block - async operations
    support is not enabled for that block, which means that block runs as usual.

-   This example tries to implement the same logic then the privous one that was
    written for jasmine 1.3 - and yes it looks a little bit strange

-   (NEXT) In action it should look more like this one, where you perform some
    asynchnounos operation which returns a promise which then calls the done
    function for that block, and right after you run the expectations.



Custom helpers
--------------

-   Something that you can do to DRY up your test code is to write custom
    helpers functions, which are nothing else then global functions that you can
    call during your tests at anytime.



Custom matchers
---------------

-   Something else than can support you writing clean tests - is the possibility
    to create custom matchers and here is an example for that

-   You can register your custom matchers in Jasmine by just providing the name
    of the matcher and a compare function.

-   You have to regard some convetions like the structure of the result object
    that you have to return, but otherweise its pretty simple.



Karma
=====



-   ok lets continue with karma one of our test runners



Setup
-----

-   for setting it up, here is an example for some basic setup, it installs
    karma itself, some jasmine extensions the chrome launcher and the command
    line interface of karma

-   (NEXT) after you have installed all that, you can run some setup script
    calling „karma init“ on the command line - it will help you setting up all
    neccessary options to make it running

-   (NEXT) so when everyting is installed and set up you can simply start the
    runner by calling "karma start" in the root directory of your project

-   The Karma runner is always running and he will execute your tests again,
    each time you change something on your tests or on some of your application
    code



Browser Support 
----------------

-   One of the ideas behind Karma - beside beeing a simple to use test runner —
    is the fact that it supports testing the same code in multiple browsers at
    once — you remember the unforseen problems from my intro — so you can image
    that all those different browser and their different implementation of
    things will just lead to even more unvorseen problems — so you want that
    your code is tested in multiple browsers at once, at least in those that are
    important for your project or used by your average user



Protractor
==========



-   Protractor, the E2E test runner. Perhaps you remember this one was also
    using jasmine and it relies on selenium webdriver and webdriverjs. This one
    superseded ngScenario the previous angular scenario runner.



Setup
-----

-   Because Protractor is also just a node application you can simply install it
    using NPM.

-   (NEXT) Protractor comes with a command line tool thats called
    webdriver-manager — webdriver-manager is mainting and managing your local
    instance of selenium webdriver for you — so you dont have to care about that
    your self — you just call „webdriver-manager start“ to start up a standalone
    instance of selenium webdriver

-   (NEXT) or run  „webdriver-manager update“ which will update webdriver itself
    and it also checks for updates for all of the installed browser drivers.

-   (NEXT) there is also a little amount of work that you have to invest into
    setting up the configuration — there you have to configure for example where
    your instance of selenium is running, which browser are used for testing and
    which tests it should run

-   (NEXT) dont forget to also startup your web application before you call
    protractor to run the tests, because usally it will not start you web
    application

-   (NEXT) If everything is setup properly — you will finaly be able to run
    protractor.



How to write a test
-------------------

-   Ok lets see how tests are written in Protractor

-   In this test you can already see the three most important things in
    Protractor

-   the first one is the global „browser“ object — its a wrapper arround an
    instance of web driver and its used for navigation and page-wide information

-   The next important element is the global „element“ — „element“ is a helper
    function to find and interact with elements on the page

-   Right after „element“ you usaly see the global „by“ - „by“ is a collection
    of element locator strategies and I will show you this one more in detail
    later

-   So what is this test doing. This test navigates to the appliation homepage.
    It tries to find the link that navigates to the signup and clicks it. It
    prepares a new user from a factory. It fills out some form data. It submits
    it. And then it expects to find your username in the header and a message
    that is saying that you are signed up.

-   (REPEAT going through the next slides)




Locator strategies
------------------

-   Here you can see a collection of the existing locator strategies, like
    by.css, by.model, by.id, and so on

-   Due to the fact that you could achive all of those by just using the css
    locator strategy in most of the cases (NEXT)

-   And the fact that its just common to use the css locator strategy in general

-   (NEXT) There is a shortcut for selecting an element on the page by using a
    css selector — as you can see here — it looks familiar, right

-   (NEXT) and also our previous test — (NEXT) looks a little bit nicer using
    the css short cut selector



Page Object
-----------

-   (NEXT) one way to already start clean up you test code in this state is to
    use whats called the page object pattern

-   using that pattern u define a page and all actions that you could perform on
    that page and also all elements that are part of that page

-   and using this page object pattern in your tests (NEXT) — is making them
    more readable and the code for each specific page more reusable



Debugging
---------

-   There is often the need of debugging an E2E test, so lets see how this works
    in Protractor

-   If you have some problem or some failure on some specific line of you test
    you can just hook into the execution chain right before by using
    „browser.debugger()"

-   (NEXT) Then you have to start protractor in debugger mode by calling
    „protractor debug“ together with the path to your protractor configuration
    file. This will start protractor in debug mode. The first thing you have to
    do there to start the test suite is enter the character „c" into the debug
    prompt. And then wille executing the test it will stop right were you left
    the „browser.debugger()“ statement.

-   (NEXT) When the test execution is paused, you can go the browser console and
    continue debugging there — Protractor is injecting some helper functions
    into the namespace „window.clientSideScripts“ —  (NEXT) that should help you
    debugging your problem.

-   (NEXT) The possibilities to controll the test runner interactivly on the
    terminal are currently pretty limited to an element explorer. With the
    element explorer you can navigate to a specific website and try to fetch
    some elements by using different locator strategies (NEXT) (NEXT).



Wait for an element
-------------------

-   Some times in your E2E tests you have to wait until a specific element
    appears — there can be multiple reasons why the presence of a certain
    element is delayed — but anyway, there is also a possibility in protractor
    to wait for an element to appear before continue with the test execution.

-   For doing that you can use the wait function provided by Protractors global
    browser object and you return a boolean that indicates when protractor can
    continue executing your test

-   something that is important here is that you have to use a selector strategy
    that is not raising an exception when it doesnt find the element



Non angular apps
----------------

-   Another important thing, when it comes to test also non angular applications
    with protractor — for example if you have an environment of multiple
    web-applications that work together and only one of them is actually an
    angular application — then you have to use protractor a little bit different
    — for those tests that interact with the non angular applications you have
    to use webdriverjs directly by using „browser.driver“ and then the specific
    webdriverjs method u wanna use.

-   You have to do this because the default behaviour of Protractors „browser“
    wrapper, when you use their native functions is that it waits until angular
    is setup on your page before it starts test execution, but if protractor
    tries to wait for angular to finish setup on a non angular application it
    just runs into a time out.

-   Something that you have to regard also when you use webdriverjs directly is
    that when you want to expect some certain behavior — like test the presence
    of an element on the page — you have to write the expectation itself in a
    callback that is executed when the webdriverjs promise is resolved — like
    you can see here in this example.



Mock & Stub
===========



-   The reason why you mock or stub some components sometimes is to be able to
    realy focus on certain parts of your application that you wanna test,
    without the need of setting up the environment properly. The best example
    for that is an http backend.



ngMock
------

-   Angular provides a library thats called angular-mocks that supports you,
    testing your angular application.

-   So you should install it using bower and use the angular-mocks library when
    you run your tests with karma — like here in this  karma configuration file
    example.

-   (NEXT) Angular Mocks, provides you two important global functions. One is
    „module“ — as you can see here in the beforeEach — which loads a specific
    module and makes it available in your tests. Another one is „inject“ — which
    you also can see here — that helps you to inject any provider, like
    directives, services, factories and so on and makes them available in you
    tests. You can also inject angular internal providers, like a rootScope or
    the compile method for templates.



\$httpBackend
-------------

-   (NEXT) When your angular application consumes http backends you have to mock
    those in your unit tests.

-   For the next example I will test this controller from the previous sign up
    example which is consuming the „User“ service and provides a submit method
    through the scope that is creating a user when the form is valid and
    redirects to the homepage when the creation was successful.

-   (NEXT) This is the consumed User service that provides the basic user
    structure and the link to your http backend.

-   (NEXT) And this is the test that actualy tests the controller. First it
    loads the application module it injects the httpBackend mocking service.

-   In the spec it injects, the angular internals \$controller, \$rootScope and
    \$location

-   It sets up the controller with the scope.

-   it applies a change in the scope.

-   its setup an expectation for the httpBackend, in this case it expects a post
    to the „/users“ resource and we mock the respond in this specific case to
    respond 201(created) without an empty response body.

-   Then we call the submit function on the scope that was provided by the
    controller — right after the submit we tell httpBackend to release all
    currently queued http requests by using its „flush()“ method — all http
    requests in your test are queued and are not released automaticly and the
    submit action was just queuing one http request.

-   Finally after the flush we check that the location changed, because of the
    successful creation of the user.

-   Then at the end inside the afterEach block you have to ensure, on one hand
    that there are no unfullfilled expectations when the spec ends and that
    there are no outstanding requests that were not expected.



Mocking a service
-----------------

-   (NOT NEXT) Lets stay with the current example and image that now, we dont
    realy want to test so deep, but its enough to just actually test that the
    controller was calling the create method of the user service.

-   (NEXT) For that we can use Spies that are provided by jasmine and this is
    out they are working.

-   First we create a mock of the user service, because the controller will
    chain a success method on the create call we have to return something that
    is not breaking the chain.

-   Then we setup a jasmine spy to listen on the „create“ method of the user
    service and call through, which means, it will forward the call to the
    mocked user service but also records every call of it.

-   Then we continue like in the previous example, we setup a controller — and
    this is an exception now, we inject our mocked user service in the
    controller — then we continue to do some changes in the scope, call submit
    at the end and then we expect that the controller was calling the create
    method of the user service we injected.



The Cycle of Delivery
=====================

-   So, now you just saw a lot about testing, technologies and how everything is
    working — But how does all this applies to your daily work — The goal should
    be to let all this become a part of your routine — I know its hard make Test
    and Behaviour-Driven-Development a part of you daily work, but I want
    quickly go through an example of whats called the cycle of delivery (NEXT).

-   Just image you have some feature request from a client, or you want to
    implement a new feature into your application your self. The feature is
    about „A signup“ functionality as we just saw it.

-   So we start here at number (1) on the outer circle which means writing a
    scenario, an E2E test, something like „As an interested person I want to be
    able to sign up for this service“ and the implementation for that feature
    test is written in protractor and it will try to follow a link to the signup
    page, fill out a form and submit it, and then it expects to see the user’s
    name in the navigation and a message saying that the user is signed up now.

-   When we run that test it will be red, what is fine, because nothing is
    implemented yet.

-   So now we continue and drop down to a deeper level, the inner circle, unit
    tests. These we could write without the client beeing involved because in
    most of the cases its to technical anyway.

-   So now we are at point (3) in the inner circle we have to write some unit
    test. We could start testing the user service. So our first unit test will
    only check if there is a user service around. When we run this first unit
    test it will be red, which is fine again, because now we start to make
    things green. Now we start implement only as much code as needed for making
    this test green. So we just have to define the user service and make it
    available.

-   Then we continue the innercircle again and again, either because we did some
    refactoring, which causes one of the test to fail again, or because our
    units are not complete yet to fulfill the expectation of the outer circle.

-   But as soon as all units from the inner circle are complete we can come back
    to the outer circle and implement whats needed for the E2E test. We
    implement the signup button in the navigation, we setup a form that works
    with the directive and setup a view that welcomes our new user.

-   This now leads also the outer circle, our E2E test to become green we can go
    to our client now and deliver the new feature without any bad feelings. And
    we are ready to attack the next feature.
