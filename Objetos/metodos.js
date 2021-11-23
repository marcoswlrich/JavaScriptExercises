// Object.key (retorna as chaves)
//object.freeze(congela o objeto)
Object.freeze(produto)
//Object.defineProperties (define várias propriedades)
//Object.defineProperty (define uma propriedade)
// ... (spread)

//maneira de copiar propriedades de outro objeto
const produto = { nome: 'Caneca', preco: 1.8 }

const outraCoisa = { ...produto, material: 'porcelana' } //copiando as propriedades do produto e add nova chave
//novos valores
outraCoisa.nome = 'Outro nome'
outraCoisa.preco = 2.5
console.log(produto)
console.log(outraCoisa)

//outra maneira de copiar propriedades Object.assign

const produto = { nome: 'Produto', preco: 1.8 }
const caneca = Object.assign({}, produto, { material: 'porcelana' })
//novos valores
caneca.nome = 'Outro nome'
outraCoisa.preco = 2.5
console.log(produto)
console.log(outraCoisa)

//Object.getOwnPropertyDescriptor(o, 'prop')
// Retorna o status de defineProperties e Property
const mercadoria = { nome: 'copo', preco: 4.5 }
console.log(Object.getOwnPropertyDescriptors(mercadoria, 'nome'))

//Pega só os valores das chaves
console.log(Object.values(mercadoria))

//retorna separado cada chaves em arrays
console.log(Object.entries(mercadoria))
