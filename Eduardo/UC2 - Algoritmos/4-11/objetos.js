//objetos

// como criar objetos

let pessoa = {
    //atributo ou propriedade
    //nos nao usamos let nem const
    //nos usamos ":" ao inves de "="
    nome: "Eduardo", 
    idade: 28,
    cpf: 74287428323,
    filmesFavoritos: ["Senhor dos Aneis","Harry Potter","Jurassic Park"],
    // pode se colocar booleans, arrays, strings, numbers
    trabalhar: function(/*parametros*/) {
        console.log(`${pessoa.nome} esta trabalahndo. Ele nao ve a hode de chegar em casa e jogar.`)
    }
}
console.log(pessoa)

// pa acessar um dos atributos uzamos 
console.log(pessoa.nome)
console.log(pessoa.filmesFavoritos[0])

// para mudarmos um valor usamos
pessoa.idade = 30
console.log(pessoa.idade)

// para adicionar um atributo

pessoa.altura = 1.78
console.log(pessoa.altura)



// para acessar a function = aqui eu chamo / executo o metodo do meu objeto
pessoa.trabalhar()











