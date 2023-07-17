function multiplica_qualquer(vetor, multiplicador){
    let resultado = vetor.map((numero) => {
        return numero * multiplicador;
    })

    return resultado;
}

function multiplica_maior_5(vetor, multiplicador){
    
    if(multiplicador > 5){
        let resultado = vetor.map((numero) => {
            return numero * multiplicador;
        })
    
        return resultado;
    }
    
}
let vetor = [1, 2, 3, 4, 5]

console.log(multiplica_qualquer(vetor, 3))
console.log(multiplica_maior_5(vetor, 11))