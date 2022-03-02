/**
Vamos continuar com nosso aplicativo de apostas de futebol! 
Desta vez, temos um mapa chamado 'gameEvents' (veja abaixo) com um 
registro dos eventos que aconteceram durante o jogos. Os valores são 
os próprios eventos, e as chaves são os minutos em que cada evento aconteceu 
(um jogo de futebol tem 90 minutos mais algum tempo extra).
Suas tarefas:

1. Crie um array de 'eventos' dos diferentes eventos do jogo que 
aconteceram (não duplicatas)
2. Terminado o jogo, verificou-se que o cartão amarelo do minuto 64
foi injusto. Portanto, remova este evento do log de eventos do jogo.

3. Calcule e registre a seguinte string no console: "Um evento aconteceu, em
média, a cada 9 minutos" (lembre-se que um jogo tem 90 minutos)

4. Faça um loop sobre 'gameEvents' e registre cada elemento no console, 
marcando seja no primeiro tempo ou no segundo tempo (após 45 min) do jogo, 
assim:

[PRIMEIRA METADE] 17: ⚽ Golll

 * 
 */

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
])

//1
const events = [...new Set(gameEvents.values())]
console.log(events)

//2
gameEvents.delete(64)

//3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
)
const time = [...gameEvents.keys()].pop()
console.log(time)
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
)

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND'
  console.log(`[${half} HALF] ${min}: ${event}`)
}
