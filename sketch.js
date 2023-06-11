// Kit Inicial Visual Studio Code
// y0kata(Tragictx) / LucianoFilho13
// Variaveis
var inventory, moneyGame;
var soundClicked, soundClick;
var musicState, effectSoundsState, settingIsOpen, settingCanOpen;
var mouseObject;
var varTowerState;
var screenState

function preload(){ // Carregar imagens, gifs, sons/musica e videos
  soundClicked = loadSound('./assets/sounds/soundClicked.mp3');
}

function setup(){ // Setar valores iniciais
  createCanvas(1200,600);
  moneyGame = 520
  mouseObject = createSprite(mouseX, mouseY, 10,10)

  towerClass = new TowerBasic()
  //shopScreen = new ShopScreen()
  homeScreen = new HomeScreen()

  inventory = []
  musicState = true
  effectSoundsState = true
  settingIsOpen = false
  settingCanOpen = false
  screenState = "Home"
  //soundClick.addSound(soundClicked)

}

function draw(){ // Aparecer as informações na tela
  background("cyan"); // Cor do fundo
  drawSprites(); //Responsavel em renderizar o jogo(sprites)
  mouseObject.x = mouseX
  mouseObject.y = mouseY

  // fill('green')
  // text("$ " + moneyGame, 60,60)

  this.homeScreen.display()
  // this.shopScreen.display()
  this.towerClass.display()
  // this.towerBasic.display()

  //towerBasic.rangeState()
  // console.log("Sistema aberto:" + settingIsOpen)
  // console.log("Sistema pode ser aberto:" + settingCanOpen)
  // console.log(screenState)

  allFunction(); //Função de todas as funções
}

//Funções
function allFunction(){
  //Insira as funções aqui
  function keyTyped(){
    if (keyCode === 27 && settingIsOpen === false && settingCanOpen === true){
      this.settingsScreen = new Settings()
      settingIsOpen = true
    }
    
  }

  //Chamar Funções
  // keyTyped();
}