const readline = require('readline-sync');

const tipoSangue = Number(readline.question('Digite o numero conforme o tipo sanguineo desejado: '));
definicao(tipoSangue);

function definicao(num) {
    let tipoSangueCadastrado;

    switch (num) {
        case 1:
            tipoSangueCadastrado = "A+";
            break;
        case 2:
            tipoSangueCadastrado = "B+";
            break;
        case 3:
            tipoSangueCadastrado = "AB+";
            break;
        case 4:
            tipoSangueCadastrado = "O+";
            break;
        case 5:
            tipoSangueCadastrado = "A-";
            break;
        case 6:
            tipoSangueCadastrado = "B-";
            break;
        case 7:
            tipoSangueCadastrado = "AB-";
            break;
        case 8:
            tipoSangueCadastrado = "O-";
            break;
        default:
            console.log("\nOpcao invalida\n");
            return;
    }

    console.log(`Tipo sanguíneo selecionado: ${tipoSangueCadastrado}`);
}
