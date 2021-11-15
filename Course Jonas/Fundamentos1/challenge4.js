// Steven quer construir uma calculadora de dicas muito simples para quando ele for comer em um
// restaurante. Em seu país, costuma-se dar gorjeta de 15% se o valor da conta estiver entre 50 e
// 300. Se o valor for diferente, a gorjeta é 20%.

// Suas tarefas:
// 1. Calcule a gorjeta, dependendo do valor da conta. Crie uma variável chamada 'dica' para
// isto. Não é permitido usar uma instrução if / else   (se for mais fácil para você, você pode
// comece com uma instrução if / else e, em seguida, tente convertê-la em uma instrução ternária
// operador!)
// 2. Imprima uma string no console contendo o valor da conta, a gorjeta e o valor final
// (conta + gorjeta). Exemplo: “A conta foi 275, a gorjeta foi 41,25 e o valor total
// 316,25 ”

// Dados de teste:
// § Dados 1: Teste para os valores de fatura 275, 40 e 430

// Dicas:
// § Para calcular 20% de um valor, basta multiplicá-lo por 20/100 = 0,2
// § O valor X está entre 50 e 300, se for> = 50 && <= 300

const fatura1 = 275
const gorjeta = fatura1 <= 300 && fatura1 >= 50 ? fatura1 * 0.15 : fatura1 * 0.2
console.log(
  `A conta foi ${fatura1}, a gorjeta foi de ${gorjeta} e valor total é ${
    fatura1 + gorjeta
  }`
)
// const fatura2 = 40
const fatura2 = 40
const gorjeta2 =
  fatura2 <= 300 && fatura2 >= 50 ? fatura2 * 0.15 : fatura2 * 0.2
console.log(
  `A conta foi ${fatura2}, a gorjeta foi de ${gorjeta2} e valor total é ${
    fatura2 + gorjeta2
  }`
)

// const fatura3 = 430

const fatura3 = 430
const gorjeta2 =
  fatura3 <= 300 && fatura3 >= 50 ? fatura3 * 0.15 : fatura3 * 0.2
console.log(
  `A conta foi ${fatura3}, a gorjeta foi de ${gorjeta2} e valor total é ${
    fatura3 + gorjeta2
  }`
)
