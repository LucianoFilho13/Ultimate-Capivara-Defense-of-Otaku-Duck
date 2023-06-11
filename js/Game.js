class Game{
    constructor(){
        this.openShopButton = createButton("Loja")
        this.moneyText = createElement('h4')
        this.moneyText.html("$ " + moneyGame)

        this.shopScreen = null
        this.settingsScreen = null

        screenState = "Game"

        this.openSettigsButton = createButton("Configurações")

        this.setElementsPosition()
        this.setElementsStyle()
        this.handleMousePressed()
    }

    handleMousePressed(){
        this.openShopButton.mousePressed(() => {
            this.shopScreen = new ShopScreen()
            this.hide()
        })

        this.openSettigsButton.mousePressed(() => {
            this.settingsScreen = new Settings()
            this.hide()
        })
    }

    setElementsPosition(){

    }

    setElementsStyle(){
        this.moneyText.class("moneyText")
        this.openSettigsButton.class("settingsButton")
    }

    hide(){
        this.openShopButton.hide()
        this.openSettigsButton.hide()
    }
}