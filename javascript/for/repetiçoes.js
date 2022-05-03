let spaceship = prompt("Qual o nome da nave?")

let character = prompt("Qual o caracter proibido em: >" + spaceship + "< ?")

let newSpaceshipName = ""

for(let i = spaceship.length-1; i < spaceship.length; i = i - 1) {
    if(spaceship[i] == character) {
        break
    } else {
        newSpaceshipName += spaceship[i]
    }
}

alert("O nome da nave invertido e interrompido no carácter proibido é: " + newSpaceshipName)