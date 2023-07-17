function calcular_crescimento(altura1, taxa1, altura2, taxa2){
    let crianca1 = {altura: altura1, taxa: taxa1};
    let crianca2 = {altura: altura2, taxa: taxa2};

    if(crianca1 === crianca2){
        return 'As crianças terão o mesmo tamanho.';
    }
    else if(crianca1.altura === crianca2.altura){
        return crianca1.taxa > crianca2.taxa ? 'A criança 1 passará a criança 2 em 1 ano.' : 'A criança 2 passará a criança 1 em 1 ano.'
    }

    const menor = pegar_o_menor(crianca1, crianca2);
    const maior = menor !== crianca1 ? crianca1 : crianca2;

    return proximas_idades(maior, menor);
    
    
}

function proximas_idades(maior, menor){ 

    if(menor.taxa > maior.taxa){
        let anos = 0;
        while (menor.altura < maior.altura){
            menor.altura = menor.altura + menor.taxa;
            maior.altura = maior.altura + maior.taxa;
            anos++;
        }

        return `A criança menor passará a maior em ${anos} anos.`
    }

    return 'A criança menor não passará a maior';
}

function pegar_o_menor(crianca1, crianca2){
    let diferenca_altura = crianca1.altura - crianca2.altura;
    if(diferenca_altura < 0){
        return crianca1;
    }

    return crianca2;
};

console.log(calcular_crescimento(150, 2, 130, 4));
