let spacialStation = {
    name: 'Receptora',
    plataformQuantity: 15,
    shape: 'Esférica'
}
console.log(spacialStation.name.toUpperCase())
//chamando o valor atribuído à propriedade 'name'

let spaceshipsNames = ['Fenix', 'Puller', 'Golias']
console.log(spaceshipsNames[1].toUpperCase())
//chamando o valor através do seu índice


//  ARRAYS PODEM ESTÁ DENTRO DE OBJETOS E OBJETOS PODEM ESTÁ DENTRO DE ARRAYS

let spaceship = { //objeto com uma array dentro
    name: 'Supernova',
    type: 'Batalha',
    crew: ['Cap. Bruno', 'Ninha', 'Zezinho']
}

spaceship.crew.push('Tenente Neguinha')

console.log(spaceship)

let carros = [ //array com objetos dentro
    {name: 'Ford Ecosport', potencia: 112},
    {name: 'Fiat 500e', potencia: 118}
]

carros[0].ano = '2013'
carros[1].motor = 'eletrico'
console.log(carros)

carros.forEach( (value, index) => {
    console.log(`${value.name} no índice ${index} tem ${value.potencia} cavalos de potência`)
})

let eu = { //objeto com arrays dentro de outro objeto 
    name: 'Bruno',
    idade: '25',
    familia: {
        namorada: 'Catarina',
        pais: ['Benedito', 'Degivan'],
        irmas: ['Nayara', 'Daiane', 'Elaine', 'Daniela']
    }
}

console.log(eu.familia.pais[1])
console.log(eu.familia.namorada)
console.log(eu.familia.irmas[0])

eu.familia.irmas.sort()
console.log(eu.familia.irmas)

//Objetos com funções dentro
let nave = {
    name: 'Demeter', // propriedades que recebem tipos de dados normais são chamados de atributos
    type: 'Extração',
    maxCrew: 20,
    turnOn: function() { // funções dentro de objetos são denominados como 'methods'
        console.log('Preparando propulsão!')
        console.log('Ligando computador de bordo!')
    }
}
nave.turnOn()
console.log(nave)

nave.velocity = 0
nave.speedUp = function(acceleration) {
    this.velocity += acceleration
}

nave.speedUp(80)
nave.registered = new Object()
console.log(nave)


