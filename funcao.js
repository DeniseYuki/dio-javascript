

function quadrado(valor){
    return valor * valor;   
}

const quadradodeDez = quadrado(10);
console.log(quadradodeDez);
console.log(quadradodeDez + quadradodeDez);

function incrementarJuros(valor,percentual){
    return (valor * (percentual / 100)) + valor;
}
const valorJuros = incrementarJuros(100,50);
const valorJuros1 = incrementarJuros(1000,75);
console.log( valorJuros);
console.log(valorJuros1);


