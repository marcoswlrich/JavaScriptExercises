// Suas tarefas:

// 1. Use uma função construtora para implementar um 'Carro'. Um carro tem uma
// 'marca' e um propriedade de 'velocidade'. A propriedade 'speed' é a velocidade
// atual do carro em km/h
// 2. Implemente um método de 'aceleração' que aumentará a velocidade do carro em 10,
// e registre a nova velocidade no console

// 3. Implemente um método de 'freio' que diminua a velocidade do carro em 5 e
// registre a nova velocidade para o console
// 4. Crie 2 objetos 'Car' e experimente chamar 'accelerate' e 'trave' várias
// vezes em cada um deles

// Dados de teste:
// §
// §
// Carro de dados 1: 'BMW' indo a 120 km/h
// Carro de dados 2: 'Mercedes' a 95 km/h

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
const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)

bmw.accelerate()
bmw.accelerate()
bmw.brake()
bmw.accelerate()
