let text = document.querySelector("input[name='text']").addEventListener('change', doChange)
let changeEvent = new Event('change')

// dispatchEvent() = recebe uma varíavel com um valor de evento, e assim provoca o evento e dispara uma função que tiver
// removeEventListener('evento', "funçãoASerRemovidaDoEvento()")

function doChange () {
    alert(event.target.value)
}