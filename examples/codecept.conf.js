const { triggerAsyncId } = require('async_hooks');

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      browser: 'chromium',
      restart: false,
      windowSize: '1600x1200',
      video: true,
      chromium: {
        // browserWSEndpoint: 'ws://127.0.0.1:45635/09b7aa1ac28c317e5abee7cb6d35d519',
      },
      show: !process.env.HEADLESS,
    },
    REST: {},
  },
  include: {
    I: './custom_steps.js',
    Smth: './pages/Smth.js',
    loginPage: './pages/Login.js',
    signinFragment: './fragments/Signin.js',
  },
  mocha: {
    reporterOptions: {
      mochaFile: './output/result.xml',
    },
  },
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/steps.js',
    ],
  },
  plugins: {
    tryTo: {
      enabled: true,
    },
    allure: {
      enabled: false,
    },
    wdio: {
      enabled: false,
      services: [
        'selenium-standalone',
      ],
    },
    stepByStepReport: {},
    autoDelay: {
      enabled: false,
    },
    retryFailedStep: {
      enabled: false,
    },
    subtitles: {
      enabled: true,
    },
  },
  tests: './*_test.js',
  timeout: 10000,
  multiple: {
    parallel: {
      chunks: 2,
    },
    default: {
      grep: 'signin',
      browsers: [
        'chrome',
        'firefox',
      ],
    },
  },
  name: 'tests',
};
