class ShopScreen {
    constructor(){
        this.titleShop = createElement("h1")
        this.titleShop.html("Loja")

        this.towerBasic = null

        this.capivaraBaseButton = createButton("Capivara Básica")
        this.capivaraAvancadaButton = createButton("Capivara Avancada")
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
    }

    buyTower(){
        if (moneyGame >= 100){
            this.towerBasic = new TowerBasic("capivara_basica")
            this.towerBasic.towerState = "Colocando"
            this.towerBasic.display()
            moneyGame -= this.towerBasic.towerPrice
            
        }
    }

    setElementsPosition(){
        this.titleShop.position(50, 30)
        this.capivaraBaseButton.position(50, 120)
        this.capivaraAvancadaButton.position(50, 140)
    }

    setElementsStyle(){
        this.titleShop.class("shopScreen titleShop")
        this.capivaraBaseButton.class("shopScreen capivaraBuyBtn")
        this.capivaraAvancadaButton.class("shopScreen capivaraBuyBtn")
    }

    // setTowerPosition(){
    //     this.towerBasic.towerSprite.x = mouseObject.x
    //     this.towerBasic.towerSprite.y = mouseObject.y
    // }

    display(){
        this.handleMousePressed()
    }
}