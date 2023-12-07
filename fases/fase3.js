const readline = require('readline-sync');

function randomico(){
    const num = Math.floor(Math.random() * 100);
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

module.exports = (heroi) => {

console.log(`Logo a frente ${heroi.nome} avistou um grande espaço aberto.`);
console.log();
console.log(`Ao seguir os sinais mágicos entrelaçados na natureza e ouvir sussurros distantes nas sombras, ${heroi.nome} finalmente chega a um local isolado, onde a energia mágica é palpável. Uma árvore centenária, marcada por símbolos antigos, aponta para uma abertura secreta nas raízes. Ao desvendar o acesso ao santuário oculto, ${heroi.nome} adentra um mundo perdido no tempo, pronto para revelar as verdades enterradas sobre sua linhagem e a profecia que a envolve.`);
console.log();
console.log("Ao olhar pelas paredes, consegue notar escritas de antigos Grimores, que a alertam, o santuário guarda segredos importantes de quem ali é levado, mas o mal que está nas sombras dessas desses segredos pode estar pronto para afetar quem procura demais lá dentro");
console.log();
console.log("A promessa de descobertas profundas, entrelaçadas com sua própria existência, dança diante dela como uma luz misteriosa. No entanto, essa luz também projeta sombras ameaçadoras, sugerindo a possibilidade de revelações que desafiarão não apenas sua compreensão do passado, mas também a aceitação de seu destino.");
console.log();
if(readline.question("Dejesa procurar o que as escritas do santuário querem te mostrar? S - sim ou N - não ").toUpperCase() == "S"){
  console.log();
  console.log(`${heroi.nome} desenterra uma antiga profecia que revela uma ligação ancestral entre sua linhagem e as sombras que Malachai manipula. Essa profecia fala de uma elfa destinada a desafiar as sombras e restaurar o equilíbrio perdido, mas também menciona um dilema existencial: o potencial da elfa para ser consumida pelas mesmas trevas que busca combater.`);
  if(randomico()){
      console.log();
      console.log(`As sombras do passado não podem ser mais obscuras do que a luz que carrego agora. Se este é meu destino, enfrentarei as trevas de frente e moldarei meu próprio caminho. Malachai Darksoul, prepare-se, pois a luz que agora brilha em mim será a sua queda.`);
  }else{
      heroi.defender(50);
      heroi.ntreinar(20)
      console.log();
      console.log(`A escuridão que eu carrego é mais profunda do que imaginava. As trevas envolveram meu ser, e a luz que outrora me guiava agora se desvanece.`);
  }
}
 heroi.status();
console.log();
console.log("As sombras ao seu redor parecem ganhar vida, tecendo-se em um portal etéreo que se desdobra diante dela. Um caminho mágico se revela, conectando-se aos recantos mais obscuros da sua alma, e quando olha ao redor, não está mais no santuário");
}

