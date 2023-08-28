const { join } = require('path')

exports.config = {
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    maxInstances: 10,
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    framework: 'mocha',
    services: [
        [
            'appium',
            {
                args: {},
                command: 'appium'
            }
        ]
    ],
    capabilities: [{
            "platformName": "Android",
            "appium:platformVersion": "8.1",
            "appium:deviceName": "ebac-qe",
            "appium:automationName": "UiAutomator2",
            "appium:appPackage": "com.woocommerce.android",
            "appium:appActivity": ".ui.main.MainActivity",
            "appium:appWaitActivity": ".ui.login.LoginActivity" 
        }]
}