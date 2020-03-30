//Comentário simples: Única Linha

/*
Comentário em bloco: 
Múltiplas 
linhas
*/

//  INTRODUÇÃO AO JAVASCRIPT -------------------------------------------------------------------------------------------


var linguagem = "Javascript";
var anoLancamento = 1995;

console.log("Linguagem: " + linguagem + "\nAno de Lançamento: " + anoLancamento);

var valor_w = 15;
var valor_x = 10;

console.log(valor_w + valor_x);

var valor_y = "15";
var valor_z = "10";

console.log(valor_y + valor_z);


var frase = "Japão é a melhor seleção do mundo.";
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));

var frase_2 = "Portugal possui lindas paisagens.";
console.log(frase_2.toLowerCase());
console.log(frase_2.toUpperCase());


//  ARRAY E DICIONÁRIO -------------------------------------------------------------------------------------------------


var lista = ["maçã", "pera", "laranja"];
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);

lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);

console.log(lista.length);
console.log(lista.reverse());

console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" -> "));

//dicionário
var fruta = {nome: "maracujá", cor: "amarelo"};
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [{nome: "limão", cor: "verde"}, {nome: "morango", cor: "vermelho"}];
console.log(frutas[0].nome);
console.log(frutas[0].cor);
console.log(frutas[1].nome);
console.log(frutas[1].cor);


// CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE -----------------------------------------------------------------------------


var idade = 18;

if (idade >= 18) {
    console.log("Maior de idade.");
} else {
    console.log("Menor de idade.");
}

var count = 0;

while (count <= 5) {
    console.log(count);
    count++;
}

var count_2;

for(count_2 = 0; count_2 <= 5; count_2++){
    console.log(count_2);
}

var d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getMonth() + 1); //Começa do zero
console.log(d.getUTCFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());