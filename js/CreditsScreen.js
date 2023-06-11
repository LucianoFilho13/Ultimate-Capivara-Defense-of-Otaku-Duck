class CreditsScreen{
    constructor(){
        this.titleCreditsScreen = createElement('h1')
        this.titleCreditsScreen.html("Créditos")

        this.creditsGame = createElement('h3')
        this.creditsGame.html("Jogo criado por:")
        this.credits = createElement('h4')
        this.credits.html("y0kata")

        this.linkGitHub = createA('https://github.com/LucianoFilho13','GitHub')
        this.linkGitHub.html('GitHub')

        this.backCreditsScreenButton = createButton("Voltar")
        this.settingsScreen = null
        this.handleMousePressed()

        screenState = "Credits"

        this.setElementsPosition()
        this.setElementsStyle()
    }

    handleMousePressed(){
        this.backCreditsScreenButton.mousePressed(() => {
            this.hide()
            this.settingsScreen = new Settings()
        })
    }

    setElementsPosition(){

    }

    setElementsStyle(){
        this.linkGitHub.class("linkGitHub")
    }

    hide(){
        this.titleCreditsScreen.hide();
        this.creditsGame.hide();
        this.credits.hide();
        this.backCreditsScreenButton.hide();
        this.linkGitHub.hide();
    }
}