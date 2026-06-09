



var idade = 18;
var temCnh = true;

if(idade < 1) {
    console.log("RECÉM NASCIDO")
}else if(idade >= 1 && idade <= 12 ){
    console.log("CRIANÇA")
}else if (idade > 12 && idade < 18) {
    console.log("ADOLECENTE")
}else if(idade >= 18 && idade <= 60) {
    console.log("ADULTO")
}else {
    console.log("IDOSO")
}

var mediaFinal = 6.5;

if(mediaFinal >= 7){
    console.log("EM RECUPERAÇÃO!!")
}else {
    console.log("REPROVADO!!")
}

// SWITH CASE 
var cor = "VERMELHO";
switch (cor) {
    case "VERMELHO":
    console.log("PARE")
    break;
    case "AMARELO":
    console.log("ATENÇÃO")
    break;
    case "VERDE": 
console.log("SIGA")
break;
default:
    console.log("COR INVÁLIDA")
    






}

