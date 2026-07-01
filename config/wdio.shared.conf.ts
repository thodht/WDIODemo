export const config: WebdriverIO.Config = {
    runner: 'local',
    baseUrl: '',
    logLevel: 'error',
    waitforTimeout: 10000, // Safe automatic waiting threshold for slow emulators
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000 // Individual test timeout
    },
    // Hook: Capture a screenshot instantly on any failed test step
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await driver.takeScreenshot();
        }
    },
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        //'appium:deviceName': process.env.ANDROID_DEVICE_NAME || 'emulator-5554',
        'appium:deviceName': process.env.ANDROID_DEVICE_NAME || 'Pixel_10_Pro',
        //'appium:platformVersion': '14.0',
        //'appium:app': process.env.APP_PATH || './apps/production-build.apk',
        'appium:appPackage': 'com.wdiodemoapp',
        'appium:appActivity': '.MainActivity',
        //'appium:disableWindowAnimation': true,
        //'appium:waitForIdleTimeout': 0,
        'appium:ensureWebviewsHavePages': true,
        //'appium:nativeWebScreenshot': true,
        'appium:newCommandTimeout': 240,
        'appium:noReset': false, // Ensures a fresh app sandbox sandbox initialization
    },
    {
        'platformName': 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'TD17PM',
        'appium:platformVersion': '26.5.1',
        'appium:udid': '00008150-0019153E3621401C',
        'appium:xcodeOrgId': '37KLVLZPQT',
        'appium:xcodeSigningId': 'thodht@gmail.com',
        'appium:bundleId': 'org.thodinh.wdiodemoapp'
    }]
};