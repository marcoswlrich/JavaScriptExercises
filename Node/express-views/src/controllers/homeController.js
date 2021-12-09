exports.home = (req, res) => {
  res.render('index')
}

exports.trataPost = (req, res) => {
  res.send('Olá, sou sua nova rota')
}
