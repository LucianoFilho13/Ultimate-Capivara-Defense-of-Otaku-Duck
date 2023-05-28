class TowerBasic {
    constructor(classTower){
        this.classTower = classTower
    //Propriedades básicas e obrigatórias de uma torre
        this.nameTower = null
        this.typeTower = null
        this.towerRange = null //5
        this.towerDamage = null //1
        this.towerPrice = null //100
        this.cooldownTower = null //3
        this.nvMax = null //4

    //Tower estado
        this.towerState = "Não Colocado"

        this.nvTower = 1

        this.towerSprite = createSprite(null,null,40,40)
        this.rangeSprite = createSprite(this.towerSprite.x, this.towerSprite.y, 150, 150)
        this.rangeSprite.shapeColor = 'yellow'
        this.towerSprite.depth = this.rangeSprite.depth +1

        this.verificyTypeTower()
        this.verificyStateTower()
    }

    verificyStateTower(){
        if (this.towerState === "Não Colocado"){
            this.towerSprite =  null
        }
        if (this.towerState === "Colocando"){
            this.towerSprite = createSprite(mouseObject.x,mouseObject.y,40,40)
            
        }
        if (this.towerState === "Colocado"){
            this.towerSprite = createSprite(mouseObject.x,mouseObject.y,40,40)
        }
    }

    verificyTypeTower(){
        if (this.classTower === "capivara_basica"){
            this.nameTower = "Capivara Básica"
            this.typeTower = "ground"
            this.towerRange = 5
            this.towerDamage = 1
            this.towerPrice = 100
            this.cooldownTower = 3
            this.nvMax = 4 //4
        }
    }

    nvState(){
        switch(this.nvTower){
            case 1:
                this.towerPrice = 100
                this.towerDamage  = 1
                this.towerRange = 5
                this.cooldownTower = 3
            break;

            case 2:
                this.towerPrice = 210
                this.towerDamage  = 2
                this.towerRange = 5
                this.cooldownTower = 3
            break;

            case 3:
                this.towerPrice = 505
                this.towerDamage  = 3
                this.towerRange = 6
                this.cooldownTower = 3
                this.nameTower = 'Capivara Treinada'
            break;

            case 4:
                this.towerPrice = 610
                this.towerDamage  = 5
                this.towerRange = 6
                this.cooldownTower = 2
                this.nameTower = 'Capivara Treinada'
            break;
        }

    }

    rangeState(){
        switch(this.towerRange){
            case 5:
                this.rangeSprite.width = 150
                this.rangeSprite.height = 150
                this.rangeSprite.shapeColor = 'red'
            break;

            case 6:
                this.rangeSprite.width = 200
                this.rangeSprite.height = 200
                this.rangeSprite.shapeColor = 'blue'
            break;
            
        }

        
    }

    display(){
        this.nvState();
        this.rangeState();
        this.verificyStateTower()
        
    }
}