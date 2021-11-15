// De volta às duas equipes de ginástica, os Golfinhos e os Coalas!
// Há um novo disciplina de ginástica, que funciona de forma diferente.

// Cada equipe compete 3 vezes e, em seguida, a média das 3 pontuações é calculada (então
// uma pontuação média por equipe).

// Uma equipe só vence se tiver pelo menos o dobro da pontuação média da outra equipe.
// Caso contrário, nenhuma equipe ganha!

// Suas tarefas:
// 1. Crie uma função de seta 'calcA Average' para calcular a média de 3 pontuações
// 2. Use a função para calcular a média para ambas as equipes
// 3. Crie uma função 'checkWinner' que leva a pontuação média de cada equipe
// como parâmetros ('avgDolhins' e 'avgKoalas') e, em seguida, registra o vencedor
// para o console, junto com os pontos de vitória, de acordo com a regra acima.
// Exemplo: "Coalas ganham (30 contra 13)"
// 4. Use a função 'checkWinner' para determinar o vencedor para os dados 1 e
// Dados 2
// 5. Ignore os sorteios desta vez

// Dados de teste:
// - Dados 1: Os golfinhos pontuam 44, 23 e 71. Os Koalas pontuaram 65, 54 e 49
// - Dados 2: Golfinhos pontuam 85, 54 e 41. Koalas pontuaram 23, 34 e 27
// Dicas:
// - Para calcular a média de 3 valores, some-os e divida por 3
// - Para verificar se o número A é pelo menos o dobro do número B, verifique se A> = 2 * B.

// Aplique isso às pontuações médias da equipe

const calcAverage = (p1, p2, p3) => (p1 + p2 + p3) / 3

let pointGolfinhos = calcAverage(44, 23, 71)
let pointKoalas = calcAverage(65, 54, 49)

const checkWinner = function (avgGolfinhos, avgKoalas) {
  if (avgGolfinhos >= 2 * avgKoalas) {
    console.log(`Golfinhos ganham 🏆 de ${avgGolfinhos} contra ${avgKoalas}`)
  } else if (avgKoalas >= 2 * avgGolfinhos) {
    console.log(`Koalas ganham 🏆 de ${avgKoalas} contra ${avgGolfinhos}`)
  } else {
    console.log('Não ouve vencedor')
  }
}

checkWinner(pointGolfinhos, pointKoalas)

// Teste 2

pointGolfinhos = calcAverage(85, 54, 41)
pointKoalas = calcAverage(23, 34, 27)

checkWinner(pointGolfinhos, pointKoalas)
