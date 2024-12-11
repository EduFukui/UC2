const readline = require('readline-sync');

let dia = String(readline.questionInt("Dia: "))
let mes = String(readline.questionInt("Mes: "))
let ano = String(readline.questionInt("Ano: "))

console.log(`${dia}/${mes}/${ano}`)