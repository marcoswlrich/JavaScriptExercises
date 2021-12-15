require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('Conectado a base de dados')
    app.emit('OK')
  })
  .catch(err => console.log(err))

const session = require('express-session')
const MongoStore = require('connect-mongo')

const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')
const middlewares = require('./src/middlewares/middleware')
//  /profiles/1234?caampanha=googleads&nome_campanha=seila

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
  secret: 'fhfhfhfhfhfhfhff',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, //7dias
    httpOnly: true
  }
})
app.use(sessionOptions)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middlewares)
app.use(routes)

app.on('OK', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor rodando...')
  })
})
