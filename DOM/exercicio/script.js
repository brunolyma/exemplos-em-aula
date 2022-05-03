const save = document.querySelector('#save')
save.addEventListener('click', saveHouse)

function saveHouse() {
    let area = document.querySelector("input[name='area']").value
    let num = document.querySelector("input[name='number']").value
    let neighbur = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value

    let newLi = document.createElement('li')
    newLi.innerText = `${area}m², número ${num} (${neighbur} - ${city})`

    let removeB = document.createElement('button')
    removeB.type = 'button'
    removeB.setAttribute('onclick', 'removeHouse(this)')
    removeB.innerText = 'Remover'
    newLi.appendChild(removeB)

    document.getElementById('house-list').appendChild(newLi)
}

function removeHouse(event) {
    let removeLi = event.parentNode
    document.getElementById('house-list').removeChild(removeLi)
}
