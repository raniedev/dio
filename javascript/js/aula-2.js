// DESENVOLVA PÁGINAS WEB COM JAVASCRIPT--------------------------------------------------------------------------------

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Japão!", "Japão", "Brasil"));

var validar = false; //variável global
function validaIdade(idade) {
    var validar; //variável local
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = 22;
console.log(validaIdade(idade));
console.log(validar);

// MANIPULANDO ELEMENTOS DA PÁGINA--------------------------------------------------------------------------------------

var site = "google";
var site_2 = "youtube";
var dominio = ".com";

function botao() {
    document.getElementById("mostrar").innerHTML = "Clique no texto para acessar " + site + " em uma aba diferente.";
}

function redirecionar() {
    window.open("https://www." + site + dominio); //nova janela
}

function botao_2() {
    document.getElementById("mostrar-2").innerHTML = "Clique no texto para acessar " + site_2 + " na mesma página.";
}

function redirecionar_2() {
    window.location.href = "https://www." + site_2 + dominio; //mesma janela
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "É biscoito e não bolacha.";
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse para revelar um segredo";
}

