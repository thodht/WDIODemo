export default class Screen {
    /**
     * Common helper to wait for a screen to be fully loaded based on a unique element.
     * @param element The WebdriverIO element unique to the screen
     * @param timeout Maximum time to wait in milliseconds
     */
    async waitForScreenToBeReady(element: WebdriverIO.Element, timeout = 15000): Promise<boolean> {
        try {
            await element.waitForDisplayed({ timeout });
            return true;
        } catch (error) {
            throw new Error(`Screen fell outside the synchronization threshold and was not ready within ${timeout}ms.`);
        }
    }

    /**
     * Cross-platform wrapper to click an element safely by ensuring visibility first.
     */
    async safeClick(element: WebdriverIO.Element): Promise<void> {
        await element.waitForDisplayed();
        await element.click();
    }

    /**
     * Reusable mobile gesture: Scroll Down until a specific element is visible.
     * Uses Appium's optimized UiAutomator2 (Android) and XCUITest (iOS) strategies.
     */
    async scrollDownToElement(element: WebdriverIO.Element, maxScrolls = 10): Promise<void> {
        let scrollCount = 0;
        
        while (!(await element.isDisplayed()) && scrollCount < maxScrolls) {
            if (driver.isAndroid) {
                // Optimized Android UIAutomator scroll strategy
                $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
            } else {
                // Native iOS XCUITest scroll strategy
                await driver.execute('mobile: scroll', { direction: 'down' });
            }
            scrollCount++;
        }

        if (!(await element.isDisplayed())) {
            throw new Error(`Target element could not be found after scrolling ${maxScrolls} times.`);
        }
    }

    async scrollUpToElement(element: WebdriverIO.Element, maxScrolls = 5): Promise<void> {
        let scrollCount = 0;

        while (!(await element.isDisplayed()) && scrollCount < maxScrolls) {
            if (driver.isAndroid) {
                // Optimized Android UIAutomator scroll strategy
                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
            } else {
                // Native iOS XCUITest scroll strategy
                await driver.execute('mobile: scroll', { direction: 'up' });
            }
            scrollCount++;
        }

        if (!(await element.isDisplayed())) {
            throw new Error(`Target element could not be found after scrolling ${maxScrolls} times.`);
        }
    }

    /**
     * Utility to hide the keyboard safely across platforms after inputting text.
     */
    async hideKeyboardSafely(): Promise<void> {
        if (await driver.isKeyboardShown()) {
            if (driver.isAndroid) {
                await driver.hideKeyboard();
            } else {
                // iOS sometimes requires clicking a specific "Done" button or tapping outside
                try {
                    await $('~Done').click(); // Tries to look for an Accessibility ID named Done
                } catch {
                    // Fallback: Click the top left corner of the screen to dismiss the keyboard focus
                    await driver.touchAction({ action: 'tap', x: 10, y: 10 });
                }
            }
        }
    }

    /** Validate visibility of screen's elements */
    async validateScreenElements(elements: ChainablePromiseElement[]) {
        for (const element of elements) {
            expect(element.isDisplayed());
        }
    }
}