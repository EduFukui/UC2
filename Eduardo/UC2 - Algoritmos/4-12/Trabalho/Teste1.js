const readline = require('readline-sync');

function buscarDoadorTipoSangue () {
    console.log("\n\n\n-Tipos sanguineos: \n1. A+ \n2. B+ \n3. AB+ \n4. O+ \n5. A- \n6. B- \n7. AB- \n8. O- \n9. Voltar");

    const escolhaDoSangue = readline.questionInt('Digite o numero conforme o tipo sanguineo desejado: ')

    switch (escolhaDoSangue) {
        case 1:
            console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n-----------------------------------------------------------------")
            break;
        case 2:
           
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:

            break;
        case 6:
            
            break;
        case 7:
            
            break;
        case 8:
            
            break;
        case 9:
            console.log("\nVoltando...")
            break;
        default:
            
            return;
    }

}



function exibirMenu () {
    let opcao;
    while (true) {
        opcao = readline.questionInt("\n===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE ===== \n\n1. Cadastrar doador \n2. Listar doadores \n3. Buscar doador por tipo sanguineo \n4. Buscar doador por data da ultima doacao \n5. Sair \n-Escolha uma numero correspondente a opcao desejada: ");
        switch (opcao) {
            case 1:
                cadastroDeDoador()
                break;
            case 2:
                listaDeDoadores()
                break;
            case 3:
                buscarDoadorTipoSangue()
                break;
            case 4:
                buscarDoadorDataDoacao()
                break;
            case 5:
                console.log("\nSaindo...\n");
                return;
            default:
                console.log("\nOpcao invalida\n");
                return;
        }
    }
}

exibirMenu();