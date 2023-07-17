function CalcularJuros(capital_inicial, taxa_juros, meses){


  this.simples = function(){
    return  capital_inicial + (capital_inicial * taxa_juros) * meses
  }
  
  this.compostos = function(){
    return capital_inicial * ((1+taxa_juros) ** meses)
  }
}

const calculadora = new CalcularJuros(1350, 8/100, 10)

console.log(calculadora.simples());
console.log(calculadora.compostos());