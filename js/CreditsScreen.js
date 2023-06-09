class CreditsScreen{
    constructor(){
        this.titleCreditsScreen = createElement('h1')
        this.titleCreditsScreen.html("Créditos")

        this.creditsGame = createElement('h3')
        this.creditsGame.html("Jogo criado por:")
        this.credits = createElement('h4')
        this.credits.html("y0kata")

        this.backCreditsScreenButton = createButton("Voltar")
        this.settingsScreen = null
        this.handleMousePressed()
    }

    handleMousePressed(){
        this.backCreditsScreenButton.mousePressed(() => {
            this.hide()
            this.settingsScreen = new Settings()
        })
    }

    hide(){
        this.titleCreditsScreen.hide();
        this.creditsGame.hide();
        this.credits.hide();
        this.backCreditsScreenButton.hide();
    }
}