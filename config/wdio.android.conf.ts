import { config as sharedConfig } from './wdio.shared.conf';

export const config: WebdriverIO.Config = {
    ...sharedConfig, // Spread base settings
    port: 4723,
    specs: [
        '../src/tests/*.spec.ts'
    ],
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        //'appium:deviceName': process.env.ANDROID_DEVICE_NAME || 'emulator-5554',
        'appium:deviceName': process.env.ANDROID_DEVICE_NAME || 'Pixel_10_Pro_Fold',
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
    }]
};