const { join } = require('path')

exports.config = {
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
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