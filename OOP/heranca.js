class DispositEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já ligado')
      return
    }
    this.ligado = true
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + ' já desligado')
      return
    }
    this.ligado = false
  }
}

class Smartphone extends DispositEletronico {
  constructor(nome, cor, modelo) {
    super(nome)
    this.cor = cor
    this.modelo = modelo
  }
}

const s1 = new Smartphone('Iphone', 'Preto', '12 Pro')
console.log(s1)
s1.ligar()
s1.ligar()
s1.desligar()
s1.desligar()
