function calcular_media_aritimetica(numeros){
    const soma = numeros.reduce(function(soma, numero){
        return soma + numero;
    });

    return soma / numeros.length;
}

vetor = [1, 2, 3, 4, 5]

console.log(calcular_media_aritimetica(vetor))