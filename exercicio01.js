function Calculadora(numeros){
  this.somar = function(){
    let soma = numeros[0] + numeros[1]
    console.log(soma)
  }

  this.subtrair = function(){
    let subtracao = numeros[0] - numeros[1]
    console.log(subtracao)
  }

  this.multiplicar = function(){
    let multiplicacao = numeros[0] * numeros[1]
    console.log(multiplicacao)
  }

  this.dividir = function(){
    let divisao = numeros[0] / numeros[1]
    console.log(divisao)
  }
}

const calculadora = new Calculadora([10,5])
calculadora.somar()
calculadora.subtrair()
calculadora.multiplicar()
calculadora.dividir()
