//defineProperty -> getter e setters -maneira de proteger minha propriedade

function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco
  //para bloquear acesso e alteração de uma chave
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: true, // configuravel
    //getter retornar o valor
    //setters validar o valor
    get: function () {
      return estoque
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Valor inválido')
      }
    }
  })
}
