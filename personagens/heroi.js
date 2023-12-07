const Personagem = require("./personagem");

class Heroi extends Personagem{
  moedas = 0

  constructor(vida, nome, fome, energia, moral){
    super(vida);
    this.nome = nome;
    this.fome = fome;
    this.energia = energia;
    this.moral = moral;
  }
  status(){
      console.log();
      console.log(`Nome:  ${this.nome}`);
      console.log(`Pontos de vida:  ${this.vida}%`);
      console.log(`Fome:  ${this.fome}%`);
      console.log(`Energia Mágica: ${this.energia}%`);
      console.log(`Moral: ${this.moral}%`);
      console.log(`Moedas: C$ ${this.moedas}`);
      console.log();
  }
      alimentar(fome, vida){
          this.fome += fome;
          this.vida += vida;
      }

      treinar(energia){
          this.energia += energia;
      }
    ntreinar(energia){
      this.energia -= energia;
    }

     positivos(moral){
      this.moral += moral;
      }

      depositar(moedas){
          this.moedas += moedas;
      }

      sacar(moedas){
          this.moedas -= moedas;
      }

      restaurar(){
          this.vida = 100;
          this.fome = 100;
          this.energia = 100;
          this.moral = 100
      }

      restaurarVida(vida){
          this.vida += vida;
      }
  perderVida(vida){
      this.vida -= vida;
  }

  atacar(){
     return Math.floor(Math.random() * (this.vida + this.energia));
  }
  defender(golpe){
      this.vida -= golpe;
      this.energia -= golpe;
  }
  }

module.exports = Heroi