class ResourceProcessorStation {
    constructor(name, monthlyProcessing) {
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }
    // METODO STATIC
    static calculateProcessInHours (monthlyProcessing, hours) {
        return monthlyProcessing / 720 * hours
    }
}

let totalProcessing = ResourceProcessorStation.calculateProcessInHours( 500, 6).toFixed(2)

console.log(totalProcessing)


class Spacechip {
    static get desacceleration() { // usamos o GET para funcionar como uma "variável estática", pois em JS não tem essa variável
        return 0.15
    }
    constructor(name) {
        this.name = name
        this.velocity = 0
    }

    speedUp(accelaration) {
        this.velocity += accelaration * (1 - Spacechip.desacceleration)
    }
}

let spacechip = new Spacechip('Apollo')

spacechip.speedUp(100)

console.log(spacechip)
