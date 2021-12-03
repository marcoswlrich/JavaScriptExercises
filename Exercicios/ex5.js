//Escreva uma função que recebe dois números
// e retorne o mair deles

function max(x, y) {
  return x > y ? x : y
}

console.log(max(23, 30))

// com arrow fuction

const max2 = (x, y) => (x > y ? x : y)

console.log(max2(54, 23))
