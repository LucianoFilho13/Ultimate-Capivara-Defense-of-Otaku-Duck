class ShopScreen {
    constructor(){
        this.titleShop = createElement("h1")
        this.titleShop.html("Loja")

        this.towerBasic = null
        this.selectTower =  null
        this.openShopScreen = null
        this.game = null

        this.capivaraBaseButton = createButton("Capivara Básica")
        this.capivaraAvancadaButton = createButton("Capivara Avancada")

        this.closeButton = createButton("Fechar")

        screenState = "Shop"
        
        //this.settingsButton = createButton("Configurações")
        //this.soundButton = soundClicked
        

        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
        this.display();
    }

    handleMousePressed(){
        this.capivaraBaseButton.mousePressed(() => {
            //soundClicked.play()
            this.buyTower()
        })
        this.closeButton.mousePressed(() => {
            this.hide()
            this.game = new Game()
        })
        
    }

    buyTower(){
        if (moneyGame >= 100){
            this.towerBasic = new TowerBasic("capivara_basica")
            this.towerBasic.towerSprite.x = mouseObject.x
            this.towerBasic.towerSprite.y = mouseObject.y
            this.towerBasic.towerState = "Colocando"
            this.towerBasic.display()
            // this.hide()
            moneyGame -= this.towerBasic.towerPrice
            
        }
    }

    setElementsPosition(){
        this.titleShop.position(50, 30)
        this.capivaraBaseButton.position(50, 120)
        this.capivaraAvancadaButton.position(50, 140)
        this.closeButton.position(50, 550)
    }

    setElementsStyle(){
        this.titleShop.class("shopScreen titleShop")
        this.capivaraBaseButton.class("shopScreen capivaraBuyBtn")
        this.capivaraAvancadaButton.class("shopScreen capivaraBuyBtn")
        this.closeButton.class("shopScreen closeShopButton")
    }

    hide(){
        this.titleShop.hide()
        this.capivaraBaseButton.hide()
        this.capivaraAvancadaButton.hide()
        this.closeButton.hide()
    }
    

    display(){
        this.handleMousePressed()
    }
}