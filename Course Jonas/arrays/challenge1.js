// Julia e Kate estão fazendo um estudo sobre cães. Então, cada um deles perguntou
// a 5 donos de cães sobre a idade de seu cão e armazenou os dados em um array
// (um array para cada). Por agora, eles estão apenas interessados ​​em saber se um
// cachorro é adulto ou filhote.
// Um cão é adulto se tiver pelo menos 3 anos, e é um cachorro se tiver menos de
// 3 anos velho.

// Suas tarefas:

// Crie uma função 'checkDogs', que aceita 2 arrays de idades de cachorro
// ('dogsJulia' e 'dogsKate'), e faz o seguinte:

// 1. Julia descobriu que os donos do primeiro e dos dois últimos cachorros
// realmente gatos, não cães! Então crie uma cópia superficial da matriz de
// Julia e remova o gato idades daquela matriz copiada (porque é uma má prática
// alterar a função parâmetros)

// 2. Crie um array com os dados de Julia (corrigido) e Kate

// 3. Para cada cachorro restante, faça login no console se for um adulto ("Cão
// 🐶 número 1 é um adulto e tem 5 anos") ou um filhote ("O cão número 2 ainda
// é um filhote")

// 4. Execute a função para ambos os conjuntos de dados de teste

// Dados de teste:
// §Dados 1: dados de Julia [3, 5, 2, 12, 7], dados de Kate [4, 1, 15, 8, 3]
// §Dados 2: dados de Julia [9, 16, 6, 8, 3], dados de Kate [10, 5, 6, 1, 4]
// Dicas: Use as ferramentas de todas as palestras desta seção até agora 😉

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice()
  dogsJuliaCorrected.splice(0, 1)
  dogsJuliaCorrected.splice(-2)
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate)
  console.log(dogs)
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`)
    }
  })
}
