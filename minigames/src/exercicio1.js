import leia from 'readline-sync'

var senhaPadrão = "1234";
var senhaUsuario = leia.question("DIGITE SUA SENHA: ");

if(senhaUsuario === senhaPadrão){
    console.log("ACESSO PERMITIDO!!!")
}else{
    console.log("ACESSO NEGADO!!!")
}
