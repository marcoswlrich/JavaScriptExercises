/*
**Buscando e contando dados em Arrays

Baseado no Array de Livros por categoria abaixo, faça os
seguintes desafios
 * Contar o número de categorias e o número de livros em cada categoria
 * Contar o número de autores
 * Mostrar livros do autor Augusto Cury
 * Transformar a função acima em uma função que irá receber o nome do autor
 e devolver os livros desse autor

*/
const livrosCategoria = [
  {
    categoria: 'Riqueza',
    livros: [
      {
        titulo: 'Os segredos da mente milionáros',
        autor: 'T. Marv Eker'
      },
      {
        titulo: 'O homem mais rico da Babilônia',
        autor: 'George Clason'
      },
      {
        titulo: 'Pai rico, pai pobre',
        autor: 'Robert Kiyosaki'
      }
    ]
  },
  {
    categoria: 'Inteligência Emocional',
    livros: [
      {
        titulo: 'Você é insubstituível',
        autor: 'Augusto Cury'
      },
      {
        titulo: 'Ansiedade - Como enfretar o mal do século',
        autor: 'Augusto Cury'
      },
      {
        titulo: 'Os 7 hábitos das pessoas altamente eficazes',
        autor: 'Sthephen Covey'
      }
    ]
  }
]

const totalCategorias = livrosCategoria.length

console.log('Total de categorias cadastradas: ', totalCategorias)
for (let categoria of livrosCategoria) {
  console.log('Total de categorias: ', categoria.categoria)
  console.log(categoria.livros.length)
}

function contaAutores() {
  let autores = []

  for (let categoria of livrosCategoria) {
    for (let livro of categoria.livros) {
      if (autores.indexOf(livro.autor) == -1) {
        autores.push(livro.autor)
      }
    }
  }
  console.log('Total de autores: ', autores.length)
}

contaAutores()

function livrosAugustoCury() {
  let livros = []

  for (let categoria of livrosCategoria) {
    for (let livro of categoria.livros) {
      if (livro.autor === 'Augusto Cury') {
        livros.push(livro.titulo)
      }
    }
  }
  console.log('Livros de Augusto Cury: ', livros)
}

livrosAugustoCury()

function livrosDoAutor(autor) {
  let livros = []

  for (let categoria of livrosCategoria) {
    for (let livro of categoria.livros) {
      if (livro.autor === autor) {
        livros.push(livro.titulo)
      }
    }
  }
  console.log(`Livros do autor ${autor}: ${livros.join()} `)
}

livrosDoAutor('Sthephen Covey')
