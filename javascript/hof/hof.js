function slowDown(velocity, printer) {
    let desacceleration = 20

    while(velocity > 0) {
        printer(velocity)
        velocity = velocity - desacceleration
    }

    alert("Parada total da nave, desembarque liberado!")
}

// let printVelocity = velocity => console.log("Desacelerando, velocidade atual: " + velocity)

let printVelocity = function (velocity) {
    console.log("Desacelerando, velocidade atual: " + velocity)
}

slowDown(150, printVelocity)