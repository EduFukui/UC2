// operador E (and) simbolo: &&
//retorna true apenas de todos os envolvidos forem true
//apenas um unico falso ja e suficiente para retornar false
console.log(true && true) //true
console.log(true && true && false) //false
console.log(true && false) //false
console.log(false && false) //false
console.log(false && true) //false

let idade = 18
let maioridade = idade >= 18 //boolean
let temCarteira = false
let temCarro = true
console.log(maioridade && temCarro && temCarteira) //false

/*let idade = 18
let maioridade = idade >= 18 //boolean
let temCarteira = true
let temCarro = true
console.log(maioridade && temCarro && temCarteira) //true
*/





// operador ou (or) simbolo: ||
//retorna false apenas se todos os envolvidos forem false
// apenas um unicos true ja e capaz para retornar true

console.log(true || true) //true
console.log(true || true || false) //true
console.log(true || false) //true
console.log(false || false) //false
console.log(false || true) //true


let temTrabalho = false
let invest = false
let economiza = false
let herdeiro = true
console.log((temTrabalho && invest && economiza) ||herdeiro) //true






// operador nao/negação (not) simbolo: !
//invert o estado - true ele transforma de false para true e vice versa











