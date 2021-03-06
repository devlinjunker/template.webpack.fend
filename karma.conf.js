// Karma configuration
/* eslint-disable no-undef */
const buildWebpack = require('./webpack.config.js');

// webpack config takes some cli arguments that are prefixed with env, we should recreate those here
const env = {
  dev_server: process.argv.includes('--env.dev_server')
};
const webpack = buildWebpack(env);
webpack.watch = true;

const karmaConfig = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: ['test/test.bootstrap.js'],


    // list of files / patterns to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/test.bootstrap.js': ['webpack', 'sourcemap']
    },

    webpack,

    webpackMiddleware: {
      watchOptions: {
        aggregateTimeout: 300,
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN ||
    //  config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'ChromeHeadless',
      // 'Firefox'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};

// Set browser to chrome to see tests
// config.browsers = ['Chrome'];

module.exports = karmaConfig;
