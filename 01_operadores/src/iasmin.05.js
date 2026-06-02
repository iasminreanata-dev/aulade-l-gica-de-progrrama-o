import Leia from 'readline-sync'

//atividade

//ENTRADA
var altura = Leia.question("DIGITE A ALTURA DO RETÂNGULO");
var largura = Leia.question("DIGITE A LARGURA DO RETÂNGULO");

//PROCESSAMENTO
var area = altura * largura;

//SAIDA
console.log("A AREA DO RETANGULO É: " + area.toFixed(2));


