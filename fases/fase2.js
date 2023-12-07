const readline = require('readline-sync');

module.exports = (heroi) => {
console.log(`Após a intensa batalha contra Malachai, ${heroi.nome} sente a exaustão pesar sobre seus ombros e decide buscar uma merecida pausa na cidade mais próxima.`);
console.log(`Guiada por um chamado sutil, ela se encontra diante de uma tenda enigmática, adornada com símbolos antigos e iluminada por uma luz etérea.`);
console.log(`${heroi.nome} foi em direção a tenda e encontrou um alquimista, envolto em um manto de mistério, oferece "Poções da Harmonia" capazes não apenas de curar feridas físicas, mas também de nutrir a alma e saciar a fome espiritual.`);
console.log();
console.log(`"Cada frasco contém não apenas ingredientes, mas também segredos encantados para enfrentar as sombras que ainda se agitam em sua jornada." Disse o alquimista. "Cada frasco custa 10 moedas"`);
console.log(`Sua carteira tem: C$${heroi.moedas}`);
console.log();
if(readline.question("Dejesa comprar a poção misteriosa por 10 moedas? S - sim ou N - não ").toUpperCase() == "S"){
    if(heroi.moedas >= 10){
        heroi.sacar(10);
        heroi.restaurarVida(10);
        heroi.treinar(10);
        heroi.status();
    }else{
        console.log(`O saldo de moedas nao é suficiente para realizar a compra!`);
      console.log();
    }
}else{
  console.log();
    console.log(`"Ah, agradeço pela oferta generosa, mas a última vez que bebi algo mágico, acabei conversando com uma rocha por duas horas" disse ${heroi.nome}.`);
  console.log();
    console.log(`O alquimista então pensa um pouco e puxa de dentro de seu manto um frasco escuro`);
    console.log("Ah, nobre elfa, tenho comigo um presente único: o Elixir da Ética. Este frasco contém a essência de escolhas justas e nobres. Beber dele pode aumentar a sua energia mágica e seus pontos de vida. Mas ele só faz efeito caso a sua moral seja maior que 80, se o brilho da etica nao brilhar em você, perderá 10 pontos de vida A decisão é sua, guardiã da virtude");
  console.log();

if(readline.question("Dejesa tomar o liquido do frasco? S - sim ou N - não ").toUpperCase() == "S"){
    if(heroi.moral >= 80){
        heroi.restaurarVida(10);
        heroi.status();
      console.log();
    }else{
        console.log(`A luz da ética não brilha em você, vá pelo caminho das sombras!`);
      heroi.perderVida(10);
      console.log();
    }
}else{
  console.log();
    console.log(`Achou que tenho vida suficiente para seguir meu caminho, muito obrigada disse ${heroi.nome}.`);
    console.log();
}}
  console.log(`${heroi.nome} acenou para ele e saiu. Buscando compreender as origens do mal que enfrenta, na esperança de trazer uma verdadeira luz às sombras que permeiam sua jornada seguiu o seu caminho.`);
  console.log();
  console.log(`Alguns minutos depois, ${heroi.nome} se deparou com o caminho bifurcado.`);
  console.log(`Seria melhor ir pela direita ou esquerda, pensou ${heroi.nome}.`);
  if(readline.question("Ir pela direita ou esquerda? D - direita ou E - esquerda ").toUpperCase() == "D"){
      console.log(`Pouco depois seguindo a trilha pela direita, ${heroi.nome} encontrou um portal brilhante e entrou...`);
      console.log();
      return true;
  }else{
      console.log(`${heroi.nome} seguiu a trilha pela esquerda e encontrou um mapa que a levou a caminhar por algumas horas em uma jornada sinuosa através de terras sombrias e trilhas esquecidas....`);
      console.log();
      return false;
  }
}
  