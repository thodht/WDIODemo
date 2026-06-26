export const AndroidSwipeScreenLocators = {
    screenHeading: 'android=new UiSelector().text("Swipe horizontal")',
    //hScrollView: 'android=//android.widget.ScrollView',
    scrollToCardByText: (cardText: string) =>
        `android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList()` +
        `.scrollIntoView(new UiSelector().text("${cardText}"))`,
    scrollToCardByIndex: (cardIndex: number) =>
        `android=new UiScrollable(new UiSelector().scrollable(true))` +
        `.scrollIntoView(new UiSelector().className("android.view.ViewGroup").instance(${cardIndex}))`,
    scrollToImage: (accessibilityId: string) =>
        `android=new UiScrollable(new UiSelector().scrollable(true))` +
        `.scrollIntoView(new UiSelector().description("${accessibilityId}"))`,
    fourthCard: '//android.view.ViewGroup[@resource-id="__CAROUSEL_ITEM_4__"]/android.view.ViewGroup[@content-desc="card"]',
    fourthCardText: 'EXTENDABLE',
    theRobotID: 'WebdriverIO logo',
    theRobotText: 'android=new UiSelector().text("You found me!!!")'
}