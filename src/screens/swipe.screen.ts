import { $ } from '@wdio/globals';
import Screen from '../screens/screen.ts';
import { AndroidSwipeScreenLocators } from '../locators/android/swipe.screen.locators.ts';
import { IOSSwipeScreenLocators } from '../locators/ios/swipe.screen.locators.ts';

export class SwipeScreen extends Screen {
    private get SwipeScreenLocators() {
        return driver.isAndroid? AndroidSwipeScreenLocators : IOSSwipeScreenLocators;
    }

    public async scrollToFourthCard(): Promise<void> {
        // Resolve the dynamic native scroll-to-view locator
        const targetCard = $(this.SwipeScreenLocators.scrollToCardByText(this.SwipeScreenLocators.fourthCardText));

        // This command forces Appium to perform the physical drag gestures automatically
        if (await targetCard.waitForDisplayed({ timeout: 10000 })) {
            console.log('Card found!');
        }
        else { console.log('Card not found!'); }
    }

    public async scrollToRobot(): Promise<void> {
        // Resolve the dynamic native scroll-to-view locator
        //const robotID = await this.TheRobot.getAttribute('name');
        const targetCard = $(this.SwipeScreenLocators.scrollToImage(this.SwipeScreenLocators.theRobotID));

        // This command forces Appium to perform the physical drag gestures automatically
        if (await targetCard.waitForDisplayed({ timeout: 10000 })) {
            console.log('Robot found!');
        }
        else { console.log('Robot not found!'); }
    }
}

export default new SwipeScreen();