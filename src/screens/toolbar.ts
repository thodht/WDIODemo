import { $ } from '@wdio/globals';
import Screen from './screen.ts';
import { AndroidToolbarLocators } from '../locators/android/toolbar.locators.ts';
import { IOSToolbarLocators } from '../locators/ios/toolbar.locators.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Toolbar extends Screen {
    private get ToolbarLocators() {
        return driver.isAndroid ? AndroidToolbarLocators : IOSToolbarLocators;
    }

    /**
     * define selectors using getter methods
     */
    public get HomeButton () {
        return $(this.ToolbarLocators.homeButton);
    }

    public get WebButton () {
        return $(this.ToolbarLocators.webButton);
    }

    public get LoginButton () {
        return $(this.ToolbarLocators.loginButton);
    }

    public get FormsButton() {
        return $(this.ToolbarLocators.formsButton);
    }

    public get SwipeButton() {
        return $(this.ToolbarLocators.swipeButton);
    }

    public get DragButton() {
            return $(this.ToolbarLocators.dragButton);
    }

    public get MenuButton() {
            return $(this.ToolbarLocators.menuButton);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async clickHomeButton() {
        await this.HomeButton.click();
    }

    public async clickWebButton() {
        await this.WebButton.click();
        await driver.pause(3000);
    }

    public async clickLoginButton() {
        await this.LoginButton.click();
    }

    public async clickFormsButton() {
        await this.FormsButton.click();
    }

    public async clickSwipeButton() {
        await this.SwipeButton.click();
    }

    public async clickDragButton() {
        await this.DragButton.click();
    }

    public async clickMenuButton() {
        await this.MenuButton.click();
    }
}

export default new Toolbar();
