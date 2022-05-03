let randomNumber = Math.floor(Math.random()*11)
console.log(randomNumber)

let kickedNumber
let shots = 0

// do {

//     kickedNumber = prompt("Escolha um número de 0 a 10")
    
// switch (true) {
//     case  randomNumber == kickedNumber:
//         alert("Acertou!")
//         break;
//     case randomNumber > kickedNumber:
//         alert("Chutou baixo!")
//         break;
//     case randomNumber < kickedNumber:
//         alert("Chutou alto!")
//         break;
//     default:
//         0
//         break;
// }
// } while(randomNumber != kickedNumber)


do {
    
    kickedNumber = prompt("Escolha um número de 0 a 10")
    shots++
if(randomNumber == kickedNumber) {
    alert(`Acertou! Era ${randomNumber}!\nNúmero de tentativas: ${shots}`)
} else if(randomNumber < kickedNumber) {
    alert("Chutou alto!")
} else if(randomNumber > kickedNumber) {
    alert("Chutou baixo!")
}
} while(randomNumber != kickedNumber)
