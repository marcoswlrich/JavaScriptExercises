//Escreva uma função que recebe um número e
//retorne o seguinte:
//Número é divisivel por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número Não é divisível por 3 e 5 = retorne o
// próprio número
//Checar se o número é realmente um número
//Use a função com número de 0 a 100

function fizzBuzz(num) {
  if (typeof num !== 'number') return num
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
  if (num % 3 === 0) return 'Fizz'
  if (num % 5 === 0) return 'Buzz'
  return num
}

for (let index = 0; index <= 100; index++) {
  console.log(index, fizzBuzz(index))
}
