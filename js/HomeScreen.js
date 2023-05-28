class HomeScreen {
    constructor(){
        this.titleGame = createElement("h1")
        this.titleGame.html("Super Tower Defense")

        this.settingsPage = null

        this.playButton = createButton("Jogar")
        this.settingsButton = createButton("Configurações")
        this.soundButton = soundClicked
        
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