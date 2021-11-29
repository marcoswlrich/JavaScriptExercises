const pessoas = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: Helena }
]

// const novasPessoas = {}
// for (let pessoa of pessoas) {
//   const {id} = pessoa
//   novasPessoas[id] = {...pessoa}
// }

const novasPessoas = new Map()
for (const pessoa of pessoas) {
  const { id } = pessoa
  novasPessoas.set(id, { ...pessoa })
}
//chaves
for (const pessoas of novasPessoas.keys) {
  console.log(pessoas)
}

//valores
for (const pessoas of novasPessoas.values) {
  console.log(pessoas)
}
