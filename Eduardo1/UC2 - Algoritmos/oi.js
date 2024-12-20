const readline = require('readline-sync');



let opcaoDeBusca = String(readline.question("-Digite a data de doacao para buscar (DD/MM/AAAA): "));

 
        let opcaoCortada = opcaoDeBusca.split('/');
        console.log(opcaoCortada)
        console.log(opcaoCortada.length)
        if (opcaoCortada.length !== 3) {
            console.log("Formato de data inválido. Tente novamente.\n");
        
        }