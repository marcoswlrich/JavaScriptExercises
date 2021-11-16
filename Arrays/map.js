// map não modifica o tamanho dos arrays

const numeros = [5, 10, 50, 80, 8, 1, 2, 12, 45, 11, 9]

//Dobro dos números

const dobro = numeros.map(valor => valor * 2)

console.log(dobro)

//Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

const idades = pessoas.map(obj => ({ idade: obj.idade }))
console.log(idades)

const ids = pessoas.map(function (obj, indice) {
  obj.id = indice + 1
  return obj
})

console.log(ids)
