// suitch case - loop - readline

const readline = require('readline-sync');


function imprimirFrase () {
    console.log("Ola, tudo bem com voce?")
}

function soma () {
    let num1 = 1
    let num2 = 2
    console.log(num1 + num2)
}

function exibirMenu () {
    let opcao;

    // enquanto a opcao n for 3 (sair), o loop continuará
    while (true) {
        // exibir a opcao e capturar a entrada do usuario
        opcao = readline.questionInt("Escolha uma opcao: \n1. Exibir Ola \n2. Exibir hora atual \n3. Sair \n");
        switch (opcao) {
            case 1:
                imprimirFrase
                break;
            case 2:
                console.log("\nComo vai?\n");
                break;
            case 3:
                console.log("\nSaindo...\n");
                return; // Encerra a funcao
            default:
                console.log("\nOpcao invalida\n");
                break;
        }
    }
}

// chamar a funcao para exibir o menu
exibirMenu();