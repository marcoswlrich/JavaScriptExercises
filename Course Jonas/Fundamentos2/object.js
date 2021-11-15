const marcos = {
  firsName: 'Marcos',
  lastName: 'Wlrich',
  anoNascimento: 1991,
  job: 'Dev',
  amigos: ['Pedro', 'João', 'Carlos'],
  permissaoDirigir: true,

  calcIdade: function () {
    this.age = 2037 - this.anoNascimento
    return this.age
  },

  getSummary: function () {
    return `${this.firsName} is a ${this.calcIdade()} - year old ${
      marcos.job
    }, and he has ${this.permissaoDirigir ? 'a' : 'no'} drives License`
  }
}

console.log(marcos.calcIdade())
console.log(marcos.getSummary())
