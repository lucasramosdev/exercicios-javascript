function converteEmDinheiro(valor){
  valor = valor.toFixed(2).replace('.', ',');
  return 'R$' + valor;
}

console.log(converteDinheiro(0.1+0.2))