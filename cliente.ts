export class cliente {
    constructor(
        public nome: string, 
        public idade: number){        
    }

    mostrarNome(){
        console.log('Meu nome é', this.nome);
        
    }

    mostrarIdade(){
        console.log('Minha idade é', this.idade);
    }
}