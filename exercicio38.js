function intervalo_impares(inicio = 0, fim = 100){
    let menor = inicio <= fim ? inicio : fim;
    let maior = inicio === menor ? fim : inicio;

    for(menor; menor <= maior; menor++){
        if(menor % 2 != 0){
            console.log(menor);
        };
    };
};

intervalo_impares(19, 3);