let spaceship = prompt("Qual o nome da nave?")

let character = prompt("Qual caracter do nome " + spaceship + " quer substituir?")

let newCharacter = prompt("E por qual caracter quer substituir?")

let newSpaceship = ""

for (let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == character) {
        newSpaceship += newCharacter
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert("O novo nome da nave é: " + newSpaceship)
