const nome = 'Marcos'
const sobrenome = 'Wlrich'
const idade = 30

function soma(x, y) {
  return x + y
}

export { nome, sobrenome, idade, soma }

//outra forma de exportar

export class Pessoa {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }
}

//default so pode ter um por arquivo

// export default function sub(y, x) {
//   return y - x
// }

//importando constantes default

// export { nome as default}

//maneira de importa dessa forma so chama o default
// pode importar os outros entre {}
// import sub from './modulo1' --- posso mudar de nome tb
