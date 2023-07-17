function revenda_carros(carro){
    switch(carro.toLowerCase()){
        case 'hatch':
            return 'Compra efetuada com sucesso.';
        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?';
        default:
            return `Não trabalhamos com o tipo ${carro} de automóvel aqui.`;
    }
}

console.log(revenda_carros('hatch'));
console.log(revenda_carros('sedan'));
console.log(revenda_carros('motocicleta'));
console.log(revenda_carros('caminhonete'));
console.log(revenda_carros('outra1'));
console.log(revenda_carros('outra2'));
