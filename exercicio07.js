function calculoBhaskara(ax2, bx, c){
  let delta = bx**2 - 4 * ax2 * c;

  if (delta < 0){
    return 'Delta é negativo'
  }

  let bhaskara = [
    (-bx - Math.sqrt(delta)) / 2*ax2,
    (-bx + Math.sqrt(delta)) / 2*ax2 
  ]

  return bhaskara
}

console.log(calculoBhaskara(1, 3, 2))
console.log(calculoBhaskara(3, 1, 2))