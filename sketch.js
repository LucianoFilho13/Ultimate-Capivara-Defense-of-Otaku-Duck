// Kit Inicial Visual Studio Code
// y0kata(Tragictx) / LucianoFilho13
// Variaveis
var inventory, moneyGame;
var soundClicked, soundClick;
var musicState, effectSoundsState, settingIsOpen, settingCanOpen;
var mouseObject;
var varTowerState;
var screenState;
var towerArquive, enemyArquive;

function preload(){ // Carregar imagens, gifs, sons/musica e videos
  soundClicked = loadSound('./assets/sounds/soundClicked.mp3');
}

function setup(){ // Setar valores iniciais
  createCanvas(1200,600);
  moneyGame = 520
  mouseObject = createSprite(mouseX, mouseY, 10,10)

  towerClass = new TowerBasic()
  homeScreen = new HomeScreen()

  towerArquive = ("./json/towerArquive.json")
  enemyArquive = ("./json/enemyArquive.json")

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

  this.homeScreen.display()
  this.towerClass.display()
  
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