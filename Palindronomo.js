function inverter(palavra){

let palavraLimpa = palavra.replace(/[^a-zA-Z]/g, '').toLowerCase()
let palavraInvertida = palavraLimpa.split('').reverse().join('')

if(palavraInvertida == palavraLimpa){

    console.log(`${palavra} é um palindromo`)}
    else {



        console.log(`${palavra} não é um palindromo`)

        
}
}


inverter("ararara")