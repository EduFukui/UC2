const readline = require('readline-sync');



const PokemonDisp = [
    // Primeira Geração
    { nome: 'Bulbasaur', tipo: ['Planta', 'Venenoso'], nivel: 5, geracao: 1, NumeroNaPokedex: 1 },
    { nome: 'Ivysaur', tipo: ['Planta', 'Venenoso'], nivel: 16, geracao: 1, NumeroNaPokedex: 2 },
    { nome: 'Venusaur', tipo: ['Planta', 'Venenoso'], nivel: 32, geracao: 1, NumeroNaPokedex: 3 },
    
    { nome: 'Charmander', tipo: ['Fogo'], nivel: 5, geracao: 1, NumeroNaPokedex: 4 },
    { nome: 'Charmeleon', tipo: ['Fogo'], nivel: 16, geracao: 1, NumeroNaPokedex: 5 },
    { nome: 'Charizard', tipo: ['Fogo', 'Voador'], nivel: 59, geracao: 1, NumeroNaPokedex: 6 },
    
    { nome: 'Squirtle', tipo: ['Água'], nivel: 5, geracao: 1, NumeroNaPokedex: 7 },
    { nome: 'Wartortle', tipo: ['Água'], nivel: 16, geracao: 1, NumeroNaPokedex: 8 },
    { nome: 'Blastoise', tipo: ['Água'], nivel: 36, geracao: 1, NumeroNaPokedex: 9 },
    
    { nome: 'Caterpie', tipo: ['Inseto'], nivel: 5, geracao: 1, NumeroNaPokedex: 10 },
    { nome: 'Metapod', tipo: ['Inseto'], nivel: 17, geracao: 1, NumeroNaPokedex: 11 },
    { nome: 'Butterfree', tipo: ['Inseto', 'Voador'], nivel: 34, geracao: 1, NumeroNaPokedex: 12 },
    
    { nome: 'Weedle', tipo: ['Venenoso', 'Inseto'], nivel: 5, geracao: 1, NumeroNaPokedex: 13 },
    { nome: 'Kakuna', tipo: ['Venenoso'], nivel: 16, geracao: 1, NumeroNaPokedex: 14 },
    { nome: 'Beedrill', tipo: ['Venenoso', 'Inseto'], nivel: 53, geracao: 1, NumeroNaPokedex: 15 },
    
    { nome: 'Pidgey', tipo: ['Normal', 'Voador'], nivel: 2, geracao: 1, NumeroNaPokedex: 16 },
    { nome: 'Pidgeotto', tipo: ['Normal', 'Voador'], nivel: 18, geracao: 1, NumeroNaPokedex: 17 },
    { nome: 'Pidgeot', tipo: ['Normal', 'Voador'], nivel: 36, geracao: 1, NumeroNaPokedex: 18 },
    
    { nome: 'Rattata', tipo: ['Normal'], nivel: 1, geracao: 1, NumeroNaPokedex: 19 },
    { nome: 'Raticate', tipo: ['Normal'], nivel: 20, geracao: 1, NumeroNaPokedex: 20 },
     
    { nome: 'Spearow', tipo: ['Normal', 'Voador'], nivel: 2, geracao: 1, NumeroNaPokedex: 21 },
    { nome: 'Fearow', tipo: ['Normal', 'Voador'], nivel: 20, geracao: 1, NumeroNaPokedex: 22 },
    
    { nome: 'Ekans', tipo: ['Venenoso'], nivel: 5, geracao: 1, NumeroNaPokedex: 23 },
    { nome: 'Arbok', tipo: ['Venenoso'], nivel: 25, geracao: 1, NumeroNaPokedex: 24 },
    
    { nome: 'Pikachu', tipo: ['Elétrico'], nivel: 7, geracao: 1, NumeroNaPokedex: 25 },
    { nome: 'Raichu', tipo: ['Elétrico'], nivel: 23, geracao: 1, NumeroNaPokedex: 26 },
    
    { nome: 'Sandshrew', tipo: ['Terra'], nivel: 3, geracao: 1, NumeroNaPokedex: 27 },
    { nome: 'Sandslash', tipo: ['Terra'], nivel: 22, geracao: 1, NumeroNaPokedex: 28 },
    
    { nome: 'Nidoran♀', tipo: ['Venenoso'], nivel: 6, geracao: 1, NumeroNaPokedex: 29 },
    { nome: 'Nidorina', tipo: ['Venenoso'], nivel: 16, geracao: 1, NumeroNaPokedex: 30 },
    { nome: 'Nidoqueen', tipo: ['Venenoso', 'Terra'], nivel: 32, geracao: 1, NumeroNaPokedex: 31 },
    
    { nome: 'Nidoran♂', tipo: ['Venenoso'], nivel: 7, geracao: 1, NumeroNaPokedex: 32 },
    { nome: 'Nidorino', tipo: ['Venenoso'], nivel: 26, geracao: 1, NumeroNaPokedex: 33 },
    { nome: 'Nidoking', tipo: ['Venenoso', 'Terra'], nivel: 52, geracao: 1, NumeroNaPokedex: 34 },
    
    { nome: 'Clefairy', tipo: ['Fada'], nivel: 10, geracao: 1, NumeroNaPokedex: 35 },
    { nome: 'Clefable', tipo: ['Fada'], nivel: 39, geracao: 1, NumeroNaPokedex: 36 },
    
    { nome: 'Vulpix', tipo: ['Fogo'], nivel: 15, geracao: 1, NumeroNaPokedex: 37 },
    { nome: 'Ninetales', tipo: ['Fogo'], nivel: 61, geracao: 1, NumeroNaPokedex: 38 },
    
    { nome: 'Jigglypuff', tipo: ['Normal', 'Fada'], nivel: 13, geracao: 1, NumeroNaPokedex: 39 },
    { nome: 'Wigglytuff', tipo: ['Normal', 'Fada'], nivel: 42, geracao: 1, NumeroNaPokedex: 40 },
    
    { nome: 'Zubat', tipo: ['Venenoso', 'Voador'], nivel: 7, geracao: 1, NumeroNaPokedex: 41 },
    { nome: 'Golbat', tipo: ['Venenoso', 'Voador'], nivel: 29, geracao: 1, NumeroNaPokedex: 42 },
    
    { nome: 'Oddish', tipo: ['Planta', 'Venenoso'], nivel: 6, geracao: 1, NumeroNaPokedex: 43 },
    { nome: 'Gloom', tipo: ['Planta', 'Venenoso'], nivel: 18, geracao: 1, NumeroNaPokedex: 44 },
    { nome: 'Vileplume', tipo: ['Planta', 'Venenoso'], nivel: 43, geracao: 1, NumeroNaPokedex: 45 },
    
    { nome: 'Paras', tipo: ['Inseto', 'Planta'], nivel: 3, geracao: 1, NumeroNaPokedex: 46 },
    { nome: 'Parasect', tipo: ['Inseto', 'Planta'], nivel: 24, geracao: 1, NumeroNaPokedex: 47 },
    
    { nome: 'Venonat', tipo: ['Inseto', 'Venenoso'], nivel: 12, geracao: 1, NumeroNaPokedex: 48 },
    { nome: 'Venomoth', tipo: ['Inseto', 'Venenoso'], nivel: 31, geracao: 1, NumeroNaPokedex: 49 },
    
    { nome: 'Diglett', tipo: ['Terra'], nivel: 12, geracao: 1, NumeroNaPokedex: 50 },
    { nome: 'Dugtrio', tipo: ['Terra'], nivel: 26, geracao: 1, NumeroNaPokedex: 51 },
    
    { nome: 'Meowth', tipo: ['Normal'], nivel: 22, geracao: 1, NumeroNaPokedex: 52 },
    { nome: 'Persian', tipo: ['Normal'], nivel: 28, geracao: 1, NumeroNaPokedex: 53 },
    
    { nome: 'Psyduck', tipo: ['Água'], nivel: 12, geracao: 1, NumeroNaPokedex: 54 },
    { nome: 'Golduck', tipo: ['Água'], nivel: 33, geracao: 1, NumeroNaPokedex: 55 },
    
    { nome: 'Mankey', tipo: ['Lutador'], nivel: 9, geracao: 1, NumeroNaPokedex: 56 },
    { nome: 'Primeape', tipo: ['Lutador'], nivel: 28, geracao: 1, NumeroNaPokedex: 57 },

    { nome: 'Growlithe', tipo: ['Fogo'], nivel: 15, geracao: 1, NumeroNaPokedex: 58 },
    { nome: 'Arcanine', tipo: ['Fogo'], nivel: 50, geracao: 1, NumeroNaPokedex: 59 },

    { nome: 'Poliwag', tipo: ['Água'], nivel: 5, geracao: 1, NumeroNaPokedex: 60 },
    { nome: 'Poliwhirl', tipo: ['Água'], nivel: 25, geracao: 1, NumeroNaPokedex: 61 },
    { nome: 'Poliwrath', tipo: ['Água', 'Lutador'], nivel: 44, geracao: 1, NumeroNaPokedex: 62 },

    { nome: 'Abra', tipo: ['Psíquico'], nivel: 8, geracao: 1, NumeroNaPokedex: 63 },
    { nome: 'Kadabra', tipo: ['Psíquico'], nivel: 25, geracao: 1, NumeroNaPokedex: 64 },
    { nome: 'Alakazam', tipo: ['Psíquico'], nivel: 45, geracao: 1, NumeroNaPokedex: 65 },

    { nome: 'Machop', tipo: ['Lutador'], nivel: 7, geracao: 1, NumeroNaPokedex: 66 },
    { nome: 'Machoke', tipo: ['Lutador'], nivel: 28, geracao: 1, NumeroNaPokedex: 67 },
    { nome: 'Machamp', tipo: ['Lutador'], nivel: 48, geracao: 1, NumeroNaPokedex: 68 },

    { nome: 'Bellsprout', tipo: ['Planta', 'Venenoso'], nivel: 6, geracao: 1, NumeroNaPokedex: 69 },
    { nome: 'Weepinbell', tipo: ['Planta', 'Venenoso'], nivel: 21, geracao: 1, NumeroNaPokedex: 70 },
    { nome: 'Victreebel', tipo: ['Planta', 'Venenoso'], nivel: 40, geracao: 1, NumeroNaPokedex: 71 },

    { nome: 'Tentacool', tipo: ['Água', 'Venenoso'], nivel: 8, geracao: 1, NumeroNaPokedex: 72 },
    { nome: 'Tentacruel', tipo: ['Água', 'Venenoso'], nivel: 36, geracao: 1, NumeroNaPokedex: 73 },

    { nome: 'Geodude', tipo: ['Pedra', 'Terrestre'], nivel: 8, geracao: 1, NumeroNaPokedex: 74 },
    { nome: 'Graveler', tipo: ['Pedra', 'Terrestre'], nivel: 25, geracao: 1, NumeroNaPokedex: 75 },
    { nome: 'Golem', tipo: ['Pedra', 'Terrestre'], nivel: 45, geracao: 1, NumeroNaPokedex: 76 },

    { nome: 'Ponyta', tipo: ['Fogo'], nivel: 12, geracao: 1, NumeroNaPokedex: 77 },
    { nome: 'Rapidash', tipo: ['Fogo'], nivel: 40, geracao: 1, NumeroNaPokedex: 78 },

    { nome: 'Slowpoke', tipo: ['Água', 'Psíquico'], nivel: 10, geracao: 1, NumeroNaPokedex: 79 },
    { nome: 'Slowbro', tipo: ['Água', 'Psíquico'], nivel: 37, geracao: 1, NumeroNaPokedex: 80 },

    { nome: 'Magnemite', tipo: ['Elétrico', 'Metálico'], nivel: 10, geracao: 1, NumeroNaPokedex: 81 },
    { nome: 'Magneton', tipo: ['Elétrico', 'Metálico'], nivel: 35, geracao: 1, NumeroNaPokedex: 82 },
    
    { nome: 'Farfetch’d', tipo: ['Normal', 'Voador'], nivel: 20, geracao: 1, NumeroNaPokedex: 83 },
    
    { nome: 'Doduo', tipo: ['Normal', 'Voador'], nivel: 12, geracao: 1, NumeroNaPokedex: 84 },
    { nome: 'Dodrio', tipo: ['Normal', 'Voador'], nivel: 36, geracao: 1, NumeroNaPokedex: 85 },
    
    { nome: 'Seel', tipo: ['Água'], nivel: 15, geracao: 1, NumeroNaPokedex: 86 },
    { nome: 'Dewgong', tipo: ['Água', 'Gelo'], nivel: 34, geracao: 1, NumeroNaPokedex: 87 },
    
    { nome: 'Grimer', tipo: ['Venenoso'], nivel: 10, geracao: 1, NumeroNaPokedex: 88 },
    { nome: 'Muk', tipo: ['Venenoso'], nivel: 38, geracao: 1, NumeroNaPokedex: 89 },
    
    { nome: 'Shellder', tipo: ['Água'], nivel: 8, geracao: 1, NumeroNaPokedex: 90 },
    { nome: 'Cloyster', tipo: ['Água', 'Gelo'], nivel: 42, geracao: 1, NumeroNaPokedex: 91 },
    
    { nome: 'Gastly', tipo: ['Fantasma', 'Venenoso'], nivel: 7, geracao: 1, NumeroNaPokedex: 92 },
    { nome: 'Haunter', tipo: ['Fantasma', 'Venenoso'], nivel: 25, geracao: 1, NumeroNaPokedex: 93 },
    { nome: 'Gengar', tipo: ['Fantasma', 'Venenoso'], nivel: 45, geracao: 1, NumeroNaPokedex: 94 },
    
    { nome: 'Onix', tipo: ['Pedra', 'Terrestre'], nivel: 18, geracao: 1, NumeroNaPokedex: 95 },
    
    { nome: 'Drowzee', tipo: ['Psíquico'], nivel: 12, geracao: 1, NumeroNaPokedex: 96 },
    { nome: 'Hypno', tipo: ['Psíquico'], nivel: 36, geracao: 1, NumeroNaPokedex: 97 },
    
    { nome: 'Krabby', tipo: ['Água'], nivel: 10, geracao: 1, NumeroNaPokedex: 98 },
    { nome: 'Kingler', tipo: ['Água'], nivel: 38, geracao: 1, NumeroNaPokedex: 99 },
    
    { nome: 'Voltorb', tipo: ['Elétrico'], nivel: 8, geracao: 1, NumeroNaPokedex: 100 },
    { nome: 'Electrode', tipo: ['Elétrico'], nivel: 35, geracao: 1, NumeroNaPokedex: 101 },

    { nome: 'Exeggcute', tipo: ['Planta', 'Psíquico'], nivel: 12, geracao: 1, NumeroNaPokedex: 102 },
    { nome: 'Exeggutor', tipo: ['Planta', 'Psíquico'], nivel: 42, geracao: 1, NumeroNaPokedex: 103 },
    
    { nome: 'Cubone', tipo: ['Terrestre'], nivel: 14, geracao: 1, NumeroNaPokedex: 104 },
    { nome: 'Marowak', tipo: ['Terrestre'], nivel: 34, geracao: 1, NumeroNaPokedex: 105 },
    
    { nome: 'Hitmonlee', tipo: ['Lutador'], nivel: 38, geracao: 1, NumeroNaPokedex: 106 },
    { nome: 'Hitmonchan', tipo: ['Lutador'], nivel: 38, geracao: 1, NumeroNaPokedex: 107 },
    
    { nome: 'Lickitung', tipo: ['Normal'], nivel: 20, geracao: 1, NumeroNaPokedex: 108 },
    
    { nome: 'Koffing', tipo: ['Venenoso'], nivel: 10, geracao: 1, NumeroNaPokedex: 109 },
    { nome: 'Weezing', tipo: ['Venenoso'], nivel: 35, geracao: 1, NumeroNaPokedex: 110 },
    
    { nome: 'Rhyhorn', tipo: ['Terrestre', 'Pedra'], nivel: 18, geracao: 1, NumeroNaPokedex: 111 },
    { nome: 'Rhydon', tipo: ['Terrestre', 'Pedra'], nivel: 42, geracao: 1, NumeroNaPokedex: 112 },
    
    { nome: 'Chansey', tipo: ['Normal'], nivel: 25, geracao: 1, NumeroNaPokedex: 113 },
    
    { nome: 'Tangela', tipo: ['Planta'], nivel: 22, geracao: 1, NumeroNaPokedex: 114 },
    
    { nome: 'Kangaskhan', tipo: ['Normal'], nivel: 38, geracao: 1, NumeroNaPokedex: 115 },
    
    { nome: 'Horsea', tipo: ['Água'], nivel: 10, geracao: 1, NumeroNaPokedex: 116 },
    { nome: 'Seadra', tipo: ['Água'], nivel: 35, geracao: 1, NumeroNaPokedex: 117 },
    
    { nome: 'Goldeen', tipo: ['Água'], nivel: 12, geracao: 1, NumeroNaPokedex: 118 },
    { nome: 'Seaking', tipo: ['Água'], nivel: 33, geracao: 1, NumeroNaPokedex: 119 },
    
    { nome: 'Staryu', tipo: ['Água'], nivel: 15, geracao: 1, NumeroNaPokedex: 120 },
    

    { nome: 'Starmie', tipo: ['Água', 'Psíquico'], nivel: 38, geracao: 1, NumeroNaPokedex: 121 },

    { nome: 'Mr. Mime', tipo: ['Psíquico', 'Fada'], nivel: 35, geracao: 1, NumeroNaPokedex: 122 },
    
    { nome: 'Scyther', tipo: ['Inseto', 'Voador'], nivel: 40, geracao: 1, NumeroNaPokedex: 123 },
    
    { nome: 'Jynx', tipo: ['Gelo', 'Psíquico'], nivel: 38, geracao: 1, NumeroNaPokedex: 124 },
    
    { nome: 'Electabuzz', tipo: ['Elétrico'], nivel: 42, geracao: 1, NumeroNaPokedex: 125 },
    
    { nome: 'Magmar', tipo: ['Fogo'], nivel: 42, geracao: 1, NumeroNaPokedex: 126 },
    
    { nome: 'Pinsir', tipo: ['Inseto'], nivel: 38, geracao: 1, NumeroNaPokedex: 127 },
    
    { nome: 'Tauros', tipo: ['Normal'], nivel: 40, geracao: 1, NumeroNaPokedex: 128 },
    
    { nome: 'Magikarp', tipo: ['Água'], nivel: 5, geracao: 1, NumeroNaPokedex: 129 },
    { nome: 'Gyarados', tipo: ['Água', 'Voador'], nivel: 40, geracao: 1, NumeroNaPokedex: 130 },
    
    { nome: 'Lapras', tipo: ['Água', 'Gelo'], nivel: 40, geracao: 1, NumeroNaPokedex: 131 },
    
    { nome: 'Ditto', tipo: ['Normal'], nivel: 25, geracao: 1, NumeroNaPokedex: 132 },
    
    { nome: 'Eevee', tipo: ['Normal'], nivel: 10, geracao: 1, NumeroNaPokedex: 133 },
    { nome: 'Vaporeon', tipo: ['Água'], nivel: 35, geracao: 1, NumeroNaPokedex: 134 },
    { nome: 'Jolteon', tipo: ['Elétrico'], nivel: 35, geracao: 1, NumeroNaPokedex: 135 },
    { nome: 'Flareon', tipo: ['Fogo'], nivel: 35, geracao: 1, NumeroNaPokedex: 136 },
    
    { nome: 'Porygon', tipo: ['Normal'], nivel: 25, geracao: 1, NumeroNaPokedex: 137 },
    
    { nome: 'Omanyte', tipo: ['Pedra', 'Água'], nivel: 15, geracao: 1, NumeroNaPokedex: 138 },
    { nome: 'Omastar', tipo: ['Pedra', 'Água'], nivel: 40, geracao: 1, NumeroNaPokedex: 139 },
    
    { nome: 'Kabuto', tipo: ['Pedra', 'Água'], nivel: 15, geracao: 1, NumeroNaPokedex: 140 },
    { nome: 'Kabutops', tipo: ['Pedra', 'Água'], nivel: 40, geracao: 1, NumeroNaPokedex: 141 },
    
    { nome: 'Aerodactyl', tipo: ['Pedra', 'Voador'], nivel: 45, geracao: 1, NumeroNaPokedex: 142 },
    
    { nome: 'Snorlax', tipo: ['Normal'], nivel: 50, geracao: 1, NumeroNaPokedex: 143 },
    
    { nome: 'Articuno', tipo: ['Gelo', 'Voador'], nivel: 50, geracao: 1, NumeroNaPokedex: 144 },
    { nome: 'Zapdos', tipo: ['Elétrico', 'Voador'], nivel: 50, geracao: 1, NumeroNaPokedex: 145 },
    { nome: 'Moltres', tipo: ['Fogo', 'Voador'], nivel: 50, geracao: 1, NumeroNaPokedex: 146 },
    
    { nome: 'Dratini', tipo: ['Dragão'], nivel: 10, geracao: 1, NumeroNaPokedex: 147 },
    { nome: 'Dragonair', tipo: ['Dragão'], nivel: 30, geracao: 1, NumeroNaPokedex: 148 },
    { nome: 'Dragonite', tipo: ['Dragão', 'Voador'], nivel: 85, geracao: 1, NumeroNaPokedex: 149 },
    
    { nome: 'Mewtwo', tipo: ['Psíquico'], nivel: 100, geracao: 1, NumeroNaPokedex: 150 },
    
    { nome: 'Mew', tipo: ['Psíquico'], nivel: 59, geracao: 1, NumeroNaPokedex: 151 },
    

// Sexta Geração
{ nome: 'Greninja', tipo: ['Agua','Escuridao'], nivel: 50, geracao: 6, NumeroNaPokedex: 658}
]



