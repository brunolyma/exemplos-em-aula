function addPhone () {
    const formPhone = document.querySelector('#phones')
    let newPhone = formPhone.children[0].cloneNode(true)
    let phonePosition = formPhone.children.length + 1
    newPhone.querySelector('label').innerText = `Telefone ${phonePosition}:`
    formPhone.appendChild(newPhone)
}

function printList () {
    message = ''
    let phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) => {
        message += `telefone ${index + 1}: ${phone.value}\n`
    })
    alert(message)
}