//defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco
  //para bloquear acesso e alteração de uma chave
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, //valor
    writable: true, // pode alterar
    configurable: true // configuravel
  })

  //para mais de uma chave

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true
    }
  })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
