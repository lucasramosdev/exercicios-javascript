function calculadora(numero1, operador, numero2){
    switch(operador){
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            return numero1 / numero2;
        default:
            return 'Operador desconhecido.';
    }
}

console.log(calculadora(1,'+',2));
console.log(calculadora(5,'-',4));
console.log(calculadora(10,'*',3));
console.log(calculadora(18,'/',9));
console.log(calculadora(1,'=',1));