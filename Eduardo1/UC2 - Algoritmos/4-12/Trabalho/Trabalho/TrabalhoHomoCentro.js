const readline = require('readline-sync');

let lista = [
    { nome: "Joao", idade: 25, peso: 70, tipoSanguineo: "O+", dataAoContrario: "20240710" },
    { nome: "Maria", idade: 30, peso: 65, tipoSanguineo: "A+", dataAoContrario: "20240711" },
    { nome: "Pedro", idade: 28, peso: 75, tipoSanguineo: "A+", dataAoContrario: "20240709" }, 
    { nome: "Ana", idade: 22, peso: 55, tipoSanguineo: "AB-", dataAoContrario: "20240708" }, 
    { nome: "Carlos", idade: 35, peso: 80, tipoSanguineo: "O-", dataAoContrario: "20240712" }, 
    { nome: "Ana Paula", idade: 22, peso: 55, tipoSanguineo: "AB-", dataAoContrario: "20240808" },
    { nome: "Fred", idade: 55, peso: 55, tipoSanguineo: "AB+", dataAoContrario: "20240712" },
    { nome: "Nick", idade: 24, peso: 55, tipoSanguineo: "A-", dataAoContrario: "20230708" },
    { nome: "Airton", idade: 22, peso: 55, tipoSanguineo: "B-", dataAoContrario: "20211222" },
    { nome: "Frederson", idade: 15, peso: 55, tipoSanguineo: "B+", dataAoContrario: "20220112" },
    { nome: "Alice", idade: 45, peso: 70, tipoSanguineo: "A+", dataAoContrario: "20230815" },
    { nome: "Lucas", idade: 33, peso: 82, tipoSanguineo: "O+", dataAoContrario: "20230125" },
    { nome: "Gabriel", idade: 21, peso: 60, tipoSanguineo: "AB-", dataAoContrario: "20240617" },
    { nome: "Mariana", idade: 29, peso: 68, tipoSanguineo: "B+", dataAoContrario: "20240512" },
    { nome: "Rafael", idade: 36, peso: 77, tipoSanguineo: "O-", dataAoContrario: "20230909" },
    { nome: "Juliana", idade: 27, peso: 56, tipoSanguineo: "A-", dataAoContrario: "20241022" },
    { nome: "Gustavo", idade: 50, peso: 90, tipoSanguineo: "B-", dataAoContrario: "20240318" },
    { nome: "Fernanda", idade: 23, peso: 59, tipoSanguineo: "A+", dataAoContrario: "20240410" },
    { nome: "Mateus", idade: 38, peso: 75, tipoSanguineo: "AB+", dataAoContrario: "20230207" },
    { nome: "Larissa", idade: 19, peso: 54, tipoSanguineo: "O+", dataAoContrario: "20231030" },
    { nome: "Clara", idade: 41, peso: 66, tipoSanguineo: "AB-", dataAoContrario: "20240520" },
    { nome: "Henrique", idade: 60, peso: 78, tipoSanguineo: "O+", dataAoContrario: "20240101" },
    { nome: "Bianca", idade: 25, peso: 63, tipoSanguineo: "B+", dataAoContrario: "20240805" },
    { nome: "Vinicius", idade: 47, peso: 84, tipoSanguineo: "A-", dataAoContrario: "20230623" },
    { nome: "Carolina", idade: 30, peso: 70, tipoSanguineo: "O-", dataAoContrario: "20231112" },
    { nome: "Bruno", idade: 34, peso: 76, tipoSanguineo: "AB+", dataAoContrario: "20230903" },
    { nome: "Eduarda", idade: 26, peso: 62, tipoSanguineo: "A+", dataAoContrario: "20231001" },
    { nome: "Renato", idade: 22, peso: 60, tipoSanguineo: "B-", dataAoContrario: "20230311" },
    { nome: "Amanda", idade: 28, peso: 64, tipoSanguineo: "O+", dataAoContrario: "20240525" },
    { nome: "Sofia", idade: 37, peso: 58, tipoSanguineo: "A-", dataAoContrario: "20241230" },
    { nome: "Daniel", idade: 49, peso: 81, tipoSanguineo: "AB+", dataAoContrario: "20231120" },
    { nome: "Paulo", idade: 32, peso: 72, tipoSanguineo: "O-", dataAoContrario: "20240918" },
    { nome: "Helena", idade: 45, peso: 65, tipoSanguineo: "A+", dataAoContrario: "20240814" },
    { nome: "Marcelo", idade: 21, peso: 59, tipoSanguineo: "B+", dataAoContrario: "20240604" },
    { nome: "Tatiana", idade: 54, peso: 75, tipoSanguineo: "A-", dataAoContrario: "20240119" },
    { nome: "Rodrigo", idade: 40, peso: 88, tipoSanguineo: "O+", dataAoContrario: "20230731" },
    { nome: "Leticia", idade: 19, peso: 53, tipoSanguineo: "AB-", dataAoContrario: "20241208" },
    { nome: "Camila", idade: 29, peso: 68, tipoSanguineo: "B+", dataAoContrario: "20240302" },
    { nome: "André", idade: 23, peso: 61, tipoSanguineo: "A+", dataAoContrario: "20240715" },
    { nome: "Isabela", idade: 35, peso: 72, tipoSanguineo: "O-", dataAoContrario: "20241127" },
    { nome: "Ricardo", idade: 50, peso: 89, tipoSanguineo: "A-", dataAoContrario: "20240222" },
    { nome: "Emanuele", idade: 24, peso: 58, tipoSanguineo: "B-", dataAoContrario: "20230615" },
    { nome: "Diego", idade: 27, peso: 73, tipoSanguineo: "AB+", dataAoContrario: "20230919" },
    { nome: "Patricia", idade: 31, peso: 66, tipoSanguineo: "A+", dataAoContrario: "20240327" },
    { nome: "Fábio", idade: 46, peso: 80, tipoSanguineo: "O+", dataAoContrario: "20240418" },
    { nome: "Catarina", idade: 20, peso: 57, tipoSanguineo: "AB-", dataAoContrario: "20240212" },
    { nome: "Alex", idade: 55, peso: 90, tipoSanguineo: "B+", dataAoContrario: "20240610" },
    { nome: "Priscila", idade: 36, peso: 62, tipoSanguineo: "O-", dataAoContrario: "20241114" },
    { nome: "Hugo", idade: 42, peso: 85, tipoSanguineo: "A-", dataAoContrario: "20240530" },
    { nome: "Davi", idade: 33, peso: 74, tipoSanguineo: "AB+", dataAoContrario: "20231025" },
    { nome: "Marcos", idade: 38, peso: 77, tipoSanguineo: "A+", dataAoContrario: "20240901" },
    { nome: "Lorena", idade: 26, peso: 69, tipoSanguineo: "B+", dataAoContrario: "20230329" },
    { nome: "Brenda", idade: 22, peso: 59, tipoSanguineo: "O+", dataAoContrario: "20240803" },
    { nome: "Caio", idade: 29, peso: 82, tipoSanguineo: "A-", dataAoContrario: "20240228" },
    { nome: "Luana", idade: 41, peso: 67, tipoSanguineo: "AB-", dataAoContrario: "20240107" },
    { nome: "Felipe", idade: 48, peso: 86, tipoSanguineo: "O+", dataAoContrario: "20230826" },
    { nome: "Vitoria", idade: 25, peso: 60, tipoSanguineo: "B+", dataAoContrario: "20230712" },
    { nome: "Thiago", idade: 37, peso: 79, tipoSanguineo: "O-", dataAoContrario: "20231109" },
    { nome: "Carla", idade: 31, peso: 63, tipoSanguineo: "A+", dataAoContrario: "20230924" },
    { nome: "Nathan", idade: 20, peso: 58, tipoSanguineo: "B-", dataAoContrario: "20240308" },
    { nome: "Evelyn", idade: 18, peso: 55, tipoSanguineo: "AB-", dataAoContrario: "20241005" },
    { nome: "Eduardo", idade: 22, peso: 67, tipoSanguineo: "A-", dataAoContrario: "20240503" },
    { nome: "Vivian", idade: 45, peso: 70, tipoSanguineo: "AB+", dataAoContrario: "20230720" },
    { nome: "Joana", idade: 27, peso: 62, tipoSanguineo: "B+", dataAoContrario: "20230802" },
    { nome: "Igor", idade: 50, peso: 88, tipoSanguineo: "A+", dataAoContrario: "20241105" },
    { nome: "Larisa", idade: 36, peso: 61, tipoSanguineo: "O+", dataAoContrario: "20230913" },
    { nome: "Livia", idade: 28, peso: 63, tipoSanguineo: "B-", dataAoContrario: "20240402" },
    { nome: "Anderson", idade: 39, peso: 78, tipoSanguineo: "O-", dataAoContrario: "20240517" },
    { nome: "Tatiane", idade: 23, peso: 56, tipoSanguineo: "AB-", dataAoContrario: "20240313" },
    { nome: "Renata", idade: 33, peso: 73, tipoSanguineo: "B+", dataAoContrario: "20240629" },
    { nome: "Luan", idade: 40, peso: 83, tipoSanguineo: "A-", dataAoContrario: "20240721" },
    { nome: "Giulia", idade: 17, peso: 58, tipoSanguineo: "O+", dataAoContrario: "20241102" },
    { nome: "Jonathan", idade: 31, peso: 72, tipoSanguineo: "AB+", dataAoContrario: "20240806" },
    { nome: "Michele", idade: 19, peso: 57, tipoSanguineo: "A+", dataAoContrario: "20240716" },
    { nome: "Leonardo", idade: 35, peso: 84, tipoSanguineo: "O-", dataAoContrario: "20240731" },
    { nome: "Suzana", idade: 42, peso: 69, tipoSanguineo: "AB+", dataAoContrario: "20240601" },
    { nome: "Alexandre", idade: 53, peso: 88, tipoSanguineo: "B+", dataAoContrario: "20240411" },
    { nome: "Ana Carla", idade: 27, peso: 64, tipoSanguineo: "O+", dataAoContrario: "20240307" },
    { nome: "Marta", idade: 24, peso: 59, tipoSanguineo: "A-", dataAoContrario: "20240609" },
    { nome: "Pedro Henrique", idade: 29, peso: 74, tipoSanguineo: "O-", dataAoContrario: "20240214" },
    { nome: "Cristina", idade: 38, peso: 67, tipoSanguineo: "A+", dataAoContrario: "20240725" },
    { nome: "Leandro", idade: 26, peso: 71, tipoSanguineo: "AB-", dataAoContrario: "20241121" },
    { nome: "Célia", idade: 32, peso: 68, tipoSanguineo: "B+", dataAoContrario: "20240912" },
    { nome: "Raquel", idade: 46, peso: 73, tipoSanguineo: "O+", dataAoContrario: "20241028" },
    { nome: "Danilo", idade: 31, peso: 75, tipoSanguineo: "A-", dataAoContrario: "20240923" },
    { nome: "Lucas", idade: 34, peso: 81, tipoSanguineo: "AB+", dataAoContrario: "20240722" },
    { nome: "Monique", idade: 30, peso: 62, tipoSanguineo: "A+", dataAoContrario: "20241017" },
    { nome: "Enzo", idade: 25, peso: 69, tipoSanguineo: "O-", dataAoContrario: "20240908" },
    { nome: "João Pedro", idade: 28, peso: 74, tipoSanguineo: "B+", dataAoContrario: "20240719" },
    { nome: "Milena", idade: 40, peso: 65, tipoSanguineo: "A+", dataAoContrario: "20240515" },
    { nome: "Samuel", idade: 44, peso: 79, tipoSanguineo: "O+", dataAoContrario: "20240612" },
    { nome: "Caroline", idade: 21, peso: 61, tipoSanguineo: "B-", dataAoContrario: "20240322" },
    { nome: "Vitor", idade: 37, peso: 80, tipoSanguineo: "A-", dataAoContrario: "20241108" },
    { nome: "Débora", idade: 39, peso: 72, tipoSanguineo: "AB-", dataAoContrario: "20240506" },
    { nome: "Igor", idade: 28, peso: 68, tipoSanguineo: "B+", dataAoContrario: "20240916" },
    { nome: "Ludmila", idade: 22, peso: 60, tipoSanguineo: "A+", dataAoContrario: "20240730" },
    { nome: "Tânia", idade: 34, peso: 74, tipoSanguineo: "O-", dataAoContrario: "20240911" },
    { nome: "Rodolfo", idade: 42, peso: 82, tipoSanguineo: "A-", dataAoContrario: "20240319" },
    { nome: "Marcela", idade: 29, peso: 66, tipoSanguineo: "AB+", dataAoContrario: "20240524" },
];







