const frutas = ['maçã', 'uva', 'pera']

//for classico - Geralmente com interáveis (Arrays, strings)

for (let i = 0; i < frutas.length; i++) {
  const element = frutas[i]
  console.log(element)
}

// for in - Retorna o indice ou chaves (Arrays, objetos, strings)

// For in em arrays

for (const index in frutas) {
  const element = frutas[index]
  console.log(element)
}

// - For in em objetos

const pessoa = {
  name: 'Marcos',
  sobrenome: 'Wlrich',
  idade: 28
}

for (const chave in pessoa) {
  if (Object.hasOwnProperty.call(pessoa, chave)) {
    const element = pessoa[chave]
    console.log(chave, element)
  }
}

// forma mais simples de FOR IN

for (let chave in pessoa) {
  console.log(chave, pessoa[chave])
}

// for of - Retorna o valor em si (Arrays, strings)

for (let valor of frutas) {
  console.log(valor)
}

// for each

frutas.forEach(function (el) {
  console.log(el)
})
