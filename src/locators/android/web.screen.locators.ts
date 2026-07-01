export const AndroidWebScreenLocators = {
    // --------  Native locators  --------------
    ioButton: '//android.widget.Image[@content-desc="WebdriverIO"]',
    // Hamburger menu items
    hamburgerMenuButton: '~Toggle navigation bar',
    menuBackToMainMenu: 'android=new UiSelector().text("← Back to main menu")',
    menuDocs: '~Docs',
    menuAPI: '~API',

    // ------------- Webview locators --------------
    // IO Home screen
    homeRobotImage: 'android=new UiSelector().text("WebdriverIO")',
    homeGetStartButton: '~Get Started',
    homeWhyWebdriverIOButton: '~Why WebdriverIO?',
    homeViewOnGithubButton: '~View on GitHub',
    homeWatchOnYoutubeButton: '~Watch on YouTube',
    // Docs Getting Started screen
    docsGettingStartedHeading: 'android=new UiSelector().text("Getting Started")',
    docsGettingStartedVideo: 'android=new UiSelector().className("android.view.View").instance(23)'
}