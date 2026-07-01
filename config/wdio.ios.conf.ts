import { config as sharedConfig } from './wdio.shared.conf';

export const config: WebdriverIO.Config = {
    ...sharedConfig, // Spread base settings
    port: 4723,
    specs: [
        '../src/tests/*.spec.ts'
    ],
    capabilities: [{
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