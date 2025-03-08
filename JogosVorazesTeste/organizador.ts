import { distrito } from "./Distrito";

export class organizador{
public nome: string;
private distritos: distrito[];


constructor(nome:string, distritos: distrito[]){
    this.nome = nome
    this.distritos = distritos
}

setNome(nome: string): void{this.nome = nome}
setDistritos(distritos: distrito[]): void{this.distritos = distritos}

getNome(): string{return this.nome}
getDistritos(): distrito[]{return this.distritos}

LiberarAnimais(): void {console.log(`O organizador liberou os animais `)}


criarDesastre(): void {console.log(`O organizador causou um desastre`)}

mostrarDistritos():void{
    for(let cont:number = 0; cont<this.distritos.length; cont++){
        console.log(`\nNome do Distrito: ${this.distritos[cont].getNome()} \nRecuros do Distrito: ${this.distritos[cont].getRecurso()} \nPopulação: ${this.distritos[cont].getPopu()}\n`)
    }
}

}





