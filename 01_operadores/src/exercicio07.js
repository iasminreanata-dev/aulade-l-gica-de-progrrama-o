import leia from 'readline-sync'

var valorProduto = leia.questionFloat("DIGITE O VALOR DO PRODUTO: ");

  if(valorProduto < 20) { 
  var valorFinal = valorProduto + (valorProduto * (45 / 100));
  console.log("VALOR FINAL DO PRODUTO É: R$" + valorFinal.toFixed(2));
  } else {
   var valorFinal = valorProduto + (valorProduto * (30/ 100));
   console.log("VALOR FINAL DO PRODUTO É: R$"  )
  }


















