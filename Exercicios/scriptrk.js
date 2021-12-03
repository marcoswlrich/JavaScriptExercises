/*
### Sistemas de gastos familiar

Crie um objeto que possua 2 propriedades, ambas do
tipo array:
        * receitas: []
        * despesas: []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a familia esta com
saldo positivo ou negativo, seguido do valor do saldo.

*/

let familia = {
  receitas: [2600, 3100, 259.99, 371.9],
  despesas: [350, 132, 198.55, 1200]
}

function soma(array) {
  let total = 0

  for (let value of array) {
    total += value
  }
  return total
}

function calcBalanco() {
  const totalReceitas = soma(familia.receitas)
  const totalDespesas = soma(familia.despesas)

  const total = totalReceitas - totalDespesas

  const saldoPositivo = total >= 0
  let balancoTexto = 'Negativo'
  if (saldoPositivo) {
    balancoTexto = 'Positivo'
  }

  console.log(`Seu saldo é ${balancoTexto}: ${total}`)
}

calcBalanco()
