function calcularImc(peso,altura){
    return peso / (altura * altura)
}



function classificarImc(imc){
    if(imc < 18.5){
        return 'abaixo do pesso'
}
else if(imc < 25){
    return 'normal'
}
else if(imc < 30){
    return 'acima do peso'
}
else if(imc < 35){
    return 'obesidade'
}
else if(imc < 40){
    return 'obesidade morbida'
}
else{
    return 'obesidade morbida grave'
}
}
function main(){
const peso = 75;
const altura = 1.75; 
const imc = calcularImc(peso,altura);
console.log(imc);
console.log(classificarImc(imc));
}

main();