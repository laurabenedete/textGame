const Personagem = require("./personagem");

class Vilao extends Personagem{

  constructor(vida, nome, seguidores, poder){
    super(vida);
    this.nome = nome;
    this.seguidores = seguidores;
    this.poder = poder;
  }

status(){
      console.log();
      console.log(`Nome: Malachai`);
      console.log(`Pontos de vida:  ${this.vida}%`);
      console.log(`Seguidores: ${this.seguidores}`);
      console.log();
  }
  
aumentarSeg(seguidores){
  console.log("Necromancia avançada utilizada, novos seguidores se juntaram")
  this.seguidores += seguidores;
}
  
  atacar(){
      return Math.floor(Math.random() * this.vida);
  }

  defender(golpe){
      this.vida -= golpe;
  }

  ataqueEsp(poder){
      return this.poder;
  }

}

module.exports = Vilao