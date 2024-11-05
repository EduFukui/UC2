//crie um objeto que representa um personagem que vc gosta
// atributos: nome, idade, liste poderes, caracteristicas
// crie um metodo que sera algo que esse personagem faz
// acesse cada um desses atributos e o metodo cada um em um console.log diferente

let personagem = {
    nome: "Sakuta Azusagawa",
    idade: 17,
    altura: 1.73,
    genero: "Masculino",
    dataDeNascimento: 10/4/1997,
    caracteristicas: ["cara e foda", "sla"],
    trabalhar: function () {
        console.log(`${personagem.nome} trabalha em uma cafeteria.`)
    }

}
console.log()
console.log(personagem)
console.log()
console.log(personagem.nome)
console.log()
console.log(personagem.idade)
console.log()
console.log(personagem.genero)
console.log()
console.log(personagem.dataDeNascimento)
console.log()
console.log(personagem.caracteristicas)
console.log()
personagem.trabalhar()
console.log()