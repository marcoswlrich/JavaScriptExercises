/*
Estamos construindo um aplicativo de apostas de futebol 
(futebol para meus amigos americanos 😅)!
Suponha que obtenhamos dados de um serviço da web sobre um determinado 
jogo (variável 'jogo' em próxima página). Neste desafio vamos trabalhar 
com esses dados.

Suas tarefas:

1. Crie um array de jogadores para cada time (variáveis ​​'players1' e
'jogadores2')

2. O primeiro jogador em qualquer matriz de jogadores é o goleiro e os 
outros são de campo jogadoras. Para o Bayern de Munique (equipe 1) crie 
uma variável ('gk') com o nome do goleiro e uma matriz ('fieldPlayers') 
com todos os 10 restantes jogadores de campo

3. Crie um array 'allPlayers' contendo todos os jogadores de ambas as 
equipes (22 jogadoras)

4. Durante o jogo, o Bayern de Munique (equipe 1) utilizou 3 jogadores 
substitutos. Então crie um novo array ('players1Final') contendo todos os 
jogadores originais do time1 mais 'Thiago', 'Coutinho' e 'Perísico'

5. Com base no objeto game.odds, crie uma variável para cada odd (chamada
'equipe1', 'empate' e 'equipe2')

6. Escreva uma função ('printGoals') que receba um número arbitrário 
de jogadores nomes (não um array) e imprime cada um deles no console, 
junto com o número de gols que foram marcados no total (número de nomes 
de jogadores passados)

7. A equipa com a odd mais baixa tem mais probabilidades de ganhar. Imprima 
no console que é mais provável que a equipe vença, sem usar uma instrução 
if/else ou a ternária operador.

Dados de teste para 6.: Primeiro, use os jogadores 'Davies', 'Muller', 
'Lewandowski' e 'Kimmich'.

Em seguida, chame a função novamente com jogadores de game.scored
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
const [jogadores1, jogadores2] = jogo.jogadores
console.log(jogadores1, jogadores2)

//2
const [gk, ...fieldPlayers] = jogadores1
console.log(gk, ...fieldPlayers)

//3
const todosJogadores = [...jogadores1, ...jogadores2]
console.log(todosJogadores)

//4
const jogadores1Final = [...jogadores1, 'Thiago', 'Coutinho', 'Periscic']

//5
const {
  probabilidades: { equipe1, x: empate, equipe2 },
} = jogo
console.log(equipe1, empate, equipe2)

//6
const printGoals = function (...jogadores) {
  console.log(jogadores)
  console.log(`${jogadores.length} gols marcados`)
}
printGoals(...jogo.marcou)

//7
equipe1 < equipe2 && console.log('Time 1 tem mais chances de vencer')
equipe1 > equipe2 && console.log('Time 2 tem mais chances de vencer')
