const express = require('express')
const app = express()

//  SIG    CRIAR   LER   ATUALIZAR  APAGAR
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         POST    GET   PUT        DELETE

//http://meusite.com/ <- GET -> entregue a página

app.get('/', (req, res) => {
  res.send('Hello world')
})

//outra rota

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato')
})

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000')
  console.log('Servidor rodando...')
})
