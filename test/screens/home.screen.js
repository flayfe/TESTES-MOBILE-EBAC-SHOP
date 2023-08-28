class HomeScreen {
    get #enterStoreAddress(){
        return $('id:button_login_store')
    }
<<<<<<< HEAD
    get #skipToContinue(){
        return $('id:button_skip')
    }
    async goToLogin(){
        this.#enterStoreAddress.click()
    }
    async skipToContinue(){
        await this.#skipToContinue.click()
    }
=======
    async goToLogin(){
        this.#enterStoreAddress.click()
    }
>>>>>>> 38ddc3513c11f3cc40b740a62d14d9e32c398a3d
}

module.exports = new HomeScreen()