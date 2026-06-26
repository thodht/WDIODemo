import { $ } from '@wdio/globals';
import Screen from '../screens/screen.ts';
import { AndroidFormsScreenLocators } from '../locators/android/forms.screen.locators';
import { IOSFormsScreenLocators } from '../locators/ios/forms.screen.locators';

export class FormsScreen extends Screen {

    private get FormsScreenLocators() {
        return driver.isAndroid ? AndroidFormsScreenLocators : IOSFormsScreenLocators;
    }

    private get InputField() {
        return $(this.FormsScreenLocators.inputField);
    }

    private get InputResult() {
        return $(this.FormsScreenLocators.inputResult);
    }

    private get Switch() {
        return $(this.FormsScreenLocators.switch);
    }

    private get Dropdown() {
        return $(this.FormsScreenLocators.dropdown);
    }

    private get DropdownOptions() {
        return $$(this.FormsScreenLocators.dropdownOptions);
    }

    private get ActiveButton() {
        return $(this.FormsScreenLocators.activeButton);
    }

    private get OkButton() {
        return $(this.FormsScreenLocators.okButton);
    }

    public get FormsScreenElements() {
        return [this.InputField, this.InputResult, this.Switch, this.Dropdown, this.ActiveButton];
    }

    public async fillTheForm(inputText: string, expectedState: boolean, index: number) {
        await this.InputField.setValue(inputText);
        await expect(this.InputResult).toHaveText(inputText);
        if (expectedState !== await this.Switch.isSelected()) await this.Switch.click();
        await this.Dropdown.click();
        const choiceCount = await this.DropdownOptions.length;
        if (index < 0 || index >= choiceCount) {
            throw new Error(`Index is out of range, there are only ${choiceCount} options!`);
        }
        await this.DropdownOptions[index].click();
        await this.ActiveButton.click();
        //await driver.pause(3000);
        await this.OkButton.click();
        //await driver.pause(3000);
    }
}

export default new FormsScreen();