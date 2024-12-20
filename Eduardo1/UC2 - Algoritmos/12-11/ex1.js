
let pessoa = {
    nome: "Eduardo",
    idade: 16,
    generoMusicalPreferido: "RockJapones",
}

function novObj (obj) {const novaPessoa = {
    ...obj,
    comidasPreferidas: ["Sushi","Hamburguer","Stroggnoff"],
    melhorAmigo: {
        nome: "Thiago",
        idade: 16,
    }
}
}



console.log(`O nome da pessoa e ${novaPessoa.nome} e seuas comidas preferidas sao ${novaPessoa.comidasPreferidas[0]} ${novaPessoa.comidasPreferidas[1]} e ${novaPessoa.comidasPreferidas[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`)




