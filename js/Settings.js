class Settings{
    constructor(){
        this.titleSettings = createElement("h1")
        this.titleSettings.html("Configurações")

        this.musicVolumeDisplayText = createElement("h4")
        this.musicVolumeDisplayText.html("Volume da música")
        this.soundVolumeSliderButton = createSlider(0, 1, 0.5, 0.1)

        this.effectSoundDisplayText = createElement("h4")
        this.effectSoundDisplayText.html("Volume do efeito sonoro")
        this.effectSoundVolumeSliderButton = createSlider(0, 1, 0.5, 0.1)

        this.effectSoundsDisplayButton = createCheckbox("Efeitos sonoros", true)
        this.musicDisplayButton = createCheckbox('Música', true)

        this.creditsDisplayButton = createButton("Créditos")

        this.backHomeScreenButton = createButton("Voltar")

        this.homeScreenPage = null
        this.creditsScreenPage = null
        settingIsOpen = true

        screenState = "Settings"

        this.version = createElement('h6')
        this.version.html("Versão Alpha 0.0.1")
        
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
            settingIsOpen = false
        })

        this.creditsDisplayButton.mousePressed(() => {
            soundClicked.play()
            this.hide();
            this.creditsScreenPage = new CreditsScreen()
            settingIsOpen = false
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

        this.musicVolumeDisplayText.hide();
        this.soundVolumeSliderButton.hide();
        this.effectSoundDisplayText.hide();
        this.effectSoundVolumeSliderButton.hide();

        this.version.hide();
    }

    display(){
        this.handleMousePressed();
    }
}