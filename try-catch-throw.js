// Tratando e lançando erros

try {
  console.log(naoExisto)
} catch (err) {
  console.log('essa variavel não existe')
}

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números')
  }
  return x + y
}

try {
  console.log(soma(5, 6))
  console.log(soma('b', 8))
} catch (err) {
  //console.log(err)
}

/* ****** */

try {
  //É executado quando não há erros
} catch (err) {
  // é executado quando há erros
} finally {
  // sempre
}
