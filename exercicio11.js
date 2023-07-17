function calcular_ano_bissexto(ano){
    if(ano <= 0){
        return false;
    }
    else if(ano % 400 === 0){
        return true;
    }
    else if(ano % 100 === 0){
        return false;
    }
    else if(ano % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(calcular_ano_bissexto(2020));
console.log(calcular_ano_bissexto(2021));
console.log(calcular_ano_bissexto(2022));
console.log(calcular_ano_bissexto(2023));
console.log(calcular_ano_bissexto(2024));
console.log(calcular_ano_bissexto(2025));
console.log(calcular_ano_bissexto(2026));
console.log(calcular_ano_bissexto(2027));
console.log(calcular_ano_bissexto(2028));
console.log(calcular_ano_bissexto(1963));
console.log(calcular_ano_bissexto(0));
console.log(calcular_ano_bissexto(1));
