function definirRecorde(pontos){
  let pontuacoes = pontos.split(' ');
  let piorPosicao = parseInt(pontuacoes[0]);
  let posicaoPiorPontuacao = 0;
  let recorde = parseInt(pontuacoes[0]);
  let vezesQueBateuRecorde = 0;
  pontuacoes.forEach((pontuacao, posicao) => {
    pontuacao = parseInt(pontuacao)
    if(pontuacao > recorde){
      vezesQueBateuRecorde += 1;
      recorde = pontuacao
    }
    if(pontuacao < piorPosicao){
      posicaoPiorPontuacao = posicao + 1 
      piorPosicao = pontuacao
    }

  })

  return [vezesQueBateuRecorde, posicaoPiorPontuacao];
}

console.log(definirRecorde('10 20 20 8 25 3 0 30 1'))