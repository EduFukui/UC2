//crie um objeto que representa um personagem que vc gosta
// atributos: nome, idade, liste poderes, caracteristicas
// crie um metodo que sera algo que esse personagem faz
// acesse cada um desses atributos e o metodo cada um em um console.log diferente

let personagem = {
    nome: "Sakuta Azusagawa",
    idade: 17,
    altura: 1.73,
    genero: "Masculino",
    dataDeNascimento: "10/4/1997",
    caracteristicas: ["tem uma personalidade peculiar"],
    trabalhar: function () {
        console.log(`${personagem.nome} trabalha em uma cafeteria.`)
    }

}
console.log()
console.log(personagem)
console.log(personagem.nome)
console.log(personagem.idade)
console.log(personagem.genero)
console.log(personagem.dataDeNascimento)
console.log(personagem.caracteristicas)
personagem.trabalhar()
console.log()

/* sempre trabalhar com return nos codigos */