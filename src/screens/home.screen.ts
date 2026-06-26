import { $ } from '@wdio/globals';
import Screen from './screen.ts';
//import Toolbar from './toolbar.ts';
import { AndroidHomeScreenLocators } from '../locators/android/home.screen.locators.ts';
import { IOSHomeScreenLocators } from '../locators/ios/home.screen.locators.ts';

export class HomeScreen extends Screen {
    
    private get HomeScreenLocators() {
        return driver.isAndroid ? AndroidHomeScreenLocators : IOSHomeScreenLocators;
    }

    private get RobotImage() {
        return $(this.HomeScreenLocators.robotImage);
    }

    private get WDIOLogo() {
        return $(this.HomeScreenLocators.wdioLogo);
    }

    private get AppleLogo() {
        return $(this.HomeScreenLocators.appleLogo[0]);
    }

    private get AndroidLogo() {
        return $(this.HomeScreenLocators.androidLogo[1]);
    }

    public get screenElements() {
        return [this.RobotImage, this.WDIOLogo, this.AppleLogo, this.AndroidLogo];
    }
}

export default new HomeScreen();