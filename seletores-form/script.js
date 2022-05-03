const show = document.querySelector('#showInfo')
show.addEventListener('click', showInfo)
function showInfo() {
    const name = document.querySelector("input[name='name']").value
    const color = document.querySelector("select[name='color'] option:checked").text
    const likeProgram = document.querySelector("input[name='like-programming']:checked").value
    const devOptions = document.querySelectorAll("input[name='developer-options']:checked")
    let options = []
    devOptions.forEach(element => { options.push(element.value) })
    let checkedOp = options.join(', ')
    alert(`Nome: ${name}\nCor primária: ${color}\nGosta de programar? ${likeProgram}!\nConhecimentos em: ${checkedOp}`)
}
