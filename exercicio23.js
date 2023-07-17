function calcular_nota(codigo, nota1, nota2, nota3){
    let notas = [nota1, nota2, nota3];
    const media = calcular_media(notas);
    let aprovacao;
    if(media >= 5){
        aprovacao = 'APROVADO'
    }
    else {
        aprovacao = 'REPROVADO'
    }

    console.log(`Aluno: ${codigo}  - Notas: ${notas.join(', ')} - Resultado: ${aprovacao}`);

}

function calcular_media(notas){
    const pesos = [4, 3, 3];

    notas = notas.sort(function(a, b){
        return b - a;
    });

    let atribuindo_peso_nota = notas.map((nota, index) => {
        return nota * pesos[index]
    });
    
    let soma_notas = atribuindo_peso_nota.reduce(function(soma, nota){
        return soma + nota;
    });

    let pesos_somados = pesos.reduce(function(soma, peso){
        return soma + peso;
    });


    let media = soma_notas / pesos_somados;

    return media;
}

calcular_nota(123, 2.8, 6, 3.5)