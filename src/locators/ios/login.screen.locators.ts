export const IOSLoginLocators = {
    loginTab: '~button-login-container',
    signUpTab: '~button-sign-up-container',
    emailInput: '~input-email',
    passwordInput: '~input-password',
    passwordConfirmInput: '~input-repeat-password',
    loginButton: '~button-LOGIN',
    signUpButton: '~button-SIGN UP',
    dialogMessage: '-ios class chain:**/XCUIElementTypeStaticText[`name == "Success"`]',
    dialogOkButton: '-ios class chain:**/XCUIElementTypeAlert[`name == "Success"`]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeScrollView[2]'
} as const;