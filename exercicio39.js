function troca_vetores(vetorA, vetorB){
    if(vetorA.length !== vetorB.length){
        return 'Vetores de tamanhos diferentes';
    }

    for(let i = 0; i < vetorA.length; i++){
        vetorA[i] = vetorA[i] + vetorB[i];
        vetorB[i] =  vetorA[i] - vetorB[i];
        vetorA[i] = vetorA[i] - vetorB[i];
    }

    console.log(vetorA, vetorB);
};

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]
troca_vetores(vetorA, vetorB)