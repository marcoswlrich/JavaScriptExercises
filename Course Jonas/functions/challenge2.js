// Este é mais um desafio de pensamento do que um desafio de codificação 🤓
// Suas tarefas:
// 1. Pegue o IIFE abaixo e no final da função, anexe um ouvinte de evento que
// muda a cor do elemento h1 selecionado ('cabeçalho') para azul, cada vez
// o elemento do corpo é clicado. Não selecione o elemento h1 novamente!
// 2. E agora explique a si mesmo (ou a alguém ao seu redor) por que isso
// funcionou! Leve tudo o tempo que você precisa. Pense em quando exatamente a
// função de retorno de chamada é executada,e o que isso significa para as
// variáveis ​​envolvidas neste exemplo.

;(function () {
  const header = document.querySelector('h1')
  header.style.color = 'red'
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue'
  })
})()
