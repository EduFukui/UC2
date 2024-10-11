// importando o readline sync
const readline = require('readline-sync');

// exemplo; pedir nome
console.log()

let nome = readline.question ("Qual o seu nome? ")
let sobrenome = readline.question("Qual o seu sobrenome? ")

console.log(`Olá, ${nome} ${sobrenome}. Tudo bem com você?`)

console.log()
