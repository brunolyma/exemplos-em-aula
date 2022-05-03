let hitchedSpaceships = [
    ["Fênix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let highlights = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let bigCrew = hitchedSpaceships.filter( spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

bigCrew

let ongoingHitched = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

ongoingHitched


highlights

let message = `Espaçonaves com mais de 9 tripulantes: ${bigCrew.join(', ')}`
message += `\nPlataforma com processo de engate: ${ongoingHitched + 1}`
message += `\nEspaçonaves destacadas: ${highlights.join(', ')}`

message