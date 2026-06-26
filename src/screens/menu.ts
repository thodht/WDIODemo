import { $ } from '@wdio/globals';
import Toolbar from '../screens/toolbar.ts';
import { AndroidMenuLocators } from '../locators/android/menu.locators';
import { IOSMenuLocators } from '../locators/ios/menu.locators';

export class Menu {
    private get MenuLocators() {
        return driver.isAndroid? AndroidMenuLocators : IOSMenuLocators;
    }

    private get MenuPanel() {
        return $(this.MenuLocators.menuPanel);
    }

    private get HomeButton() {
        return $(this.MenuLocators.homeButton);
    }

    private get WebviewButton() {
        return $(this.MenuLocators.webviewButton);
    }

    private get LoginButton() {
        return $(this.MenuLocators.loginButton);
    }

    private get FormsButton() {
        return $(this.MenuLocators.formsButton);
    }

    private get SwipeButton() {
        return $(this.MenuLocators.swipeButton);
    }

    private get DragButton() {
        return $(this.MenuLocators.dragButton);
    }

    private get PermissionsButton() {
        return $(this.MenuLocators.permissionsButton);
    }

    private get DataButton() {
        return $(this.MenuLocators.dataButton);
    }

    public async openHomeScreen() {
        //if (!this.MenuPanel.isDisplayed()) { await Toolbar.MenuButton.click();}
        await Toolbar.MenuButton.click();
        await this.HomeButton.click();
    }

    public async openWebviewScreen() {
        await Toolbar.WebButton.click();
        await this.WebviewButton.click();
    }

    public async openLoginScreen() {
        await Toolbar.MenuButton.click();
        await this.LoginButton.click();
    }
}

export default new Menu();