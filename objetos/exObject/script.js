let meuCarro = {
    // name: 'Ecosport',
    // type: 'SUV',
    // maxVelocity: 120,
    velocity: 0,
    stopGo: function() {

        let option // criar variavél fora do loop para o prompt aparecer até que digite 0
        do{
            option = prompt('Você deseja 0-parar ou 1-acelerar a nave?')
            if(option == '0') {
                alert(`Estamos parando o veículo!\n\nNome: ${this.name}\nTipo: ${this.type}\nÚltima velocidade atingida: ${this.velocity} km/h`)
            } else if(option == '1') {
                let entry = prompt('Quanto deseja acelerar?')
                meuCarro.speedUp = function(acceleration) {
                    this.velocity += Number(acceleration)
                    if(this.velocity > this.maxVelocity) {
                        alert(`ATENÇÃO VELOCIDADE PERIGOSA/ACIMA DA PERMITIDA!\n\nVelocidade atual: ${this.velocity} km/h\nVelocidade máxima: ${this.maxVelocity} km/h\n\n\n Forçando desaceleração para ${this.velocity = this.maxVelocity * (85/100)} km/h ( - 15% da velocidade permitida)!`)
                    }
                    console.log(`Velocidade atual ${this.velocity} km/h`)
                }
                meuCarro.speedUp(entry)

            } else {
                alert('Valores inseridos são invalidos')
                }
        }   while(option != '0')
    }
}

function registerCar () {
meuCarro.name = prompt('Qual o nome do veículo?')
meuCarro.type = prompt('Qual o tipo do veículo? (ex: hatch, sedan, SUV...')
meuCarro.maxVelocity = prompt('Digite um valor para velocidade perigosa/máxima permitida')
}

registerCar()
console.log(typeof meuCarro.maxVelocity)

meuCarro.stopGo()
console.log(typeof meuCarro.maxVelocity) //não entendi como as operações deram certo sendo MaxVelocity uma string