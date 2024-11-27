const readline = require('readline-sync');

const PokemonDisp = [{
    nome: 'Pikachu',
    tipo: 'Eletrico',
    nivel: 12
},{
    nome: 'Charmander',
    tipo: 'Fogo',
    nivel: 10
},{
    nome:'Bulbasaur',
    tipo: 'Planta',
    nivel: 14
},{
    nome: 'Greninja',
    tipo: ['Agua','Escuridao'],
    nivel: 50
},{
    nome: 'Pidgey',
    tipo: 'Normal',
    nivel: 5
}]


let MochilaDoTreinador = [{
    nome: 'Pikachu',
    tipo: 'Eletrico',
    nivel: 5},
    {
        nome: 'Charmander',
        tipo: 'Fogo',
        nivel: 10
    }]

function adicionarPokemon () {
    console.log("\nEscolha um Pokemon para adicionar:");
    for (let i = 0; i < PokemonDisp.length; i++) {console.log(PokemonDisp[i].nome)}
const escolha = readline.questionInt()
   
}

function mochilaTrei () {
    for (let i = 0; i < MochilaDoTreinador.length; i++) {console.log(MochilaDoTreinador.nome[i])}
}

function removerPok () {
    remove = readline.questionInt(`\nEscolha um Pokemon para remover: ${MochilaDoTreinador}`)
    switch (remove) {
    case 1: MochilaDoTreinador.pop(PokemonDisp[add-1])
    break;
    case 2: MochilaDoTreinador.pop(PokemonDisp[add-1])
    break;
    case 3: MochilaDoTreinador.pop(PokemonDisp[add-1])
    break;
    case 4: MochilaDoTreinador.pop(PokemonDisp[add-1])
    break;
    case 5: MochilaDoTreinador.pop(PokemonDisp[add-1])
    break;
    default:console.log("\nOpcao invalida\n")
    break;
}
}






function exibirMenu () {
    let opcao;
    // enquanto a opcao n for 3 (sair), o loop continuará
    while (true) {
        // exibir a opcao e capturar a entrada do usuario
        opcao = readline.questionInt("\nEscolha uma opcao: \n1. Adicionar Pokemon a mochila \n2. Ver Pokemons na mochila \n3. Remover Pokemon da mochila \n4. Sair \n");
        switch (opcao) {
            case 1:
                adicionarPokemon()
                break;
            case 2:
                mochilaTrei()
                break;
            case 3:
                removerPok()
                break;
            case 4:
                console.log("\nSaindo...\n");
                return;
            default:
                console.log("\nOpcao invalida\n");
                return;
        }
    }
}

// chamar a funcao para exibir o menu
exibirMenu();







/* switch (add) {
        case 1: MochilaDoTreinador.push(PokemonDisp[add-1])
        break;
        case 2: MochilaDoTreinador.push(PokemonDisp[add-1])
        break;
        case 3: MochilaDoTreinador.push(PokemonDisp[add-1])
        break;
        case 4: MochilaDoTreinador.push(PokemonDisp[add-1])
        break;
        case 5: MochilaDoTreinador.push(PokemonDisp[add-1])
        break;
        default:console.log("\nOpcao invalida\n")
        break;
    } */