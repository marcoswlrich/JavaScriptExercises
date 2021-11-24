//Produto -> aumento, desconto
//camiseta = cor, caneca = material

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

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco) //herança
  this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco)
  this.material = material

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque
    },
    set: function (valor) {
      estoque = valor
    }
  })
}

Caneca.prototype = Object.create(produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('gen', 100)
const camiseta = new Camiseta('regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca', 25, 'plástico', 10)
console.log(produto)
console.log(camiseta)
console.log(caneca)
