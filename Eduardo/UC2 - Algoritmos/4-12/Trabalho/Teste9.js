const readline = require('readline-sync');

let dataDeDoacaoCadastro;

dataDeDoacaoCadastro = String(readline.question("Digite a data de nascimento (DD/MM/AAAA): "));

let data = dataDeDoacaoCadastro.split('/');

console.log(data);