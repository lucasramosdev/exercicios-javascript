function calcular_mensalidade(idade){
    const VALOR_BASE = 100;
    if(idade > 125 || idade <= 0){
        return 'Idade inválida';
    }
    else if(idade < 10){
        return VALOR_BASE + 80;
    }
    else if(10 <= idade &&  idade <= 30){
        return VALOR_BASE + 50;
    }
    else if(31 <= idade && idade <= 60){
        return VALOR_BASE + 95;
    }
    else {
        return VALOR_BASE + 130;
    }
}


console.log(calcular_mensalidade(8));
console.log(calcular_mensalidade(15));
console.log(calcular_mensalidade(35));
console.log(calcular_mensalidade(52));
console.log(calcular_mensalidade(80));