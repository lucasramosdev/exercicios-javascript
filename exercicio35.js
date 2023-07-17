function juntar_vetores(){
    let vetorPilha =  [1, 2, 3, 4, 5];
    let vetorAdiciona =  [6, 7, 8, 9, 10];
    
    vetorAdiciona.forEach((numero) => {
        vetorPilha.push(numero);
    })

    console.log('Vetor adicionado: ' + vetorAdiciona );
    console.log('Vetor resultado: ' + vetorPilha);
}

juntar_vetores()