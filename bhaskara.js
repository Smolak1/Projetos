import input from 'readline-sync';

let a = input.questionInt(`A: `)
let b = input.questionInt(`B: `)
let c = input.questionInt(`C: `)

let bNegativo = b * -1
let bQuadrado = Math.pow(b, 2)
let calc2P = -4 * a * c
let calc1P = bQuadrado + calc2P
let divisao = 2 * a
let calc3 = Math.sqrt(calc1P)
let calcX = (bNegativo + calc3) / divisao
let calcY = (bNegativo - calc3) / divisao

console.log(`
S={${calcX},${calcY}}.`)
