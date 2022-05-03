function save() {
    event.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let programLang = document.querySelector("select[name='programLang']").value
    alert(`Nome: ${name}\nLinguagem: ${programLang}`)
}