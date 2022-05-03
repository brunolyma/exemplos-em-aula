class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot() {
        if(this.shotsLeft > 0) {
        console.log('Bang!')
        this.shotsLeft -= 1
        } else {
            throw new Error(`Arma ${this.identifier} sem munição, recarregue!`)
        }
    }

    reload() {
        this.shotsLeft = 5
    }
}

let fenix = new SpaceshipWeapon('b10')
try {
    fenix.shoot()
    fenix.shoot()
    fenix.shoot()
    fenix.shoot()
    fenix.shoot()
    fenix.shoot()
} catch (error) {
    console.error(error.message)
    fenix.reload()    
} finally {
    console.log('Uau!')
}

console.log(fenix)


let math = new Math()
console.log(math)