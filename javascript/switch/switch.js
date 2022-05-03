let ly = prompt("Qual a distância em anos-luz desejada?")

alert("Precisará escolher a opção de unidade a seguir")

let chosenType = prompt("1- Quer em Parsec(pc)?\n2- Quer em unidade astronômica(AU)?\n3- Quer em quilômetros(Km)?")

let unity
let convertedDist

switch (chosenOption) {
    case "1":
        unity = "Parsec"
        convertedDist = ly * 0.306601
        break;
    case "2":
        unity = "Unidade Astronômica"
        convertedDist = ly * 63241.1
        break
    case "3":
        unity = "Quilômetros"
        convertedDist = ly * 9.5 * Math.pow(10, 12)
        break
    default:
        unity = "Unidade não identificada"
        convertedDist = "Conversão fora do escopo"
        break;
}

alert("Distância em Anos-Luz: " + ly + "\n" + convertedDist + unity)