let MochilaDoTreinador = [
    { nome: 'Pikachu', tipo: 'Eletrico', nivel: 5},
    { nome: 'Charmander', tipo: 'Fogo', nivel: 10}
]

let TiposDePokemon = ("")


function adicionarPokemon () {
    console.log("\nEscolha um Tipo de Pokemon: \n1. Normal\n2. Fogo\n3. Água\n4. Elétrico\n5. Grama\n6. Gelo\n7. Lutador\n8. Venenoso\n9. Terra\n10. Voador\n11. Psíquico\n12. Inseto\n13. Rocha\n14. Fantasma\n15. Dragão\n16. Sombrio\n17. Aço\n18. Fada ");


    //if (PokemonDisp.tipo = ) {}



/*
    for (let i = 0; i < PokemonDisp.length; i++) {console.log(`${i+1}. ${PokemonDisp[i].nome}`)}




    console.log("\nEscolha um Pokemon para adicionar:");
    for (let i = 0; i < PokemonDisp.length; i++) {console.log(`${i+1}. ${PokemonDisp[i].nome}`)}
    const escolha = readline.questionInt('Digite o numero conforme o pokemon: ')

    if (MochilaDoTreinador.length < 6) {
        const pokEscolhido = PokemonDisp[escolha-1];
        MochilaDoTreinador.push(pokEscolhido);
        console.log(`${pokEscolhido.nome} foi adicionado na mochila.`)
    }
    else {console.log('Nenhum pokemon disponivel.');
    } */
} 

adicionarPokemon() 