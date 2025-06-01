import input from 'readline-sync';
console.clear()
let a = input.questionInt(`A: `)
let b = input.questionInt(`B: `)
let c = input.questionInt(`C: `)
let bNegativo = b * -1
let bQuadrado = Math.pow(b, 2)
let calc2P = -4 * a * c
let calc1P = bQuadrado + calc2P
let divisao = 2 * a
let calc3 = Math.sqrt(calc1P)
if (Number.isNaN(calc3)){console.log(`Sem Raiz.`)}else{
let somaX = bNegativo + calc3
let subY = bNegativo - calc3
let somaXcalc = somaX % divisao
let subYcalc = subY % divisao
let calcX;
let calcY;
    if(somaXcalc == 0){calcX = somaX / divisao}
    else {calcX = `${somaX}/${divisao}`}

    if(subYcalc == 0){
calcY = subY / divisao}
    else {calcY = `${subY}/${divisao}`}

        if (calcX == calcY){
          console.log(`Raiz dupla: S={${calcY}}.`)}else {        

console.log(`
S={${calcX},${calcY}}.`)}}
