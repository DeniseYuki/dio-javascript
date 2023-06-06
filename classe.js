// classe e instancia 
class Pessoa{
   nome;
   idade;
   anoDeNascimento;

   //construtor
   constructor(nome, idade){
   this.nome = nome;
   this.idade = idade;
   this.anoDeNascimento = 2023 - idade;

}
//metodo
   descrever(){
    console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} meu ano de nascimento é ${this.anoDeNascimento}`);
   }

}
// instancia
const ana = new Pessoa('Ana',25);
const jose = new Pessoa();
jose.nome = 'José'; 
jose.idade = 35;
jose.anoDeNascimento = 2023 - jose.idade;

const maria = new Pessoa();
maria.nome = 'Maria';
maria.idade = 30;
maria.anoDeNascimento =  2023 - maria.idade;


// verificar os valores
console.log(jose);
console.log(maria);


//chamar o método
jose.descrever();
maria.descrever();
ana.descrever();