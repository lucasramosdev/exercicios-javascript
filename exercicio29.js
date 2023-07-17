function esta_entre_10_20(vetor){
    let dentro = 0;
    let fora = 0;
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            dentro++;
        }
        else{
            fora++;
        };
    };

    return `Existem ${dentro} números dentro do intervalo e ${fora} números fora do intervalo`;
};

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(esta_entre_10_20(vetor));