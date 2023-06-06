const cadastro = {
    nome: "Denise", // nome é a chave e a "Denise" o valor
    idade: 32
}
// um objeto em JS é uma coleção dinamica de "chave e valor", então é dinamico posso adicionar ou remover 

console.log(cadastro.nome);
console.log(cadastro.idade);
console.log(cadastro); // imprime o objeto todo

// adicionando um novo elemento no objeto
cadastro.sexo = "Feminino";
console.log(cadastro);

// excluindo um valor

delete cadastro.idade;
console.log(cadastro);

// utilizar função dentro de um objeto no qual chamamos de método
// método descrever dentro do objeto pessoa
const pessoa = {
    nome: "José",
    idade: 25,
descrever: function () { 
    console.log(` seu nome é ${this.nome} e sua idade é ${this.idade}`);
}
};

pessoa.descrever(); 

// adicionando outros valores

pessoa.nome = "Carlos";
pessoa.idade =  36;

pessoa.descrever();


// Acessar com uma sintaxe mais dinamica exemplo 1

const atributo = 'idade';
console.log(pessoa[atributo]);  
// Acessar com uma sintaxe mais dinamica exemplo 2
console.log(pessoa['nome']);








