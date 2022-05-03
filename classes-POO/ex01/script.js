class Spaceship {
    constructor(spaceship, crew) {
        this.name = spaceship
        this.crewQuantity = crew
        this.hitched = false
        this.openDoors = false
        this.registered = []
    }
    
    menu() {
        let option
        do {
        option = prompt('Nova espaçonave em aproximação com a Estação Espacial!\n\n1- Cadastrar espaçonave\n2-Lista de espaçonaves cadastradas\n3-Sair do programa')
        switch (option) {
            case "1":
                this.register()
                break;
            case "2":
                this.registered.forEach((value, index) => {
                    alert(`Epaçonave: ${value.name}\nPlataforma: ${index + 1}\n${this.registered[index].crewQuantity} tripulantes a bordo`)
                })
                this.menu()
                break;
            case "3":
                alert('Saindo do programa...')
                console.log(newSpaceship.registered)
                break;
            default:
                alert('Valor inválido')
                this.menu()
                break;
            }
        } while (!option == "3")

    }

    register() {
        let spaceship
        do {
            spaceship = prompt('Informe o nome da espaçonave:')
        } while(!spaceship)
        this.name = spaceship
            
        let crewQuantity
        do {
            crewQuantity = prompt('Informe a quantidade de tribulantes a bordo:')
        } while(!crewQuantity)
        this.crewQuantity = crewQuantity
        
        let confirmation = confirm(`Espaçonave: ${this.name}\nNº de tripulantes: ${this.crewQuantity}\n\n CONFIRME!`)
        if(confirmation) {
            alert('CADASTRO REALIAZADO COM SUCESSO!\n (Iniciando protocolo de engate e abertura das portas...)')

            alert('(Engate efetuado, portas abertas...) DESEMBARQUE LIBERADO!')
            this.registered.push({name: this.name, crewQuantity: this.crewQuantity, hitched: true, openDoors: true})
        } else {
            this.register()
        }
        
        
        this.menu()
    }
}

let newSpaceship = new Spaceship()

newSpaceship.menu()