//cadastro
function cadastroDeDoador () {
// Perguntas para o cadastro
    let nome = readline.question("-Nome: ");

    
    let idade = readline.questionInt("-Idade: ");
    let peso = readline.questionInt("-Peso (Em kg): ");
    
    console.log("-Tipos sanguineos: \n1. A+ \n2. B+ \n3. AB+ \n4. O+ \n5. A- \n6. B- \n7. AB- \n8. O-");
    const tipoSanguineoEscolido = Number(readline.question('-Digite o numero conforme o tipo sanguineo desejado: '));

    definicao(tipoSanguineoEscolido);
    function definicao(num) {
        let tipoSanguineo;

        switch (num) {
            case 1:
                tipoSanguineo = "A+";
                break;
            case 2:
                tipoSanguineo = "B+";
                break;
            case 3:
                tipoSanguineo = "AB+";
                break;
            case 4:
                tipoSanguineo = "O+";
                break;
            case 5:
                tipoSanguineo = "A-";
                break;
              case 6:
                tipoSanguineo = "B-";
                break;
            case 7:
                tipoSanguineo = "AB-";
                break;
            case 8:
                tipoSanguineo = "O-";
                break;
            default:
                console.log("\nOpcao invalida\n");
                return;
    }
    while (true) {
    let dataDeDoacaoCadastro = String(readline.question("-Digite a data de doacao  (DD/MM/AAAA): "));
    let data = dataDeDoacaoCadastro.split('/');


    if (data[1] === '01' || data[1] === '02' ||  data[1] === '03'  || data[1] === '04' ||data[1] === '05'  || data[1] === '06' ||  data[1] === '07' ||  data[1] === '08' || data[1] === '09' ||  data[1] === '10' || data[1] === '11' || data[1] === '12' ) {
        let dataAoContrario = String(data[2] + data[1] + data[0]);

        //Armazena Tudo
        lista.push({nome,idade,peso,tipoSanguineo,dataAoContrario})
    
        let anoJunto = dataAoContrario.substring(0, 4);  
        let mesJunto = dataAoContrario.substring(4, 6);
        let diaJunto = dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    
        console.log(`\nInformacoes registradas com sucesso\n===Informacoes salvas===`)
        console.log(`-Nome: ${nome}\n-Idade: ${idade}\n-Peso(em Kg): ${peso}\n-Tipo Sanguineo: ${tipoSanguineo}\n-Data: ${dataCorreta}`);
        return;
        }
    else {console.log('Data Invalida. Digite a data corretamente em formato (DD/MM/AAAA)\n')}

        }
    }
}





