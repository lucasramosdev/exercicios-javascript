function cardapio(codigo, quantidade){
    let valor_pagar
    
    if(typeof codigo === 'number'){
        codigo = codigo.toString();
    }
    
    switch(codigo.toLowerCase()){
        case '100':
            valor_produto = 3
            valor_pagar = Number.parseFloat(quantidade * valor_produto).toFixed(2);
            break;
        case '200':
            valor_produto = 4
            valor_pagar = Number.parseFloat(quantidade * valor_produto).toFixed(2);
            break;
        case '300':
            valor_produto = 5.50
            valor_pagar = Number.parseFloat(quantidade * valor_produto).toFixed(2);
            break;
        case '400':
            valor_produto = 7.50
            valor_pagar = Number.parseFloat(quantidade * valor_produto).toFixed(2);
            break;
        case '500':
            valor_produto = 3.50
            valor_pagar = Number.parseFloat(quantidade * valor_produto).toFixed(2);
            break;
        case '600':
            valor_produto = 2.80
            valor_pagar = Number.parseFloat(quantidade * valor_produto).toFixed(2);
            break;
        default:
            return 'Produto inválido';        
    }

    return `Ò valor a pagar é: R$ ${valor_pagar.replace('.', ',')}`
}

console.log(cardapio(100, 2))
console.log(cardapio(200, 2))
console.log(cardapio(300, 2))
console.log(cardapio(400, 2))
console.log(cardapio(500, 2))
console.log(cardapio(600, 2))
console.log(cardapio(700, 2))