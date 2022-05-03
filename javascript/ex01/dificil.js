let pilotName = prompt("Qual o seu nome, piloto?")

let newVelocity = prompt("Qual a nova velocidade desejada?")

let confirmVelocity = confirm("A velocidade desejada é " + newVelocity + "km/h?")

let velocity = 0

if(confirmVelocity) {
    velocity = newVelocity
}

if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if(velocity < 80) {
    alert("Parece uma boa velocidade para manter")
} else if(velocity <= 100) {
    alert("Velocidade alta. Considere diminuir")
} else if(velocity > 100) {
    alert("Velocidade perigosa. Controle automático forçado")
}
alert(pilotName + ", sua velocidade atual é de: " +velocity + " km/h")
