alert("Mensagem de hello!");

var objeto = document.getElementById("campoTela");

objeto.innerHTML= "Alterando o campo na tela para Hello Teste";

var a = 1;

var b = 2;

var c = 'TESTE';

console.log(a + c + b); //1TESTE2

console.log(a + b + c); //3TESTE

console.log(c + a + b); //TESTE12

console.log(c + (a + b)); //TESTE3

console.log(a.toString() + b.toString()); //12

console.log(c - a); //NaN