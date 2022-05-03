const carros = [
    {nome: 'Ecosport',
    potencia: 112,
    combust: 'flex'},
    {nome: '500e',
    potencia: 118,
    combust: 'eletrico'
    }
]

let filteredCars = carros.filter((carro) => carro.nome.length <= 5)
console.log(filteredCars)

let filteredHP = carros.filter( (carro) => carro.potencia > 100)
console.log(filteredHP)

let filteredNames = carros.map( (carro) => carro.nome.toUpperCase() )
console.log(filteredNames)

carros.push({nome: 'Idea',
potencia: 131,
combust: 'flex'})

console.table(carros)

let foundComb = carros.find( (carro) => carro.combust == 'flex')
console.log(foundComb)

/*
let aqui = ['flex', 'eletrico']
aqui.unshift('diesel')

let achei = aqui.indexOf('flex')
console.log(achei)
*/

carros.forEach((value, index) =>  console.log(`${value['nome']} está índice ${index}`))

let someEletric = carros.some( (carro) => {
    return carro.combust === 'eletrico'
})
if(someEletric) {
    someEletric = 'Há carro elétrico!'
}
console.log(someEletric)

let allFlex = carros.every( (carro) => carro.combust == 'flex' )
if(!allFlex) {
    console.log('Não são todos flex!')
}

let todaPotencia = carros.reduce( (value, carro) => {
    return carro.potencia + value
}, 0)

console.log(todaPotencia)

let obj = {nome: 'Bruno',
           idade: 24,
           peso: 78.5,
           aniversaio(p=0){
               console.log(`Feliz aniversaio! Mais ${p} ano de vida!` )
               this.idade += p
           }
        }

console.table(obj.aniversaio(1))
console.log(obj.idade)

