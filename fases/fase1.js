const readline = require('readline-sync');
const Vilao = require("../personagens/vilao");

function lutar(heroi){
   console.log()
   console.log(`${heroi.nome} Lute contra a magia das sombras!`);
   console.log()
    const vilao = new Vilao(100,50,50);

    while(heroi.vida > 1 && vilao.vida > 1){
        vilao.defender(heroi.atacar());
        heroi.defender(vilao.atacar());
        console.log(`Vida da ${heroi.nome}: ${heroi.vida}`);
        console.log(`Vida do Malachai: ${vilao.vida}`);
        console.log();
    }
    if(heroi.vida < 1){
        console.log("Malachai venceu");
        return false;
    }else{
        console.log(`${heroi.nome} venceu`);
        return true;
    }
}

module.exports = (heroi) => {
    let luta = false;

    console.log(`Enquanto ${heroi.nome} desbrava a floresta, um arrepio percorre o ambiente, anunciando a chegada do vilão Malachai Darksoul.O vento sussurra seu nome e sombras se contorcem, criando uma silhueta ameaçadora diante dela.`);
  console.log();
    console.log(`De repente, emerge das sombras um corvo negro, transformando-se na figura sinistra de Malachai, um feiticeiro necromante com olhos ardentes de ambição desenfreada.`);
    console.log();
    console.log(`Seu riso ecoa entre as árvores, marcando o início de um confronto iminente, onde ${heroi.nome} enfrentará as trevas encarnadas em seu caminho.`);
  console.log();

    if(readline.question("Aparentemente ele quer briga, deseja lutar? S - sim ou N - não ").toUpperCase() == "S"){
      console.log();
        console.log(`Prepare-se, as trevas se aproximam.`);
        luta = lutar(heroi);
    }else{
        console.log(`Enquanto ${heroi.nome}, sentindo-se sobrecarregada pelo poder tenebroso de Malachai, decide afastar-se estrategicamente da luta, ela se mergulha nas sombras em busca de refúgio.`);
      console.log();
        console.log(`Contudo, a astúcia do vilão se manifesta quando, com olhos ardentes de malícia, Malachai percebe a fugitiva elfa e, com um gesto sinistro, revela sua presença diante dela.`);
      console.log();
      console.log(`As sombras que serviram de refúgio se dissipam, e ${heroi.nome} se encontra face a face com o necromante, não tem mais volta, ela terá de enfrentar as trevas encarnadas em seu caminho..`);
      console.log();
        luta = lutar(heroi);
    }

    if(luta){
        heroi.restaurar();
        heroi.depositar(50);
        console.log(`PARABENS ${heroi.nome}! Nas sombras da adversidade, você emergiu como uma verdadeira mestra das sombras.`);
        heroi.status();
        return true;
    }else{
        return false;
    }
}