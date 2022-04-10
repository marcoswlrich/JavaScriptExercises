// Julia e Kate ainda estão estudando cães, e desta vez estão estudando se os cães
// são comer muito ou pouco.
// Comer demais significa que a porção de comida atual do cão é maior do que a
// porção recomendada, e comer muito pouco é o oposto.
// Comer uma quantidade razoável significa que a porção de comida atual do cão
// está dentro de um intervalo de 10% acima e 10% abaixo da porção recomendada
// (ver dica).

// Suas tarefas:
// 1. Faça um loop sobre a matriz 'dogs' contendo objetos de cachorro e, para
// cada cachorro, calcule a porção de comida recomendada e adicione-a ao objeto
// como uma nova propriedade. Fazer não crie um novo array, simplesmente faça um
// loop sobre o array. Fórum: comida recomendada = peso ** 0,75 * 28. (O resultado
// é em gramas de alimentos, e o peso precisa estar em kg)

// 2. Encontre o cachorro de Sarah e entre no console se ele está comendo demais
// ou demais pouco. Dica: Alguns cães têm vários donos, então primeiro você precisa
// encontrar Sarah em a matriz de proprietários, e então este é um pouco complicado
// (de propósito) 🤓

// 3. Crie um array contendo todos os donos de cães que comem demais
// ('ownersEatTooMuch') e uma matriz com todos os donos de cães que comem muito pouco
// ('proprietáriosEatTooLittle').

// 4. Registre uma string no console para cada array criado em 3., assim: "Matilda
// e Os cachorros de Alice e Bob comem demais!" e "Os cachorros de Sarah, John e
// Michael comem tão pequeno!"
// 5. Registre no console se há algum cachorro comendo exatamente a quantidade de
// comida que é recomendado (apenas verdadeiro ou falso)

// 6. Registre no console se há algum cachorro comendo uma quantidade razoável de
// comida (apenas verdadeiro ou falso)
// 7. Crie um array contendo os cães que estão comendo uma boa quantidade de comida
// (tente para reutilizar a condição usada em 6.)

// 8. Crie uma cópia superficial da matriz 'dogs' e classifique-a por alimentos
// recomendados porção em ordem crescente (lembre-se de que as porções estão dentro
// do objetos do array 😉)

// Dicas:
// §
// Use muitas ferramentas diferentes para resolver esses desafios, você pode usar
// o resumo palestra para escolher entre eles 😉
// §
// Estar dentro de uma faixa de 10% acima e abaixo da porção recomendada significa:
// atual > (recomendado * 0,90) && atual < (recomendado *
// 1.10). Basicamente, a parcela atual deve estar entre 90% e 110% da
// porção recomendada.

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
]
// 1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)))

// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'))
console.log(dogSarah)
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
)

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners)
// .flat();
console.log(ownersEatTooMuch)
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners)
console.log(ownersEatTooLittle)

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`)

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood))

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
console.log(dogs.some(checkEatingOkay))

// 7.
console.log(dogs.filter(checkEatingOkay))

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood)
console.log(dogsSorted)
