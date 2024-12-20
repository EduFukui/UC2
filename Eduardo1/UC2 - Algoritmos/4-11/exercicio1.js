let array
console.log('a. ', array)
// vai imprimir (a. "oq tiver dentro do array( no caso nada/ undefined)")
array = null
console.log('b. ', array) // vai imprimir (b. null)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // vai imprimir (c.(quantidade da lista no caso 11))

let i = 0
console.log('d. ', array[i]) // imprime (d. mais o valor que esta no indice 0 "no caso 3")

array[i+1] = 19
console.log('e. ', array) // imprime (e. 3,19,5,6,7,8,9,10,11,12,13 ]) "19 no indice 1"

const valor = array[i+6]
console.log('f. ', valor) // imprime (f. e oq esta no indice 6 no caso 9 )
