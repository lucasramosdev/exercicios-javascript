function definir_extremos(vetor){
    let maior = vetor[0];
    let menor = vetor[0];
    vetor.forEach(numero => {
        if(numero > maior){
            maior = numero;
        }

        else if(numero < menor){
            menor = numero
        }
    });

    return [maior, menor];
};

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];

console.log(definir_extremos(vetor));