const readline = require("readline-sync");

const racaCao = ["","Pitbull", "Pinscher", "Bulldog", "Rottweiler" , "Dachshund"]

console.log()
let perg1 = Number(readline.question("Escolha um numero de 1 a 5. "))
console.log()
console.log(racaCao[perg1-1])
console.log()

//