//Retorne a soma do dobro de todos os pares
// -> Filtrar os pares
// -> Dobrar os valor
// -> Reduzir (somar tudo)
const numeros = [5, 10, 50, 80, 8, 1, 2, 12, 45, 11, 9]
const resultado = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((ac, valor) => ac + valor)

console.log(resultado)

// resultado 1 - pares [ 10, 50, 80, 8, 2, 12 ]
// resultado 2 - soma  [ 20, 100, 160, 16, 4, 24 ]
// resultado 3 - soma   324
