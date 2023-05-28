class ShopScreen {
    constructor(){
        this.titleShop = createElement("h1")
        this.titleShop.html("Loja")

        this.towerBasic = null

        this.capivaraBaseButton = createButton("Capivara Base")
        //this.settingsButton = createButton("Configurações")
        //this.soundButton = soundClicked
        

        this.setElementsPosition();
        this.handleMousePressed()
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
        this.capivaraBaseButton.position(0,0)
    }

    // setTowerPosition(){
    //     this.towerBasic.towerSprite.x = mouseObject.x
    //     this.towerBasic.towerSprite.y = mouseObject.y
    // }

    display(){
        this.handleMousePressed()
    }
}