import { distrito } from "./Distrito";

export class tributo{
    /* Atributos */
    private nome:string;
    private saude:number;
    protected distrito:distrito;
    private segredo:string;
    private habilidades:string[];
    

    /* Construtor */
    constructor(nomeTributo:string, saudeTributo:number,distritoTributo:distrito,segredoTributo:string, habilidadesTributo:string[]){
        this.nome = nomeTributo;
        this.saude = saudeTributo;
        this.distrito = distritoTributo;
        this.segredo = segredoTributo;
        this.habilidades = habilidadesTributo;
    };

    

    /* Sett */
    public setNome():void{this.nome};
    public setSaude():void{this.saude};
    public setDistrito():void{this.distrito};
    public setSegredo():void{this.segredo};
    public setHabilidades():void{this.habilidades};

    /* Getters */
    public getNome():string{return this.nome};
    public getSaude():number{return this.saude};
    public getDistrito():distrito{return this.distrito};
    public getSegredo():string{return this.segredo};
    public getHabilidades():string[]{return this.habilidades};


    /* Metodos */
    public receberDano(quantity:number):void{
        console.log("recebeu "+quantity,"de dano");
        this.saude = this.saude - quantity;

            if (this.saude <= 0) {
                console.log(`${this.nome} MORREU!`);
            }
            else{console.log(`Ele ainda tem ${this.saude}`);
        };
    };

    public mostrarVida():number {
        return this.saude;
    };

    public verHabilidades():void{
            console.log(this.getHabilidades());
    };

    public coletarRecursos(recursoColetado:string){ 
        this.distrito.tirarRecurso(recursoColetado);
        console.log(`Tributo coletou ${recursoColetado}`)
    }
    
};