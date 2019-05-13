// console.log('The house always wins!')

let idImp = document.getElementById('idInput')
let colorImp = document.getElementById('colorInput')

console.log(idImp, colorImp)

function setCard (elem) {
    let card = document.getElementById(idImp.value)
    card.style.color = colorImp.value
}

function reset () {
    let card = document.getElementById(idImp.value)
    card.style.color = grey
}