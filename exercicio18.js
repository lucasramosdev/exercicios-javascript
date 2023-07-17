function numero_extenso(numero){
    if(typeof numero === 'number'){
        numero = numero.toString();
    }
    switch(numero){
        case '0':
            return 'Zero';
        case '1':
            return 'Um';
        case '2':
            return 'Dois';
        case '3':
            return 'Três';
        case '4':
            return 'Quatro';
        case '5':
            return 'Cinco';
        case '6':
            return 'Seis';
        case '7':
            return 'Sete';
        case '8':
            return 'Oito';
        case '9':
            return 'Nove';
        case '10':
            return 'Dez';
        default:
            return 'Número inválido';
    }
}

console.log(numero_extenso(0))
console.log(numero_extenso(1))
console.log(numero_extenso(2))
console.log(numero_extenso(3))
console.log(numero_extenso(4))
console.log(numero_extenso(5))
console.log(numero_extenso(6))
console.log(numero_extenso(7))
console.log(numero_extenso(8))
console.log(numero_extenso(9))
console.log(numero_extenso(10))
console.log(numero_extenso(11))