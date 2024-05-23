
function validacion() {
    document.getElementById('formulario').addEventListener("click", function (e) {
        e.preventDefault();
    })

    const email = document.getElementById('email').value
    console.log(email)
    const password = document.getElementById('password').value
    console.log(password)

    if (email == '' || password == '') {
        Swal.fire("debes completar ambos campos ...");
    } else {
        window.location.href = "../index.html";

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sesion iniciada",
            showConfirmButton: false,
            timer: 3400
        });
    }

}
