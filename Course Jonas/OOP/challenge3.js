// Suas tarefas:
// 1. Use uma função construtora para implementar um carro elétrico (chamado 'EV')
// como filho "classe" de 'Carro'. Além de uma marca e velocidade atual, o 'EV'
// também tem a carga atual da bateria em % (propriedade 'charge')

// 2. Implemente um método 'chargeBattery' que receba um argumento 'chargeTo' e
// define a carga da bateria como 'chargeTo'

// 3. Implemente um método de 'aceleração' que aumentará a velocidade do carro em 20,
// e diminuir a carga em 1%. Em seguida, registre uma mensagem como esta: 'Tesla
// indo em 140 km/h, com uma carga de 22%'

// 4. Crie um objeto de carro elétrico e experimente chamar 'acelerar',
// 'freio' e 'carregarBateria' (carregar até 90%). Observe o que acontece quando
// você 'acelera'! Dica: Reveja a definição de polimorfismo 😉

// Dados de teste:
// §
// Carro de dados 1: 'Tesla' a 120 km/h, com carga de 23%

// BOA SORTE 😀

const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}
Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`${this.make} is going at ${this.speed} km/h`)
}
Car.prototype.brake = function () {
  this.speed -= 5
  console.log(`${this.make} is going at ${this.speed} km/h`)
}
const EV = function (make, speed, charge) {
  Car.call(this, make, speed)
  this.charge = charge
}

// Link the prototypes
EV.prototype = Object.create(Car.prototype)
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo
}
EV.prototype.accelerate = function () {
  this.speed += 20
  this.charge--
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  )
}
const tesla = new EV('Tesla', 120, 23)
tesla.chargeBattery(90)
console.log(tesla)
tesla.brake()
tesla.accelerate()
