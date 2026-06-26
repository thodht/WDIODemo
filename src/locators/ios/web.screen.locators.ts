export const IOSWebScreenLocators = {
    // --------  Native locators  --------------
    spash: 'iandroid=new UiSelector().className("android.webkit.WebView")',
    webViewContainer: 'iandroid=new UiSelector().className("android.view.View").instance(10)',
    ioButton: 'i//android.widget.Image[@content-desc="WebdriverIO"]',
    // Hamburger menu items
    hamburgerMenuButton: 'i~Toggle navigation bar',
    menuContainer: 'iandroid=new UiSelector().className("android.view.View").instance(9)',
    menuBackToMainMenu: 'iandroid=new UiSelector().text("← Back to main menu")',
    menuDocs: 'i~Docs',
    menuAPI: 'i~API',

    // ------------- Webview locators --------------
    // IO Home screen
    ioWebviewContainer: 'iandroid=new UiSelector().className("android.widget.Image").instance(3)',
    homeRobotImage: 'iandroid=new UiSelector().text("WebdriverIO")',
    homeGetStartButton: 'i~Get Started',
    homeWhyWebdriverIOButton: 'i~Why WebdriverIO?',
    homeViewOnGithubButton: 'i~View on GitHub',
    homeWatchOnYoutubeButton: 'i~Watch on YouTube',
    // Docs Getting Started screen
    docsGettingStartedHeading: 'iandroid=new UiSelector().text("Getting Started")',
    docsGettingStartedVideo: 'iandroid=new UiSelector().className("android.view.View").instance(23)'
}