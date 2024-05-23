const form = document.querySelector('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

console.log(email)
console.log(password)

form.addEventListener('submit', (event) => {
     
    if (!validarform) {
        console.log('el formulario NO es VALIDO ...')
        event.preventDefault()   // cancelo el evento
    } else {
        console.log('formulario valido, ENVIAR datos ...')
        alert('datos enviados ...')
    }
})


function validarform() {
    let esValido = true
    esValido = validarCampo('password') && esValido
    return esValido
}

const validarCampo = (campo) => {
    const field = document.getElementById(campo)
    const value = field.value
    if (value === '') {
        return false
    } else {
        return true
    }
}