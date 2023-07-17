function classificarTriangulo(lados){
  if (lados[0] === lados[1] && lados[0] === lados[2]){
    console.log('Equilátero')
  }

  else if (lados[0] !== lados[1] && lados[0] !== lados[2] && lados[1] !== lados[2]){
    console.log('Escaleno')
  }

  else {
    console.log('Isósceles')
  }
}

classificarTriangulo([5,5,5]);
classificarTriangulo([5,5,2]);
classificarTriangulo([6,2,1]);