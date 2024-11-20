// exercicio 1 - escrita
//A)
const pessoa = {
    nome: "Nick", 
    apelidos: ["Nickname","Nicknomes", "Nickminaj"]
 }
 function apresentarPessoa (objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}
apresentarPessoa (pessoa)

 // B)
let pessoa1 = {
    ...pessoa,
    apelidos: ["NickFury", "NickDiaz", "Nickolau"]
}
apresentarPessoa (pessoa1)

//exercicio 2
const p1 = {
    nome: "isa",
    idade: ""
}



function x (p1) {
    const resultado = {
        p1nome, //valor de nome
        p1nomelength,
        p1idade,
    }
    return resultado
}





// exercicio 3 
let carrinho = []
let fruta1= {
    nome: "maca",
}
let fruta2 = {
    nome: "banana"
}

function adicionar (fruta) {
    carrinho.push (fruta)
}
adicionar(fruta1)
console.log(carrinho)