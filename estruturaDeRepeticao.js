// estrutura de repeteção
const notas = [];

notas.push(4);
notas.push(7);
notas.push(8);
notas.push(9);
notas.push(10);

console.log(notas);

function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  const media = soma / notas.length;
  return media;
}

const mediaNotas = calcularMedia(notas);
console.log('A média das notas é:', mediaNotas);


const nome = 'DENISE YUKI';
for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
    
}
