// Diferente do for quando sabemos a quantidade
// dos elementos numa array, usamos o while e do while
// geralmente quando não sabemos sobre a quantidade

function random(min, max) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}

const min = 1
const max = 80
// let rand = random(min, max) usar no while
let rand = 10

while (rand !== 10) {
  rand = random(min, max)
  console.log(rand)
}

console.log('#######')

do {
  rand = random(min, max)
  console.log(rand)
} while (rand !== 10)
