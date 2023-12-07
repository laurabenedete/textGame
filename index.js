const readline = require('readline-sync');
const Heroi = require("./personagens/heroi")
const Vilao = require("./personagens/vilao")

const fase1 = require("./fases/fase1");
const fase2 = require("./fases/fase2");
const fase3 = require("./fases/fase3");
const faseFinal = require("./fases/faseFinal");

//APRESENTACAO DO JOGO
console.log("Sombras da Destinação - TEXT GAME");
console.log();
console.log("Bem-vindos a um reino mergulhado em sombras e magia, onde uma elfa Mestra das Sombras, e um feiticeiro necromante, trilham caminhos entrelaçados.");
console.log();
console.log("Em um universo repleto de escolhas, desafios e segredos, suas decisões moldarão o destino destes personagens.");
console.log();
console.log("Preparem-se para uma jornada épica nas sombras da destinação. O que aguarda é incerto, mas a magia aguarda ser desvendada. Avante, aventureiros!");
console.log();
console.log("Precisamos construir seu personagem no qual irá se aventurar por nossos mundos.");
console.log();

//CRIACAO DO PERSONAGEM (HEROI)
const nome = readline.question("Qual será o nome da sua heroína?  ");
const heroi = new Heroi(80, nome, 80, 50, 50);
console.log();
console.log(`Sua heroína foi criada, agora sempre a chamaremos de ${heroi.nome}`);
console.log();
heroi.status();
console.log();

//ENSINA A SE ALIMENTAR
console.log(`Enquanto ${heroi.nome} avança pela floresta enigmática, o aroma sedutor de néctar élfico flutua no ar, revelando uma clareira mágica onde criaturas luminosas dançam sob a luz da lua.`);
console.log();
if(readline.question("deseja consumir o néctar élfico? S - sim ou N - não ").toUpperCase() == "S"){
    console.log(`Néctar élfico, fonte de destemor e graça. Que minha jornada seja tão fluida quanto a dança das sombras sob a lua. disse ${heroi.nome}`);
    heroi.alimentar(5,2);
    heroi.status();
}else if(readline.question("Diante dela, um mercador de raízes da árvore da vida oferece escolhas que transcendem o paladar, prometendo fortalecer seus laços com a natureza. Deseja comê-las? S - sim ou N - não ").toUpperCase() == "S"){
  console.log()
    console.log(`Raízes da Árvore da Vida, fortalecei minha ligação com a terra. Que minha jornada seja tão resistente quanto a mais antiga das árvores. disse ${heroi.nome}`);
    heroi.alimentar(10,5);
    heroi.status();
}else{
  console.log()
    console.log(`Sem se entregar aos alimentos, ${heroi.nome} segue sem ganhos de pontos de vida ou satisfação, e ela avança, confiante na resiliência de sua jornada.`);
  console.log();
  console.log("SEU PERSONAGEM NÃO RESTAUROU FOME OU VIDA!");
}
console.log();

//ENSINA O PERSONAGEM A TER CRESCIMENTO NA ENERGIA MAGICA
console.log(`
Enquanto ${heroi.nome} avança em sua jornada, ela se depara com uma biblioteca escondida, repleta de grimoires antigos encadernados em couro envelhecido. ${heroi.nome} então diz:`);
console.log();
console.log(`"Descubro uma biblioteca antiga, os grimoires empoeirados sussurrando segredos há muito esquecidos. Considero a possibilidade de estudar esses textos antigos para desvendar mais sobre as sombras e aprimorar minha habilidade mágica."`);
console.log();
if(readline.question("Deseja estudar os Antigos Grimoires: S - sim ou N - não ").toUpperCase() == "S"){
    heroi.treinar(10);
    heroi.positivos(10);
    console.log(` "Que essas descobertas me fortaleçam na jornada que se desenrola, pois o conhecimento é minha maior aliada nas sombras da destinação." pensa ${heroi.nome}, que além dos novos conhecimentos também ganhou um aumento de 10 na moral`);
    console.log(`Logo após, ${heroi.nome} seguiu seu caminho.`);
    heroi.status();
}else{
    console.log(`"Os segredos guardados nos pergaminhos permanecerão mistérios para mim." disse ${heroi.nome}.`);

console.log();
console.log(`Então  ${heroi.nome} encontra um mentor sábio, um guardião das artes místicas, disposto a compartilhar ensinamentos sobre o controle refinado de energia.`);
console.log();
if(readline.question("deseja realizar o treinamento de controle de energia? S - sim ou N - não ").toUpperCase() == "S"){
   console.log(`Que essa habilidade recém-descoberta se torne uma aliada inseparável em minha jornada, guiando-me através das sombras com destreza e precisão.`);
    console.log(`O mentor ainda lhe dá de presente 5 moedas para ajudar em sua jornada`);
    heroi.depositar(5);
    heroi.treinar(15);
    heroi.status();
}else{
    console.log(`"Decido seguir adiante sem o treinamento proposto, confiante nas habilidades que já possuo.Que cada passo adiante seja uma lição por si só, moldando-me na medida em que avanço pelas sombras da destinação."`);
  console.log();
    console.log("SEM TREINAMENTOS SEU PERSONAGEM PERDE PONTOS DE ENERGIA MÁGICA");
  heroi.ntreinar(10);
}}

//FIM DA FASE INTRODUTORIA
console.log();
const f1= fase1(heroi);
if(f1){
  const f2 = fase2(heroi);
     if(f2){
        faseFinal(heroi);
      }else{
          fase3(heroi);
       faseFinal(heroi);
      }
  }else{
      console.log("GAME OVER");
  }


