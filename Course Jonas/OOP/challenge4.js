// Suas tarefas:
// 1. Recrie o Desafio #3, mas desta vez usando classes ES6: crie um 'EVCl'
// classe filha da classe 'CarCl'
// 2. Torne a propriedade de 'cobrança' privada
// 3. Implemente a capacidade de encadear o 'accelerate' e o 'chargeBattery'
// métodos desta classe, e também atualizar o método 'brake' no 'CarCl'
// aula. Então experimente com encadeamento!
// Dados de teste:
// §
// Carro de dados 1: 'Rivian' a 120 km/h, com uma carga de 23%
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
    return this
  }
  get speedUS() {
    return this.speed / 1.6
  }
  set speedUS(speed) {
    this.speed = speed * 1.6
  }
}

class EVCl extends CarCl {
  #charge
  constructor(make, speed, charge) {
    super(make, speed)
    this.#charge = charge
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo
    return this
  }
  accelerate() {
    this.speed += 20
    this.#charge--
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    )
    return this
  }
}

const rivian = new EVCl('Rivian', 120, 23)
console.log(rivian)
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate()
console.log(rivian.speedUS)
