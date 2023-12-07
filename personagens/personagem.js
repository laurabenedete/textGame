class Personagem{

  constructor(vida){
   this.vida = parseInt(vida)   
  }

  atacar(){
    console.log("Atacou!!");
  }

  defender(){
    console.log("Defendeu!")
  }

}

module.exports = Personagem