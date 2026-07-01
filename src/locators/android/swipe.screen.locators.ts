export const AndroidSwipeScreenLocators = {
    screenHeading: 'android=new UiSelector().text("Swipe horizontal")',
    getCardByText: (cardText: string) => `android=new UiSelector().text("${cardText}")`,
    //    `android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList()` +
    //    `.scrollIntoView(new UiSelector().text("${cardText}"))`,
    scrollToCardByIndex: (cardIndex: number) =>
        `android=new UiScrollable(new UiSelector().scrollable(true))` +
        `.scrollIntoView(new UiSelector().className("android.view.ViewGroup").instance(${cardIndex}))`,
    scrollToImage: (accessibilityId: string) =>
        `android=new UiScrollable(new UiSelector().scrollable(true))` +
        `.scrollIntoView(new UiSelector().description("${accessibilityId}"))`,
    theRobotID: 'WebdriverIO logo',
    theRobotText: 'android=new UiSelector().text("You found me!!!")'
}