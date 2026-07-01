import { $ } from '@wdio/globals';
import Screen from './screen.ts';
import { AndroidWebScreenLocators } from '../locators/android/web.screen.locators';
import { IOSWebScreenLocators } from '../locators/ios/web.screen.locators';

export class WebScreen extends Screen {
    private get WebScreenLocators() {
        return driver.isAndroid ? AndroidWebScreenLocators : IOSWebScreenLocators;
    }

    // Get main elements
    private get IOButton() {
        return $(this.WebScreenLocators.ioButton);
    }

    public async clickIOButton() {
        await this.IOButton.click();
        this.validateScreenElements(this.IOScreenElements);
    }

    // Get menu elements
    private get HamburgerMenuButton() {
        return $(this.WebScreenLocators.hamburgerMenuButton);
    }

    private get MenuDocsLink() {
        return $(this.WebScreenLocators.menuDocs);
    }

    private get MenuAPILink() {
        return $(this.WebScreenLocators.menuAPI);
    }

    public get MenuElements() {
        return [this.MenuDocsLink, this.MenuAPILink];
    }

    public async clickHamburgerButton() {
        await this.HamburgerMenuButton.click();
        this.validateScreenElements(this.MenuElements);
        await driver.pause(3000);
    }

    public async clickMenuDocs() {
        await this.MenuDocsLink.click();
        await driver.pause(3000);
    }

    // Get IO screen elements
    private get HomeRobotImage() {
        return $(this.WebScreenLocators.homeRobotImage);
    }

    private get HomeGetStartedButton() {
        return $(this.WebScreenLocators.homeGetStartButton);
    }

    private get HomeWhyWDIOButton() {
        return $(this.WebScreenLocators.homeWhyWebdriverIOButton);
    }

    private get HomeViewOnGithubButton() {
        return $(this.WebScreenLocators.homeViewOnGithubButton);
    }

    private get HomeWatchOnYoutubeButton() {
        return $(this.WebScreenLocators.homeWatchOnYoutubeButton);
    }

    public get IOScreenElements() {
        return [this.HamburgerMenuButton, this.HomeRobotImage, this.HomeGetStartedButton, this.HomeWhyWDIOButton, this.HomeViewOnGithubButton, this.HomeWatchOnYoutubeButton];
    }

    // Get Docs Getting started elements
    private get DocsGettingStartedHeading() {
        return $(this.WebScreenLocators.docsGettingStartedHeading);
    }

    private get DocsGettingStartedVideo() {
        return $(this.WebScreenLocators.docsGettingStartedVideo);
    }

    public get DocsGettingStartedElements() {
        return [this.DocsGettingStartedHeading, this.DocsGettingStartedVideo];
    }

    public async switchToWebviewContext() {
        const contexts = await driver.getContexts();
        const webviewContext = contexts.find(context => {
            if (typeof context === 'string') {
                return context.includes('WEBVIEW');
            }

            if ('id' in context && typeof context.id === 'string') {
                return context.id.includes('WEBVIEW');
            }

            if ('name' in context && typeof context.name === 'string') {
                return context.name.includes('WEBVIEW');
            }

            return false;
        });
        if (!webviewContext) {
            throw new Error('Could not find any active Webview context');
        }
    }

    public async switchToNativeContext() {
        await driver.switchContext('NATIVE_APP');
    }
}

export default new WebScreen();
