const professor = {
    nome: 'leo',
    idade: 29,
    disciplina: ['algoritmos','banco de dados','java']
}

const nomeProfessor = {
    ...professor,
    nome:'lucas',
    idade: 30,
    veiculo: 'carro'
    
}
console.log(professor)
console.log(nomeProfessor)
/*   disciplina: ['banco de dados','planejamento','frontend']*/

// spread é uma copia de objeto, tb funciona para array (...)





