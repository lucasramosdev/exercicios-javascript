function verificador_de_string(string1, string2){
    const maior_string = (string1.length >= string2.length ? string1 : string2).toLowerCase();
    const menor_string = (maior_string === string1 ? string2 : string1).toLowerCase();

    const contem_caracteres = maior_string.includes(menor_string);

    return contem_caracteres;
}

console.log(verificador_de_string('abcdf', 'dcba'))