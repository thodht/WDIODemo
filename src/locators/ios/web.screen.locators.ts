export const IOSWebScreenLocators = {
    // --------  Native locators  --------------
    ioButton: '-ios class chain:**/XCUIElementTypeImage[`name == "WebdriverIO"`]',
    // Hamburger menu items
    hamburgerMenuButton: '~Toggle navigation bar',
    menuBackToMainMenu: '~← Back to main menu',
    menuDocs: '-ios class chain:**/XCUIElementTypeOther[`name == "Main, navigation"`]/XCUIElementTypeOther/XCUIElementTypeOther[1]',
    menuAPI: '-ios class chain:**/XCUIElementTypeOther[`name == "Main, navigation"`]/XCUIElementTypeOther/XCUIElementTypeOther[2]',

    // ------------- Webview locators --------------
    // IO Home screen
    homeRobotImage: '-ios class chain:**/XCUIElementTypeOther[`name == "WebdriverIO"`]',
    homeGetStartButton: '-ios class chain:**/XCUIElementTypeStaticText[`name == "Get Started"`]',
    homeWhyWebdriverIOButton: '-ios class chain:**/XCUIElementTypeStaticText[`name == "Why WebdriverIO?"`]',
    homeViewOnGithubButton: '-ios class chain:**/XCUIElementTypeStaticText[`name == "View on GitHub"`]',
    homeWatchOnYoutubeButton: '-ios class chain:**/XCUIElementTypeStaticText[`name == "Watch on YouTube"`][1]',
    // Docs Getting Started screen
    docsGettingStartedHeading: '-ios class chain:**/XCUIElementTypeOther[`name == "Getting Started"`]',
    docsGettingStartedVideo: '-ios class chain:**/XCUIElementTypeOther[`name == "Getting Started with WebdriverIO"`][2]/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]'
}