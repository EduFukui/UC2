const readline = require('readline-sync');

console.log()
let number = readline.question ("Qual a tabuada que voce deseja ver? ")
console.log()

let tabua = 1

while (tabua <= 10) {
    
    console.log(`${number} x ${tabua} = ${tabua*number}`)
    tabua ++
}
console.log()


