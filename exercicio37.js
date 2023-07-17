function progressao_aritmetica(numero_termo, primeiro_termo, razao){
    let termoAtual = primeiro_termo;
    for(let i = 0; i < numero_termo; i++){
        console.log(termoAtual);
        termoAtual += razao
    }
    
    const enesima_posicao = primeiro_termo + (numero_termo - 1) * razao;
    let soma = ((primeiro_termo + enesima_posicao) * numero_termo) / 2;
    console.log('Soma: ' + soma);
}

function progressao_geometrica(numero_termo, primeiro_termo, razao){
    let termoAtual = primeiro_termo;
    for(let i = 0; i < numero_termo; i++){
        console.log(termoAtual);
        termoAtual *= razao
    };
    let soma = (primeiro_termo * ((razao ** numero_termo) - 1)) / (razao - 1);
    console.log('Soma: ' + soma);
}

progressao_aritmetica(10, 10, 15)
console.log('----------------');
progressao_geometrica(10, 5, 3)