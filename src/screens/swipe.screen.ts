import { $ } from '@wdio/globals';
import Screen from '../screens/screen.ts';
import { AndroidSwipeScreenLocators } from '../locators/android/swipe.screen.locators.ts';
import { IOSSwipeScreenLocators } from '../locators/ios/swipe.screen.locators.ts';
import { Utils } from '../utils/utils.ts';

export class SwipeScreen extends Screen {
    private get SwipeScreenLocators() {
        return driver.isAndroid? AndroidSwipeScreenLocators : IOSSwipeScreenLocators;
    }

    public async horizontalScrollToCard(text: string): Promise<void> {
        const targetCard = $(this.SwipeScreenLocators.getCardByText(text));
        let maxSwipes = 10;

        while (!(await targetCard.isDisplayed()) && maxSwipes > 0) {
            await Utils.swipeRight();
            maxSwipes--;
        }

        if (maxSwipes === 0) {
            throw new Error(`Card with text "${text}" was not found after 10 swipes.`);
        }
        console.log(`Successfully scrolled to card: ${text}`);
    }

    public async scrollToRobot(): Promise<void> {
        if (driver.isAndroid) {
            const targetCard = $(this.SwipeScreenLocators.scrollToImage(this.SwipeScreenLocators.theRobotID));

            if (await targetCard.waitForDisplayed({ timeout: 10000 })) {
                console.log('Robot found!');
            }
            else { console.log('Robot not found!'); }
        }
        else {
            const targetCard = $(this.SwipeScreenLocators.theRobotID);
            let maxSwipes = 10;

            while (!(await targetCard.isDisplayed()) && maxSwipes > 0) {
                await Utils.swipeUp();
                maxSwipes--;
            }

            if (maxSwipes === 0) {
                throw new Error(`Robot was not found after 10 swipes.`);
            }

            console.log(`Successfully scrolled to Robot`);
        }
    }
}

export default new SwipeScreen();