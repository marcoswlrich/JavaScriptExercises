//somando todos números

const numeros = [5, 10, 50, 80, 8, 1, 2, 12, 45, 11, 9]

const total = numeros.reduce(function (acumulador, valor) {
  acumulador += valor
  return acumulador
})

console.log(total)

// somando os pares

const somaPar = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) {
    acumulador += valor
  }
  return acumulador
}, 0)

console.log(somaPar)

// retorne a pessoa mais velha

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador
  return valor
})

console.log(maisVelha)
