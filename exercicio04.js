function resultadoResto(dividendo, divisor){
  resultado = dividendo / divisor;
  resto = dividendo % divisor;

  return `o resultado é ${resultado} e o resto é ${resto}`;
}

console.log(resultadoResto(3,2))