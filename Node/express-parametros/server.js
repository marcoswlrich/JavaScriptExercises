const express = require('express')
const app = express()

//  /profiles/1234?caampanha=googleads&nome_campanha=seila

app.use(
  express.urlencoded({
    extended: true
  })
)

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/testes/:idUsuarios?/:parametros?', (req, res) => {
  console.log(req.params)
  console.log(req.query) //query strings
  res.send('oi')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Recebi o formulário')
})

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000')
  console.log('Servidor rodando...')
})
