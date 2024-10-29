//Arrays sao listas de elementos

const listaDeCompras = []; // este esta vazio

const listaDeNomes = ["Leo" , "Eduardo", "nicolas"]

const listaDeNumeros = [10,15,20]

const listaDeBooleasn = [true,false,true]


// imprime trudo oq tem dentro do array
console.log(listaDeNumeros)


// para adicionar um item ao finl do array
listaDeCompras.push("Pão")
listaDeCompras.push("Nata")
listaDeCompras.push("Nescau")


// imprime trudo oq tem dentro do array
console.log(listaDeCompras)

// para remover
listaDeCompras.pop()
console.log(listaDeCompras)


// mostrar um expecifico - sempre começa no 0 (indice)
console.log(listaDeCompras[1]) // nata

// troca o valor de um elemento no array de acordo com sua posição (indice)

console.log("array antes de troca", listaDeNumeros)
listaDeNumeros[2] = 120
console.log("array dps de troca", listaDeNumeros)


// propriedade length
// mostra o tamanho da lita
console.log(listaDeNumeros.length)


// metodo includes
// verifica se um array tem ou nao determinado elemento (retornando true ou false)
const series = ["game of thrones", "breaking bad" , "shogun"]
console.log(series.includes("game of thrones")) // true
console.log(series.includes("la casa de papel")) // false

//metodo splice
// remove n elementos apartir da posição x do array
const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
letras.splice(2,4,"Z") // o primeiro parametrodiz a partir de qual começa a remover e o seugnfo quantos o (terceito adiciona no lugar a qual foi retirado ou mais)

console.log(letras)