const filme = {
    nome: "Auto da Compadecida", 
    ano: 2000, 
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        "Virginia Cavendish"
    ], 
    transmissoesHoje: [
        {canal: "Telecine", horario: "21h"}, 
        {canal: "Canal Brasil", horario: "19h"}, 
        {canal: "Globo", horario: "14h"}
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// vai ser impresso "MatheusnNachtergaele   \n  Virginia Cavendish   \n    Globo", horario: "14h  "


const cachorro = {
    nome: "Juca", 
    idade: 3, 
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// A) vai ser impresso: 
//console.log(cachorro) "nome: Juca ,idade: 3, raca: SRD "
//console.log(gato) "nome: Juba ,idade: 3, raca: SRD "
//console.log(tartaruga) "nome: Jubo ,idade: 3, raca: SRD "

//B) Os tres pontos copiam o objeto que foi definido ex: (... gato) vai copiar tudo aquilo que estiver dentro do objeto gato, e caso queira pode-se adcionar mais atributos ao novo objeto criado


function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio", 
    idade: 23, 
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// A) vai ser impresso: " nome: "Caio", idade: 23, backender: false ,backender"                         " nome: "Caio", idade: 23, backender: false ,altura"
//
