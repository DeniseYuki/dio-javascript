// Lista
const lista = ['João','Ana', 'Maria'];
console.log(lista);

// acessar a o valor pela posição da lista

console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);

//adicionar um item a lista

lista.push('Renan')
console.log(lista)
lista[4] = "Carlos";
console.log(lista);
//remover um item da lista
//lista.pop();  retira o último valor
console.log(lista.pop());
console.log(lista);
console.log(lista.shift());  //remove o primeiro
console.log(lista);

//remover um item da lista pelo valor
const pessoa = lista.indexOf('João');
console.log(pessoa);

// Tamanho de uma lista

const nota = []; /// lista vazia
nota.push(7);
nota.push(8);
nota.push(9);
console.log(nota.length);
const soma = nota[0]+nota[1]+nota[2];
const media = soma /nota.length;
console.log(media);



// A lista pode comecar vazia

const aluno = [];
aluno.push('teste'); // pode ter diferentes tipos na lista
aluno.push(10);
console.log(aluno);

