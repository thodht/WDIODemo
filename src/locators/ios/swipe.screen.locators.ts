export const IOSSwipeScreenLocators = {
    screenHeading: 'iandroid=new UiSelector().text("Swipe horizontal")',
    //hScrollView: 'android=//android.widget.ScrollView',
    scrollToCardByText: (cardText: string) =>
        `iandroid=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${cardText}"))`,
    scrollToCardByIndex: (cardIndex: number) =>
        `iandroid=new UiScrollable(new UiSelector().scrollable(true))` +
        `.scrollIntoView(new UiSelector().className("android.view.ViewGroup").instance(${cardIndex}))`,
    scrollToImage: (accessibilityId: string) =>
        `iandroid=new UiScrollable(new UiSelector().scrollable(true))` +
        `.scrollIntoView(new UiSelector().description("${accessibilityId}"))`,
    fourthCard: 'i//android.view.ViewGroup[@resource-id="__CAROUSEL_ITEM_3__"]/android.view.ViewGroup[@content-desc="card"]',
    fourthCardText: 'android=new UiSelector().text("EXTENDABLE")',
    theRobotID: '~WebdriverIO logo',
    theRobotText: 'android=new UiSelector().text("You found me!!!")'
}