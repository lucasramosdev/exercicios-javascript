function calcular_aumento(plano, salario){
    switch(plano.toUpperCase()){
        case 'A':
            salario += salario * 0.10;
            break;
        case 'B':
            salario += salario * 0.15;
            break;
        case 'C':
            salario += salario * 0.20;
            break;
        default:
            return 'Plano inválido';
    }

    return salario;
}

console.log(calcular_aumento('A', 1000));
console.log(calcular_aumento('B', 1000));
console.log(calcular_aumento('C', 1000));
console.log(calcular_aumento('D', 1000));