import readlineSync from 'readline-sync';

import { distrito } from './Distrito';
import { tributo } from './Tributo';
import { organizador } from './organizador';



const distrito12 = new distrito("Distrito 12",8000,["carvão"])
const distrito2 = new distrito("Distrito 2",2000,["Pedreira de Pedras","Marmore","Armas","Munições"])
const distrito3 = new distrito("Distrito 3",5000,["Eletronicos","Dispositivos avançados","Automação","Robotica"]);


const nome = String(readlineSync.question('Qual e o seu nome tributo numero 1? '));
const habilidade1 = String(readlineSync.question('Qual e a sua habilidade? '))
let tributo1 = new tributo(nome,10,distrito2,'Mal',[habilidade1,'Curandeiro'])

console.log(tributo1.getSaude())
tributo1.receberDano(10)
console.log(tributo1.getSaude())
tributo1.verHabilidades()


const organizador2 = new organizador("Coriolanus Snow",[distrito12])
const organizador1 = new organizador("Coriolanus Snow",[distrito2])


console.log(organizador2.getNome())
organizador2.mostrarDistritos()
organizador1.mostrarDistritos()

organizador1.criarDesastre()
organizador1.LiberarAnimais()

tributo1.coletarRecursos("Arma")
tributo1.coletarRecursos("Munição")
distrito2.tirarRecurso("Arma")
