function imprimir_negativos(vetores){
    let contador_negativos = 0;
    for(let i = 0; i < vetores.length; i++){
        vetor = vetores[i];
        if (vetor < 0){
            contador_negativos++;
        };
    };

    console.log(`O número de negativos é ${contador_negativos}`);

}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

imprimir_negativos(vetor)