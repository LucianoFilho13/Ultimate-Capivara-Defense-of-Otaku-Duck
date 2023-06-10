class Game{
    constructor(){
        this.openShopButton = createButton("Loja")

        this.shopScreen = null
        this.openShop()
    }

    openShop(){
        this.openShopButton.mousePressed(() => {
            this.shopScreen = new ShopScreen()
            this.hide()
        })
        
    }

    hide(){
        this.openShopButton.hide()
    }
}