const readline = require('readline-sync');

// Exercicio 1
console.log()
let nomeUser = readline.question ("Qual o seu nome? ")
let emailUser = readline.question ("Qual o seu e-mail? ")
console.log(`O e-mail ${emailUser} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUser}!`)
console.log()

// Exercicio 2
// letra a
let comidaFav = ["Sushi","Hamburguer","Pizza","Strogonoff","Temaki"]
console.log(comidaFav)
console.log()

// letra b
console.log("Essas sao minhas comidas preferidas:")
for (let i = 0; i < comidaFav.length; i++) {console.log(comidaFav[i])}
console.log()

// letra c
let suaComida = readline.question ("Qual sua comida favorita? ")
comidaFav.splice (1,1,suaComida) 
console.log(comidaFav)
console.log()

// Exercicio 3
// letra a

let listaDeTarefas = []

// letra b
let suasTarefas1 = readline.question ("Me diga 1 tarefa que voce precisa realizar: ")
console.log()
let suasTarefas2 = readline.question ("Me diga outra tarefa que voce precisa realizar: ")
console.log()
let suasTarefas3 = readline.question ("Me diga mais uma tarefa que voce precisa realizar: ")
console.log()
listaDeTarefas.push (suasTarefas1)
listaDeTarefas.push (suasTarefas2,suasTarefas3)

// letra c 
console.log(listaDeTarefas)
console.log()

// letra d
let suasTarefasRealizadas = readline.question ("Digite um numero de 1 a 3 para a tarefa que voce ja realizou: \n ")
console.log()

// letra e
const indice = suasTarefasRealizadas-1
listaDeTarefas.splice(indice,1)

// letra f
console.log(listaDeTarefas)