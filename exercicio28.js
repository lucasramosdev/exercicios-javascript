function definir_pares_impares(numeros){
    let quantidade_pares = 0;
    let quantidade_impares = 0;
    numeros.forEach(numero => {
        if(numero % 2 == 0){
            quantidade_pares++
        }
        else{
            quantidade_impares++
        }
    });

    return `A quantidade de pares é ${quantidade_pares} e a quantidade de impares é ${quantidade_impares}`;
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(definir_pares_impares(vetor))