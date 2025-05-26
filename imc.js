 function imc(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
 }

 console.log(imc(70, 1.75).toFixed(2))