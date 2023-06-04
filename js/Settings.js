class Settings{
    constructor(){
        this.titleSettings = createElement("h1")
        this.titleSettings.html("Configurações")

        this.musicDisplayButton = createCheckbox('Música', true)
        this.effectSoundsDisplayButton = createCheckbox("Efeitos Sonoros", true)

        this.creditsDisplayButton = createButton("Créditos")

        this.backHomeScreenButton = createButton("Voltar")

        this.homeScreenPage = null
        
        this.handleMousePressed();
    }

    setElementsPosition(){

    }

    setElementsStyle(){
        this.titleSettings.class("titleSettings")
        this.backHomeScreenButton.class("backHomeScreenButton")
    }

    handleMousePressed(){
        this.backHomeScreenButton.mousePressed(() => {
            soundClicked.play()
            this.hide();
            this.homeScreenPage = new HomeScreen()
        })

        this.musicDisplayButton.mousePressed(() => {
            if (this.musicDisplayButton.checked()) {
                musicState = false
            } else {
                musicState = true
            }
        })
        
        this.effectSoundsDisplayButton.mousePressed(() => {
            if (this.effectSoundsDisplayButton.checked()) {
                effectSoundsState = false
            } else {
                effectSoundsState = true
            }
        })
        
    }

    hide(){
        this.titleSettings.hide();
        this.backHomeScreenButton.hide();
        this.musicDisplayButton.hide();
        this.effectSoundsDisplayButton.hide();
        this.creditsDisplayButton.hide();
    }

    display(){
        this.handleMousePressed();
    }
}