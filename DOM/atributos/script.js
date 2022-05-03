let verify = document.querySelector('#verify')
verify.addEventListener('change', function() {
    if(verify.value == "disabled") {
        document.querySelector("input[name='some-text']").disabled = true
        const pElement = document.getElementById('message')
        pElement.innerText = 'DESABILITADO!'
        pElement.style.color = 'white'
        pElement.style.backgroundColor = 'red'
    } else {
        document.getElementById('some-text').disabled = false
        const pElement = document.getElementById('message')
        pElement.innerText = 'HABILITADO'
        pElement.style.color = 'white'
        pElement.style.backgroundColor = 'green'
    }
})
