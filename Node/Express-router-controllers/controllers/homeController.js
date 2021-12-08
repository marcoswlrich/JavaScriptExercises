exports.home = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do Cliente: <input type="text" name="coisa">
  <br>Outro campo: <input type="text" name="aqui outro campo">
  <button>Olá mundo</button>
  </form>
  `)
}

exports.trataPost = (req, res) => {
  res.send('Olá, sou sua nova rota')
}
