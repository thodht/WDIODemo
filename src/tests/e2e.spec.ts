//import Toolbar from '../screens/toolbar.ts';
//import Users from '../data/users.json';
//import HomeScreen from '../screens/home.screen.ts';
//import WebScreen from '../screens/web.screen.ts';
//import LoginScreen from '../screens/login.screen.ts';
//import FormsScreen from '../screens/forms.screen.ts';
//import SwipeScreen from '../screens/swipe.screen.ts';
//import DragScreen from '../screens/drag.screen.ts';
import Menu from '../screens/menu.ts';

describe('My WebdriverIO demo app', () => {
    /**it('Load the home screen', async () => {
        await HomeScreen.validateScreenElements(HomeScreen.screenElements);
    });*/

    /**it('Web screen testing', async () => {
        await Toolbar.clickWebButton();
        await WebScreen.validateSpash();
        await WebScreen.validateScreenElements(WebScreen.IOScreenElements);
        await WebScreen.clickHamburgerButton();
        await WebScreen.clickMenuDocs();
    });*/

    /**it('Login with valid credentials', async () => {
        await Toolbar.clickLoginButton();
        await LoginScreen.validateScreenElements(LoginScreen.screenElements);
        await LoginScreen.login(Users.valid.username, Users.valid.password, Users.valid.expectedMessage);
        await ToolBar.clickFormsButton();
    });*/

    /**it('Fill the form and submit', async () => {
        await Toolbar.clickFormsButton();
        await FormsScreen.validateScreenElements(FormsScreen.FormsScreenElements);
        await FormsScreen.fillTheForm('input text', true, 3);
    });*/

    /**it('Look for 4th card and the robot', async () => {
        await Toolbar.clickSwipeButton();
        await SwipeScreen.scrollToFourthCard();
        await SwipeScreen.scrollToRobot();
    });*/

    /**it('Drag the robot images', async () => {
        await Toolbar.clickDragButton();
        await DragScreen.solvePuzzle();
        await driver.pause(3000);
    }); */
    
    it('Test the menu panel', async() => {
        await Menu.openHomeScreen();
        await Menu.openWebviewScreen();
        await Menu.openLoginScreen();
        await driver.pause(3000);
    })
})

