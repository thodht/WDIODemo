export const IOSSwipeScreenLocators = {
    screenHeading: '-ios class chain:**/XCUIElementTypeStaticText[`name == "Swipe horizontal"`][2]',
    getCardByText: (cardText: string) => `-ios predicate string:type == "XCUIElementTypeStaticText" AND label == "${cardText}"`,
    scrollToCardByIndex: (cardIndex: number) =>
        `iandroid=new UiScrollable(new UiSelector().scrollable(true))` +
        `.scrollIntoView(new UiSelector().className("android.view.ViewGroup").instance(${cardIndex}))`,
    scrollToImage: (accessibilityId: string) =>
        `iandroid=new UiScrollable(new UiSelector().scrollable(true))` +
        `.scrollIntoView(new UiSelector().description("${accessibilityId}"))`,
    theRobotID: '~WebdriverIO logo',
    theRobotText: 'android=new UiSelector().text("You found me!!!")'
}