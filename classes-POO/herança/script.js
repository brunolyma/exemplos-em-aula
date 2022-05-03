class Car {
  constructor(name, type, maxVelocity) {
    this.name = name;
    this.type = type;
    this.maxVelocity = maxVelocity;
    this.currentVelocity = 0;
  }

  set velocity (newVelocty) {
    if(newVelocty > this.maxVelocity * 2) {
      this.currentVelocity = this.maxVelocity
    }
  }

  speedUp(acceleration) {
    this.currentVelocity += acceleration;
    if (
      this.currentVelocity >= this.maxVelocity - 10 ||
      this.currentVelocity == this.maxVelocity - 1
    ) {
      console.log("Atenção próximo a velocidade máxima! Evite danos!");
    }
    this.velocity = this.currentVelocity
  }
}

class Carro extends Car {
  constructor(name, type, maxVelocity, power) {
    super(name, type, maxVelocity);
    this.potencia = power;
  }

  speedUp(acceleration) {
    if (acceleration > this.maxVelocity * 2) {
      console.log("Velocidade muito acima da permitida. Parando o véiculo.");
      this.currentVelocity = 0;
    } else if (acceleration > this.maxVelocity) {
      acceleration /= 2;
      console.log(
        `Definindo velocidade atual a ${acceleration}km/h  para evitar danos!`
      );
    }
    super.speedUp(acceleration);
  }
}

let myCar = new Carro("Ecosport", "SUV", 100, 112);

console.log(myCar.currentVelocity);

myCar.speedUp(100);

console.log(myCar.currentVelocity);
