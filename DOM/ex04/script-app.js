class App {
    addProperty() {
        window.event.preventDefault()
        let kind = document.querySelector("select[name='kind']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']").checked
        let property = new Property(kind, area, rented)
        this.addOnList(property)
        document.querySelector('#list').hidden = false
    }
    addOnList(property) {
        let list = document.createElement('li')
        let info = `Tipo: ${property.kind} (área: ${property.area}m²)`
        if(property.rented) {
            let rented = this.rentedMark()
            list.appendChild(rented)
        }
        list.innerHTML += info
        let remove = this.removeButton()
        list.appendChild(remove)
        document.querySelector('#properties').appendChild(list)
    }
    rentedMark() {
        let mark = document.createElement('span')
        mark.style.color = 'white'
        mark.style.backgroundColor = 'red'
        mark.innerText = 'ALUGADO'
        return mark
    }
    removeButton() {
        let remove = document.createElement('button')
        remove.setAttribute('onclick', 'app.remove()')
        remove.innerText = 'Remover'
        return remove
    }
    remove () {
        let remove = window.event.target.parentNode
        document.getElementById('properties').removeChild(remove)
    }
}