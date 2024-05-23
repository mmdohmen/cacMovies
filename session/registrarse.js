function verificar() {
    document.getElementById('formulario').addEventListener("click", function (e) {
        e.preventDefault();
    })

    const email = document.getElementById('email').value
    const emailbis = document.getElementById('emailbis').value
    console.log(email, emailbis)
    const password = document.getElementById('password').value
    const passwordbis = document.getElementById('passwordbis').value
    console.log(password, passwordbis)

    if (email == '' || emailbis == '' || password == '' || passwordbis == '') {
        Swal.fire(" debes COMPLETAR todos los CAMPOS ...");
    } else if (email != emailbis || password != passwordbis) {
        Swal.fire("emails y/o contraseñas NO COINCIDEN ...");
        document.getElementById('emailbis').value = ''
        document.getElementById('password').value = ''
        document.getElementById('passwordbis').value = ''
    } else {
        window.location.href = "../index.html";
    }

}