class ControleTv {
  constructor(tv) {
    this.tv = tv
    this.volume = 0
  }

  //Método de instância
  aumentarVolume() {
    this.volume += 2
  }
  diminuirVolume() {
    this.volume -= 2
  }

  //metodo estatico
  static trocaPilha() {
    console.log('Ok, vou trocar')
  }
}

const control1 = new ControleTv('LG')
control1.aumentarVolume()
control1.aumentarVolume()
control1.diminuirVolume()
console.log(control1)

ControleTv.trocaPilha()
