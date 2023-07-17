function classificar_dia(dia){
    switch(dia){
        case 1: case 7:
            return 'Final de semana';
        case 2: case 3: case 4: case 5: case 6:
            return 'Dia útil';
        default:
            return 'Dia inválido'
    }
}

console.log(classificar_dia(1));
console.log(classificar_dia(8));
console.log(classificar_dia(7));
console.log(classificar_dia(6));
console.log(classificar_dia(10));
console.log(classificar_dia(5));