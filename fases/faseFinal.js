const readline = require('readline-sync');
const Vilao = require("../personagens/vilao");

module.exports = (heroi) =>  {
 const vilaoreturn = new Vilao(300,50,50);
  vilaoreturn.aumentarSeg(1000);
  vilaoreturn.status();

console.log(`No instante em que Malachai conclui o ritual, seus olhos sombrios encontram os de ${heroi.nome}. Uma faísca intensa de reconhecimento e desafio atravessa o ar carregado de magia.`);
console.log();
console.log(`As trevas ao redor agitam-se, criando um redemoinho de energia sinistra. Num movimento fluido, Malachai avança em direção a ${heroi.nome}, lançando feitiços e sombras, dando início a uma dança mortal entre luz e escuridão.`);
console.log();

function luta(heroi){
let rodada = 1;

while(heroi.vida > 1 &&  vilaoreturn.vida > 1){
    console.log(`rodada - ${rodada}`);
    console.log();
    const dadoVilao = d20();
    const dadoHeroi = d20();
    console.log(`Dado D20 do ${heroi.nome}: ${dadoHeroi}`);
    console.log(`Dado D20 do Malachai: ${dadoVilao}`);
    console.log();
    console.log(`Vida do ${heroi.nome}: ${heroi.vida}`);
    console.log(`Vida do Malachai: ${vilaoreturn.vida}`);
    console.log();
    if(dadoHeroi >= dadoVilao){
      vilaoreturn.defender(heroi.atacar());
    }else{
        heroi.defender(vilaoreturn.atacar());
    }
  readline.question("Aperte o ENTER para próxima rodada! ");
    console.log();
    rodada++;
}
      if(heroi.vida > 1){
          return true;
      }else{
          return false;
      }
  }

  function d20(){
      let num  = Math.floor(Math.random() * 21);
      if(num == 0){
          num += 1;
      }
      return num;
  }
  console.log(`Sem entender completamente a natureza desse fenômeno, ${heroi.nome} é envolvida por uma aura mística, transportando-a instantaneamente para o coração das trevas que ela hesitava em enfrentar.`);
  console.log();
  console.log(`${heroi.nome} se esconde e observa de longe o que está acontecendo no covil de Malachai, onde ele está realizando um ritual`);
  console.log();
  console.log(`Ela então depara-se com um sinistro ritual de necromancia, onde Malachai, envolto em trevas, invoca uma sinfonia de sombras para erguer um exército de seguidores renascidos.`);
  console.log();
  console.log(`Entre velas tremeluzentes e inscrições profanas, criaturas espectralmente revividas emergem, ganhando nova vida com uma energia corrompida. O ar é permeado por uma aura sinistra enquanto Malachai, imerso em sua prática arrepiante, tece o destino de uma batalha iminente.`);

      console.log("Preparece, la vem a luta.");
      if(luta(heroi)){
        console.log("A paz retorna à terra, e as sombras que antes dominavam agora se dissipam, substituídas pela luz radiante que ela trouxe àquele momento crucial.");
          heroi.depositar(1000);
          heroi.restaurar();
          heroi.status();
          console.log("Jogo texto desenvolvido por - Laura Benedete.");
          console.log(" Agradeço por serem companheiros nesta jornada, pela coragem e criatividade que trouxeram a cada decisão. Até a próxima aventura!!");
      }else{
        heroi.status();
          console.log("GAME OVER");
      }
  }
  