let nameSpaceship = prompt("Qual o nome da nave?")

let warp = 0

let manyWarp = prompt("Deseja entrar em dobra espacial? \n1- Sim \n2- Não")

while(manyWarp == 1) {
    warp ++ // ou dobra += é o mesmo que dobra = dobra + 1
    manyWarp = prompt("Deseja entrar em dobra espacial? \n1- Sim \n2- Não")
}

alert("Nave: " + nameSpaceship + "\nNúmero de dobra(s): " + warp)