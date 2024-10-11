const readline = require('readline-sync');
console.log()
let numero = Number(readline.question("Escolha um numero de 1 a 3. "))

switch (numero) { 
case 1 : console.log("Você escolheu Red Dead Redemption 2")
break
case 2 : console.log("Você escolheu The Elder Scrolls V. Skyrin")
break
case 3 : console.log("Você escolheu Mass Effect 3")
break
default: console.log("Jogo não encontrado")
}
console.log()