function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100)
}

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100)
}

const p1 = new Produto('camiseta', 50)

//Literal

const p2 = {
  nome: 'caneca',
  preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(10)
console.log(p2)

//outra forma

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 113
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 43
  }
})

p3.aumento(10)
console.log(p3)
