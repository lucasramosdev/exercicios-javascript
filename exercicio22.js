function calculo_anuidade(mes, valor_pago){
    const TAXA_JUROS = 0.05;
    const MESES_ATRASADOS  = mes - 1;
    valida_mes(mes);

    return (valor_pago * ((1+TAXA_JUROS) ** MESES_ATRASADOS)).toFixed(2);
};

function valida_mes(mes){
    if(mes < 1 || mes > 13){
        throw 'Mês invalido';
    };
};

console.log(calculo_anuidade(4, 100))