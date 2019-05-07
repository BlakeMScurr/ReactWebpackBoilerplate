// Karma configuration
// Generated on 2019-05-07

module.exports = function(config) {
    "use strict";

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: "",

        // testing framework to use (jasmine/mocha/qunit/...)
        // as well as any additional frameworks (requirejs/chai/sinon/...)
        frameworks: ["jasmine"],

        // list of files / patterns to load in the browser
        files: ["./test/**"],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJSPhantomJS
        // - IE (only Windows)
        // browsers: ["Chrome"],
        browsers: ["Chrome", "Chrome_without_security"], // You may use 'ChromeCanary', 'Chromium' or any other supported browser
        // you can define custom flags
        customLaunchers: {
            Chrome_without_security: {
                base: "Chrome",
                flags: ["--disable-web-security"]
            }
        },
        // Which plugins to enable
        plugins: ["karma-phantomjs-launcher", "karma-jasmine", "karma-chrome-launcher"],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO

        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
        //   '/': 'http://localhost:9000/'
        // },
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'
    });
};
