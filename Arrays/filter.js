const numeros = [5, 10, 50, 80, 8, 1, 2, 12, 45, 11, 9]
const numFiltrados = numeros.filter(valor => valor > 10)
console.log(numFiltrados)

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)

console.log(pessoasNomeGrande)

const pessoasMaisCinquenta = pessoas.filter(obj => obj.idade > 50)

console.log(pessoasMaisCinquenta)

const nomeTerminaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(nomeTerminaA)
