// SET 

class TransportSpaceship {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    set velocity(newVelocity) { // aqui usamos o SET para setar um valor máximo permitido
        if(newVelocity > 120) {
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }
}

let spaceship = new TransportSpaceship('Coco')

console.log(spaceship)

spaceship.velocity = 130

console.log(spaceship)

// GET

class ResourceProcessStation {
    constructor(name, MonthlyProcessedLoad) {
        this.name = name
        this.MonthlyProcessedLoad = MonthlyProcessedLoad
    }

    get weekly () { // aqui usamos o GET para retornar o resultado de uma expressão com o valor de um atributo
        return this.MonthlyProcessedLoad / 4
    }
}

let resourceProcess = new ResourceProcessStation('Coco', 500)

console.log(resourceProcess.weekly)