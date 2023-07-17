function atribuidor_conceito(vetor){
    vetor.forEach(nota => {
        let conceito = retornar_conceito(nota);
        console.log(`Nota: ${nota}, Conceito: ${conceito}`);
    });
};

function retornar_conceito(nota){
    if(nota >= 0 && nota <= 4.9){
        return 'D';
    }
    else if(nota >= 5 && nota <= 6.9){
        return 'C';
    }
    else if(nota >= 7 && nota <= 8.9){
        return 'B';
    }
    else if(nota >= 9 && nota <= 10){
        return 'A';
    }

    return 'Nota inválida';
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8];
atribuidor_conceito(notas);