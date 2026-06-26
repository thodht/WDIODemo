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
    }
};