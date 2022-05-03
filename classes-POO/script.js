class MeuCarro {
    constructor (name, hp) {
        this.name = name
        this.hp = hp
    }
}

let carro = new MeuCarro('Ecosport', 112)

console.log(typeof carro)

class Car {
    constructor(carro, hp = 112) {
        this.name = carro
        this.type = hp
    }
}

let ecosport = new Car ('Ecosport')
let fiat500 = new Car ('500e', 118)

console.log(typeof ecosport)
console.log(typeof MeuCarro)

class Spaceship {
    constructor(name) {
        this.name = name
        this.velocity = 0
    }
    speedUp(acceleration) {
        this.velocity += acceleration
    }
}

let artemis = new Spaceship('Artemis')
console.log(artemis)

artemis.velocity = 10

artemis.speedUp(50)
console.log(artemis)

class HarryPotter {
    constructor(name, livros, tema) {
        this.titulo = name
        this.nDeLivros = livros
        this.tema = tema
    }
}

class ReadedBooks {
    constructor(genero, ultimo, nameFav, numFav, temaFav) {
        this.generoFavorito = genero
        this.ultimoLido = ultimo
        this.favorito = new HarryPotter(nameFav, numFav, temaFav)
    }
}

let livrosMaisLidos = new ReadedBooks('Fantasia', 'Eragon', 'Harry Potter', 7, 'Bruxos')

console.log(livrosMaisLidos)