class HomeScreen {
    get #enterStoreAddress(){
        return $('id:button_login_store')
    }
    get #skipToContinue(){
        return $('id:button_skip')
    }
    async goToLogin(){
        this.#enterStoreAddress.click()
    }
    async skipToContinue(){
        await this.#skipToContinue.click()
    }
}

module.exports = new HomeScreen()