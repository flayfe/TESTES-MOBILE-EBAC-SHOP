const homeScreen = require("../screens/home.screen");

describe('Acess Admin Panel', () => {
    it('Shoud login with valid credentials', async () => {
        await homeScreen.goToLogin()
        expect(await $('id:textinput_placeholder')).toBeDisplayed()
    })
})