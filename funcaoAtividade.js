function meuNome(nome){
    console.log(`Meu nome é ${nome}.`)
}

function Idade(idade){
    if(idade < 18){
        return console.log("Adolescente");
    }
    else if(idade =>18 && idade < 30){
        return console.log("Jovem Adulto");
    }
    else if(idade > 30 && idade < 60){
        return console.log("Adulto");
}
    else if(idade > 60);
    return console.log("Idoso");
}
function main(){
meuNome("Denise Yuki");
Idade(32)
meuNome("Veronica")
Idade(19)
meuNome("Victoria")
Idade(18)
}

main();