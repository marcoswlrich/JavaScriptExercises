// Vamos construir um aplicativo de pesquisa simples!
// Uma enquete tem uma pergunta, uma série de opções entre as quais as pessoas
// podem escolher e um array com o número de respostas para cada opção. Esses
// dados são armazenados no starter objeto 'poll' abaixo.

// 1. Crie um método chamado 'registerNewAnswer' no objeto 'poll'. o
// método faz 2 coisas:
// 1.1.
// Exiba uma janela de prompt para o usuário inserir o número do
// opção selecionada. O prompt deve ficar assim:
// Qual é a sua linguagem de programação favorita?
// 0: JavaScript
// 1: Python
// 2: Ferrugem
// 3: C++
// (Escreva o número da opção)
// 1.2.
// Com base no número de entrada, atualize a propriedade da matriz 'answers'. Por
// exemplo, se a opção for 3, aumente o valor na posição 3 do array por
// 1. Certifique-se de verificar se a entrada é um número e se o número faz
// sentido (por exemplo, a resposta 52 não faria sentido, certo?)
// 2. Chame este método sempre que o usuário clicar no botão "Responder enquete".
// 3. Crie um método 'displayResults' que exiba os resultados da pesquisa. o
// recebe uma string como entrada (chamada 'type'), que pode ser 'string'
// ou 'matriz'. Se o tipo for 'array', simplesmente exiba o array de resultados como está, usando
// console.log(). Esta deve ser a opção padrão. Se o tipo for 'string', exiba um
// string como "Os resultados da pesquisa são 13, 2, 4, 1".
// 4. Execute o método 'displayResults' no final de cada
// chamada do método 'registerNewAnswer'.
// 5. Bônus: Use o método 'displayResults' para exibir as 2 matrizes no teste
// dados. Use as opções 'array' e 'string'. Não coloque os arrays na enquete
// objeto! Então, como deve ser a palavra-chave this nessa situação?

// Test data for bonus:
// §Data 1: [5, 2, 3]
// §Data 2: [1, 5, 3, 9, 6, 1]

const poll = {
  question: 'Qual é a sua linguagem de programação favorita?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // Isso gera [0, 0, 0, 0].
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Obtém a resposta
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    )
    console.log(answer)
    // Registra a resposta
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++
    this.displayResults()
    this.displayResults('string')
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers)
    } else if (type === 'string') {
      // Os resultadoss da enquete sao 13, 2, 4, 1
      console.log(`Os resultados da pesquisa são ${this.answers.join(', ')}`)
    }
  },
}

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll))
poll.displayResults.call({ answers: [5, 2, 3] }, 'string')
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string')
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] })
