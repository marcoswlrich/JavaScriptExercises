// Existem duas equipes de ginástica, Golfinhos e Coalas. Eles competem contra cada um
// outras 3 vezes. O vencedor com a pontuação média mais alta ganha um troféu!

// Suas tarefas:
// 1. Calcule a pontuação média de cada equipe, usando os dados de teste abaixo
// 2. Compare as pontuações médias da equipe para determinar o vencedor da competição,
// e imprima-o no console. Não se esqueça que pode haver um empate, então teste isso
// também (empate significa que eles têm a mesma pontuação média)
// 3. Bônus 1: Inclui um requisito para uma pontuação mínima de 100. Com esta regra, um
// a equipe só vence se tiver uma pontuação maior do que a outra equipe, e ao mesmo tempo um
// pontuação de pelo menos 100 pontos. Dica: Use um operador lógico para testar o mínimo
// pontuação, bem como vários blocos else-if
// 4. Bônus 2: a pontuação mínima também se aplica a um empate! Então, um empate só acontece quando
// ambas as equipes têm a mesma pontuação e ambas têm uma pontuação maior ou igual a 100
// pontos. Caso contrário, nenhuma equipe ganha o troféu.

// Dados de teste:
// § Dados 1: Os golfinhos pontuam 96, 108 e 89. Os Koalas pontuaram 88, 91 e 110
// § Bônus de dados 1: Os golfinhos pontuam 97, 112 e 101. Os Koalas pontuaram 109, 95 e 123
// § Bônus de dados 2: os golfinhos pontuam 97, 112 e 101. Koalas pontuam 109, 95 e 106

console.log('Dados 1')
let pontGolfinhos = (96 + 108 + 89) / 3
let pontKoalas = (88 + 91 + 110) / 3
console.log(pontGolfinhos, pontKoalas)
if (pontGolfinhos > pontKoalas) {
  console.log('Golfinhos ganharam o troféu 🏆')
} else if (pontKoalas > pontGolfinhos) {
  console.log('Koalas ganharam o troféu 🏆')
} else if (pontGolfinhos === pontKoalas) {
  console.log('Empate')
}
console.log('*******************')
console.log('Bônus 1')

//bonus

pontGolfinhos = (97 + 112 + 101) / 3
pontKoalas = (109 + 95 + 123) / 3
console.log(pontGolfinhos, pontKoalas)
if (pontGolfinhos > pontKoalas && pontGolfinhos >= 100) {
  console.log('Golfinhos ganharam o troféu 🏆')
} else if (pontKoalas > pontGolfinhos && pontKoalas >= 100) {
  console.log('Koalas ganharam o troféu 🏆')
} else if (
  pontGolfinhos === pontKoalas &&
  pontGolfinhos >= 100 &&
  pontKoalas >= 100
) {
  console.log('Empate')
} else {
  console.log('Não houve ganhadores')
}

console.log('*******************')
console.log('Bônus 2')

pontGolfinhos = (97 + 112 + 101) / 3
pontKoalas = (109 + 95 + 106) / 3
console.log(pontGolfinhos, pontKoalas)
if (pontGolfinhos > pontKoalas && pontGolfinhos >= 100) {
  console.log('Golfinhos ganharam o troféu 🏆')
} else if (pontKoalas > pontGolfinhos && pontKoalas >= 100) {
  console.log('Koalas ganharam o troféu 🏆')
} else if (
  pontGolfinhos === pontKoalas &&
  pontGolfinhos >= 100 &&
  pontKoalas >= 100
) {
  console.log('Empate')
} else {
  console.log('Não houve ganhadores')
}