// Lista de Cadastrados  
function listaDeDoadores () {

    console.log("\n-------------------------   LISTAGEM DE DOADORES:   -------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
      
        for (let i = 0; i < lista.length; i++) {
        
            
            let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
            let mesJunto = lista[i].dataAoContrario.substring(4, 6);
            let diaJunto = lista[i].dataAoContrario.substring(6, 8);
            let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
            
            console.log(`${lista[i].nome.padEnd(21)}|   ${String(lista[i].idade).padEnd(6)}|  ${lista[i].peso}kg  |        ${lista[i].tipoSanguineo.padEnd(8)}  |    ${dataCorreta} `);
        }
    console.log("-----------------------------------------------------------------------------")
}





// Buscar Doador por tipo sanguineo
function buscarDoadorTipoAMais () {
    console.log("\n\n\n-------------------------   RESULTADO DA BUSCA:   -------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "A+") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome.padEnd(21)}|   ${String(lista[i].idade).padEnd(5)} |  ${lista[i].peso}kg  |        ${lista[i].tipoSanguineo.padEnd(9)} |    ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoBMais () {
    console.log("\n-------------------------   LISTAGEM DE DOADORES:   -------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "B+") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome.padEnd(21)}|   ${String(lista[i].idade).padEnd(5)} |  ${lista[i].peso}kg  |        ${lista[i].tipoSanguineo.padEnd(9)} |    ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoABMais () {
    console.log("\n-------------------------   LISTAGEM DE DOADORES:   ------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "AB+") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome.padEnd(21)}|   ${String(lista[i].idade).padEnd(5)} |  ${lista[i].peso}kg  |        ${lista[i].tipoSanguineo.padEnd(9)} |    ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoOMais () {
    console.log("\n-------------------------   LISTAGEM DE DOADORES:   ------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "O+") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome.padEnd(21)}|   ${String(lista[i].idade).padEnd(5)} |  ${lista[i].peso}kg  |        ${lista[i].tipoSanguineo.padEnd(9)} |    ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoAMenos () {
    console.log("\n-------------------------   LISTAGEM DE DOADORES:   ------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "A-") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome.padEnd(21)}|   ${String(lista[i].idade).padEnd(5)} |  ${lista[i].peso}kg  |        ${lista[i].tipoSanguineo.padEnd(9)} |    ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoBMenos () {
    console.log("\n-------------------------   LISTAGEM DE DOADORES:   ------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "B-") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome.padEnd(21)}|   ${String(lista[i].idade).padEnd(5)} |  ${lista[i].peso}kg  |        ${lista[i].tipoSanguineo.padEnd(9)} |    ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoABMenos () {
    console.log("\n-------------------------   LISTAGEM DE DOADORES:   ------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "AB-") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome.padEnd(21)}|   ${String(lista[i].idade).padEnd(5)} |  ${lista[i].peso}kg  |        ${lista[i].tipoSanguineo.padEnd(9)} |    ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoOMenos () {
    console.log("\n-------------------------   LISTAGEM DE DOADORES:   ------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "O-") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome.padEnd(21)}|   ${String(lista[i].idade).padEnd(5)} |  ${lista[i].peso}kg  |        ${lista[i].tipoSanguineo.padEnd(9)} |    ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoSangue () {
    console.log("\n\n\n-Tipos sanguineos: \n1. A+ \n2. B+ \n3. AB+ \n4. O+ \n5. A- \n6. B- \n7. AB- \n8. O- \n9. Voltar");

    const escolhaDoSangue = Number(readline.question('Digite o numero conforme o tipo sanguineo desejado: '))

    switch (escolhaDoSangue) {
        case 1: 
        buscarDoadorTipoAMais()
            break;
        case 2:
        buscarDoadorTipoBMais()
            break;
        case 3:
        buscarDoadorTipoABMais()
            break;
        case 4:
        buscarDoadorTipoOMais()
            break;
        case 5:
        buscarDoadorTipoAMenos() 
            break;
        case 6:
        buscarDoadorTipoBMenos()
            break;
        case 7:
        buscarDoadorTipoABMenos()
            break;
        case 8:
        buscarDoadorTipoOMenos()
            break;
        case 9:
            console.log("\nVoltando...")
            return;
        default:
            console.log("\nOpcao invalida\n");
            return;
    }

};





// buscar por data de doacao
function buscarDoadorDataDoacao() {
    while (true) {
 
        let opcaoDeBusca = String(readline.question("-Digite a data de doacao para buscar (DD/MM/AAAA): "));
        
 
        let opcaoCortada = opcaoDeBusca.split('/');
        if (opcaoCortada.length !== 3) {
            console.log("Formato de data inválido. Tente novamente.\n");
            continue;
        }

        let dataAoContrarioDeBusca = opcaoCortada[2] + opcaoCortada[1] + opcaoCortada[0];

        console.log(`\n------------------ LISTAGEM DE DOADORES ATÉ ${opcaoDeBusca}: ------------------`);
        console.log("NOME              |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO");

        let doadoresEncontrados = 0;

        
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].dataAoContrario <= dataAoContrarioDeBusca) {
                let anoJunto = lista[i].dataAoContrario.substring(0, 4);
                let mesJunto = lista[i].dataAoContrario.substring(4, 6);
                let diaJunto = lista[i].dataAoContrario.substring(6, 8);
                let dataCorreta = `${diaJunto}/${mesJunto}/${anoJunto}`;
                
                console.log(`${lista[i].nome.padEnd(18)}|   ${String(lista[i].idade).padEnd(5)} |  ${String(lista[i].peso)}kg  |        ${lista[i].tipoSanguineo.padEnd(10)}|    ${dataCorreta}`);
                doadoresEncontrados++;
            }
        }

        if (doadoresEncontrados === 0) {
            console.log("Nenhum doador encontrado até esta data.\n");
        }
        console.log("-----------------------------------------------------------------------------");
        return;
    }
}





// Menu
function exibirMenu () {
    let opcao;
    while (true) {
        opcao = Number(readline.question("\n===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE ===== \n\n1. Cadastrar doador \n2. Listar doadores \n3. Buscar doador por tipo sanguineo \n4. Buscar doador por data da ultima doacao \n5. Sair \n-Escolha uma numero correspondente a opcao desejada: "));
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
                break;
        }
    }
};

exibirMenu();