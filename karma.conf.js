var argv = require('yargs').argv;

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
          './node_modules/es6-promise/dist/es6-promise.js',
          './tmp/**/*.js'
        ],
        exclude: [],
        reporters: ['spec', 'coverage'],
        autoWatch: true,
        browsers: [argv.debug ? 'Chrome' : 'PhantomJS'],
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-spec-reporter',
            'karma-sourcemap-loader',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],
        preprocessors: {
            './tmp/**/*.js': ['coverage', 'sourcemap']
        },
        coverageReporter: {
            reporters: [
                { type: 'html' },
                { type: 'text-summary' }
            ]
        },
        logLevel: argv.debug ? config.LOG_DEBUG : config.LOG_INFO
    });
};