let element = document.querySelector('#text')
document.getElementById('backInBlue').addEventListener('click', function () {
    element.style.backgroundColor = 'blue'
})
document.getElementById('transparency').addEventListener('click', function(){
    element.style.backgroundColor = 'transparent'
})
document.getElementById('redFont').addEventListener('click', function() {
    element.classList.add('red')
})
document.querySelector('#removeRedFont').addEventListener('click', function() {
    element.classList.remove('red')
})
