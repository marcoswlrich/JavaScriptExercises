/**
 * Vamos continuar com nosso aplicativo de apostas de futebol! Continue 
 * usando a variável 'game' de antes.
Suas tarefas:

1. Faça um loop sobre a matriz game.scored e imprima o nome de cada jogador 
no console, juntamente com o número do gol (Exemplo: "Goal 1: Lewandowski")

2. Use um loop para calcular a odd média e registre-a no console (já
estudou como calcular médias, pode ir conferir se não lembra)

3. Imprima as 3 odds no console, mas de uma forma bem formatada, 
exatamente assim:
Chance de vitória Bayern de Munique: 1.33
Chance de empate: 3,25
Chance de vitória Borrussia Dortmund: 6,5
Obtenha os nomes das equipes diretamente do objeto do jogo, não os codifique
(exceto para "empate"). Dica: Observe como as probabilidades e os objetos do jogo
mesmos nomes de propriedade 😉

4. Bônus: Crie um objeto chamado 'pontuadores' que contém os nomes dos
jogadores que marcaram como propriedades, e o número de gols como valor. Nisso
jogo, ficará assim:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
 */

const jogo = {
  time1: 'Bayern de Munique',
  time2: 'Borrussia Dortmund',
  jogadores: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davi',
      'Kimmich',
      'Goretzka',
      'Coma',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummel',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witzel',
      'Perigo',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  pontuação: '4:0',
  marcou: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  data: '9 de novembro de 2037',
  probabilidades: {
    equipe1: 1.33,
    x: 3.25,
    equipe2: 6.5,
  },
}

//1
for (const [i, jogador] of jogo.marcou.entries()) {
  console.log(`Gol ${i + 1}: ${jogador}`)
}

//2
const probabilidades = Object.values(jogo.probabilidades)
let media = 0
for (const probabilidade of probabilidades) media += probabilidade
media /= probabilidades.length
console.log(media)

//3
for (const [time, probabilidade] of Object.entries(jogo.probabilidades)) {
  const timeStr = time === 'x' ? 'draw' : `Vitória ${jogo[time]}`
  console.log(`Probabilidade de ${timeStr} ${probabilidade}`)
}
