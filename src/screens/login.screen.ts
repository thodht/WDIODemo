import { $ } from '@wdio/globals';
import Screen from './screen.ts';
//import Toolbar from './toolbar.ts';
import { AndroidLoginLocators } from '../locators/android/login.screen.locators.ts';
import { IOSLoginLocators } from '../locators/ios/login.screen.locators.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginScreen extends Screen {
    private get LoginLocators() {
        return driver.isAndroid ? AndroidLoginLocators : IOSLoginLocators;
    }

    /**
     * define selectors using getter methods
     */
    private get EmailInput () {
        return $(this.LoginLocators.emailInput);
    }

    private get PasswordInput () {
        return $(this.LoginLocators.passwordInput);
    }

    private get LoginButton () {
        return $(this.LoginLocators.loginButton);
    }

    private get DialogMessage() {
        return $(this.LoginLocators.dialogMessage);
    }

    private get DialogOkButton() {
        return $(this.LoginLocators.dialogOkButton);
    }

    public get screenElements() {
        return [this.EmailInput, this.PasswordInput, this.LoginButton];
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string, expectedMessage: string) {
        await this.EmailInput.setValue(username);
        await this.PasswordInput.setValue(password);
        await this.LoginButton.click();
        const alertText = await this.DialogMessage.getText();
        expect(alertText).toEqual(expectedMessage);
        await this.DialogOkButton.click();
    }
}

export default new LoginScreen();
