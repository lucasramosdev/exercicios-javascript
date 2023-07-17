function fatorial(numero){
    let proximo_numero = numero - 1;
    if (proximo_numero >= 1){
        return numero  * fatorial(proximo_numero);
    }
    else{
        return 1;
    }
}

console.log(fatorial(5));