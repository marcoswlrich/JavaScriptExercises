// Vamos voltar ao estudo de Julia e Kate sobre cães. Desta vez, eles querem
// converter idades de cães para idades humanas e calcular a idade média dos cães
// em seu estudo.

// Suas tarefas:

// Crie uma função 'calcAverageHumanAge', que aceita um array de dog's
// idades ('idades'), e faz as seguintes coisas em ordem:
// 1. Calcule a idade do cão em anos humanos usando a seguinte fórmula: se o cão é
// <= 2 anos, humanoIdade = 2 * cãoIdade. Se o cão tiver > 2 anos,
// humanoIdade = 16 + cãoIdade * 4
// 2. Exclua todos os cães com menos de 18 anos de idade (que é o mesmo que
// manter cães com pelo menos 18 anos de idade)
// 3. Calcule a idade média humana de todos os cães adultos (você já deve saber
// de outros desafios como calculamos médias 😉)
// 4. Execute a função para ambos os conjuntos de dados de teste
// Dados de teste:
// §Dados 1: [5, 2, 4, 1, 15, 8, 3]
// §Dados 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
  const adults = humanAges.filter((age) => age >= 18)
  console.log(humanAges)
  console.log(adults)
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0)
  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5
  return average
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2)
