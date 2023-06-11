class HomeScreen {
    constructor(){
        this.titleGame = createElement("h1")
        this.titleGame.html("Ultimate Capivara Defense of Otaku Duck")

        this.settingsPage = null
        this.shopPage = null

        this.playButton = createButton("Jogar")
        this.settingsButton = createButton("Configurações")
        this.soundButton = soundClicked

        screenState = "Home"
        
        this.handleMousePressed();
    }

    setElementsPosition(){

    }

    setElementsStyle(){
        
    }

    handleMousePressed(){
        this.playButton.mousePressed(() => {
            soundClicked.play()
            this.hide();
            this.shopPage = new ShopScreen()
            settingCanOpen = true
            
        })

        this.settingsButton.mousePressed(() => {
            soundClicked.play()
            this.hide();
            this.settingsPage = new Settings()
            
        })
    }

    hide(){
        this.titleGame.hide();
        this.playButton.hide();
        this.settingsButton.hide();
    }

    display(){
        this.handleMousePressed();
    }
}