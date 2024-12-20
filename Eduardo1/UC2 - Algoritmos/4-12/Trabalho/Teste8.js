/*const readline = require('readline');

// Cria uma interface para entrada e saída no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const registros = []; // Array para armazenar os dados cadastrados

// Função para perguntar dados ao usuário
function perguntarDados() {
  rl.question('Digite o nome: ', (nome) => {
    rl.question('Digite a data de nascimento (formato DD/MM/AAAA): ', (dataNascimento) => {
      const [dia, mes, ano] = dataNascimento.split('/').map(Number);
      const dataAtual = new Date();
      const dataNasc = new Date(ano, mes - 1, dia);
      const idade = dataAtual.getFullYear() - ano - (dataAtual < new Date(ano, mes - 1, dia) ? 1 : 0);

      registros.push({ nome, dataNascimento, idade }); // Adiciona os dados no array

      console.log('\nCadastro realizado com sucesso!\n');
      console.log(`Nome: ${nome}`);
      console.log(`Data de Nascimento: ${dataNascimento}`);
      console.log(`Idade: ${idade}\n`);

      rl.question('Deseja cadastrar outro usuário? (s/n): ', (resposta) => {
        if (resposta.toLowerCase() === 's') {
          perguntarDados(); // Chama novamente para outro cadastro
        } else {
          console.log('\nRegistros cadastrados:');
          console.table(registros); // Exibe os registros em forma de tabela
          rl.close(); // Encerra o readline
        }
      });
    });
  });
}

// Inicia o processo
perguntarDados();
*/



const readline = require('readline');

// Configuração do readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array para armazenar os dados dos usuários
const usuarios = [];

// Função para solicitar entrada do usuário
const perguntar = (pergunta) => {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => resolve(resposta));
  });
};

// Função para validar a data
const validarData = (data) => {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/; // Formato DD/MM/AAAA
  if (!regex.test(data)) {
    return false;
  }

  const [dia, mes, ano] = data.split('/').map(Number);

  // Verificar se a data é válida
  const dataObj = new Date(ano, mes - 1, dia);
  return (
    dataObj.getFullYear() === ano &&
    dataObj.getMonth() === mes - 1 &&
    dataObj.getDate() === dia
  );
};

// Função principal para cadastro
const cadastrarUsuario = async () => {
  console.log("=== Cadastro de Usuário ===");
  try {
    const nome = await perguntar("Digite o nome: ");
    
    let dataNascimento;
    while (true) {
      dataNascimento = await perguntar("Digite a data de nascimento (DD/MM/AAAA): ");
      if (validarData(dataNascimento)) {
        break; // Sai do loop se a data for válida
      } else {
        console.log("Data inválida. Por favor, insira no formato DD/MM/AAAA.");
      }
    }

    // Salvar os dados no array
    usuarios.push({ nome, dataNascimento });
    console.log("Usuário cadastrado com sucesso!");

    // Perguntar se deseja cadastrar outro usuário
    const continuar = await perguntar("Deseja cadastrar outro usuário? (s/n): ");
    if (continuar.toLowerCase() === 's') {
      await cadastrarUsuario(); // Chama a função novamente para outro cadastro
    } else {
      console.log("\n=== Lista de Usuários Cadastrados ===");
      console.table(usuarios); // Mostra os usuários cadastrados no console
      rl.close();
    }
  } catch (error) {
    console.error("Ocorreu um erro:", error);
    rl.close();
  }
};

// Iniciar o programa
cadastrarUsuario();

