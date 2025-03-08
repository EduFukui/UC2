export class distrito {
    private nome: string
    private populacao: number
    protected recurso: string[]

    constructor(nomeDistrito: string, populacao: number, recurso: string[]) {
        this.nome = nomeDistrito
        this.recurso = recurso
        this.populacao = populacao
    }

    public setNome(nome: string): void {
        this.nome = nome
    };

    public setPopulacao(populacao: number): void {
        this.populacao = populacao
    };



    public setRecurso(recurso: string[]): void {
        this.recurso = recurso
    };

    public getNome(): string {
        return this.nome
    }

    public getPopu(): number {
        return this.populacao
    }


    public getRecurso(): string[] {
        return this.recurso
    }

    public tirarRecurso(recurso:string){
        this.recurso.splice(this.recurso.findIndex((recurso) => recurso),1);
    }


    public ExibirDistrito(): void { console.log(`Os recursos do  ${this.nome} com a população de: ${this.populacao} tributos e os recursos disponiveis são: ${this.recurso}!`) }

};