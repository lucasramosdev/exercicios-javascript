function separador_notas(valor){
    const notas = [100, 50, 10, 5, 1];
    let notas_utilizadas = { 100: 0, 50: 0, 10: 0, 5: 0, 1: 0};
    notas.forEach((nota) => {
        while(valor >= nota){
            valor = valor - nota;
            notas_utilizadas[nota] += 1;
        }
    })
    
    let retorno_notas = '';
    let keys_ordenadas = Object.keys(notas_utilizadas).sort(function(a, b) {
        return b - a;
    });

    keys_ordenadas.forEach((key) =>{
        if(notas_utilizadas[key] !== 0){
            retorno_notas += `${notas_utilizadas[key]} notas(s) de R$ ${key}. `
        }
    })

    return retorno_notas;
}

console.log(separador_notas(153));