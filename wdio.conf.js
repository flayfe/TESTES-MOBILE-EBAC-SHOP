const { join } = require('path')

exports.config = {
    hostname: 'localhost',
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
        "appium:options": {
            "platformVersion": "8.1",
            "deviceName": "ebac-qe",
            "automationName": "UiAutomator2",
            "app": join(process.cwd(), './app/android/loja-ebac.apk'),
            "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'
        }
    }]
}