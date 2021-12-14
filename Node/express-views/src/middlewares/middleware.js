module.exports = (req, res, next) => {
  console.log()
  console.log('Passei no Middleware')
  console.log()
  next()
}
