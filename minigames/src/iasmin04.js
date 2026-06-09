// ATIVIDADE
import Leia from 'readline-sync'

//ENTRADA
var celcius = Leia.questionFloat("Digite a temperatura em grau Celcius: ")

var farehaint = (celcius * 1.8) + 32;
var kelvin = celcius + 273.15;

//SAÍDA 
console.log(celcius + "graus celsius é igual a " + farehaint + "graus farehaint.");
console.log(celcius + "graus celsius é igual a " + kelvin + "graus kelvin.");





