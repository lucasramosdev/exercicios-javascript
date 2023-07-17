function vendedor_frutas(fruta){
    switch(fruta.toLowerCase()){
        case 'maçã':
            return 'Não vendemos esta fruta aqui.';
        case 'kiwi':
            return 'Estamos com escassez de kiwi.';
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo!';
        default:
            throw `Não conheço a fruta ${fruta}.`;
    }
}

const frutas = ['Maçã', 'melancia', 'kiwi', 'banana', 'Kiwi', 'maça'];

frutas.forEach((fruta) => {
    try{
        console.log(vendedor_frutas(fruta));
    }
    catch(error){
        console.log(error);
    }
});

