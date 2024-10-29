const readline = require('readline-sync');

console.log()
let pergunta1 = readline.question("Ola, qual o seu nome? ")
console.log()
console.log(`Ola ${pergunta1}, sera que voce esta apto para dirigir.`)
console.log()
let pergunta2 = Number(readline.question(`Qual a sua idade? `))
console.log()
let pergunta3 = readline.question(`Voce tem carteira? `)
console.log()

if (pergunta2 >= 18 && pergunta3.toLowerCase() === "sim") {console.log("Voce pode dirigir, vai na fe.")}
else if (pergunta3.toLowerCase() === "nao" && pergunta2 >= 18) {console.log(" Voce nao tem carteira, mas pode fazer a prova.")}
else {console.log("Voce nao pode dirigir, que pena.")}

console.log()

let pergunta4 = readline.question(`Deseja fazer a prova para tirar sua carteira? `)











/*let pergunta3 = readline.question(`${pergunta1} quer saber alguma tabuada? `)
if (pergunta3.toLowerCase === sim) {let pergunta4 = readline.question(`Qual o numero que deseja ver? `)}
else {console.log("Pena nao poder ajudar.")}*/