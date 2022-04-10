// Reescreva a função 'calcAverageHumanAge' do Desafio #2, mas desta vez
// como uma função de seta e usando encadeamento!
// Dados de teste:
// §Dados 1: [5, 2, 4, 1, 15, 8, 3]
// §Dados 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
// adults.length
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2)
