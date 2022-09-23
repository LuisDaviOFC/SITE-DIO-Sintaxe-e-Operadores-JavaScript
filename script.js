function ComparaNumeros(num1, num2){
    const PrimeiraFase = criaPrimeiraFase(num1, num2);
    const SegundaFase =  criaSegundaFase(num1, num2);

    return `${PrimeiraFase} ${SegundaFase}`
}

function criaPrimeiraFase(num1, num2){
    let SaoIguais = '';
    if(num1 !== num2){
        SaoIguais = 'não'
    }

    return `Os numeros ${num1} e ${num2} ${SaoIguais} são iguais.`
};

function criaSegundaFase(num1, num2){
    const soma = num1 + num2;
    let Resultado10 = 'menor';
    let Resultado20 = 'menor';  
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        Resultado10 = 'maior';
    }

    if(compara20){
        Resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${Resultado10} que 10 e ${Resultado20} que 20`;
};

console.log(ComparaNumeros(1,2));