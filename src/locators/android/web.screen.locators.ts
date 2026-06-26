export const AndroidWebScreenLocators = {
    // --------  Native locators  --------------
    spash: 'android=new UiSelector().className("android.webkit.WebView")',
    webViewContainer: 'android=new UiSelector().className("android.view.View").instance(10)',
    ioButton: '//android.widget.Image[@content-desc="WebdriverIO"]',
    // Hamburger menu items
    hamburgerMenuButton: '~Toggle navigation bar',
    menuContainer: 'android=new UiSelector().className("android.view.View").instance(9)',
    menuBackToMainMenu: 'android=new UiSelector().text("← Back to main menu")',
    menuDocs: '~Docs',
    menuAPI: '~API',

    // ------------- Webview locators --------------
    // IO Home screen
    ioWebviewContainer: 'android=new UiSelector().className("android.widget.Image").instance(3)',
    homeRobotImage: 'android=new UiSelector().text("WebdriverIO")',
    homeGetStartButton: '~Get Started',
    homeWhyWebdriverIOButton: '~Why WebdriverIO?',
    homeViewOnGithubButton: '~View on GitHub',
    homeWatchOnYoutubeButton: '~Watch on YouTube',
    // Docs Getting Started screen
    docGettingStartedContainer: 'android=new UiSelector().className("android.view.View").instance(10)',
    docsGettingStartedHeading: 'android=new UiSelector().text("Getting Started")',
    docsGettingStartedVideo: 'android=new UiSelector().className("android.view.View").instance(23)'
}