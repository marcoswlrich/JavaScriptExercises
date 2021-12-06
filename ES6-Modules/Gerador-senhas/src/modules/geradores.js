const { String } = require('core-js')

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const gerarMaiuscula = () => String.fromCodePoint(rand(65, 91))
const gerarMinuscula = () => String.fromCodePoint(rand(97, 123))
const gerarNumero = () => String.fromCodePoint(rand(48, 58))
const symbols = '!@#$%^&*(){}[]=<>/,.;?+=-^~'
const gerarSymbols = () => symbols[rand(0, symbols.length)]

export default function gerarSenha(
  qtd,
  maiuscula,
  minusculas,
  numeros,
  symbols
) {
  const senhaArray = []
  qtd = Number(qtd)

  for (let i = 0; i < qtd; i++) {
    maiuscula && senhaArray.push(gerarMaiuscula())
    minusculas && senhaArray.push(gerarMinuscula())
    numeros && senhaArray.push(gerarNumero())
    symbols && senhaArray.push(gerarSymbols())
  }

  return senhaArray.join('').slice(0, qtd)
}
