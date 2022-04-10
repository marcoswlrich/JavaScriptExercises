// Suas tarefas:
// 1. Recrie o desafio nº 1, mas desta vez usando uma classe ES6 (chame de 'CarCl')

// 2. Adicione um getter chamado 'speedUS' que retorna a velocidade atual em mi/h
// (dividir por 1,6)

// 3. Adicione um setter chamado 'speedUS' que define a velocidade atual em mi/h
// (mas converte para km/h antes de armazenar o valor, multiplicando a entrada por
// 1,6)

// 4. Crie um novo carro e experimente o 'acelerar' e o 'frear' métodos, e com o
// getter e setter.

// Dados de teste:
// §
// Carro de dados 1: 'Ford' indo a 120 km/h

// BOA SORTE 😀

class CarCl {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }
  accelerate() {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/h`)
  }
  brake() {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/h`)
  }
  get speedUS() {
    return this.speed / 1.6
  }
  set speedUS(speed) {
    this.speed = speed * 1.6
  }
}

const ford = new CarCl('Ford', 120)
console.log(ford.speedUS)
ford.accelerate()
ford.accelerate()
ford.brake()
ford.speedUS = 50
console.log(ford)
