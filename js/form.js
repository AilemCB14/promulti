function validar(id) {
    try {
        var elemento = document.getElementById(id);
        if (elemento && elemento.checkValidity()) {
            elemento.style.borderColor = "blue";
        } else {
            elemento.style.borderColor = "red";
        }
    } catch (error) {
        console.error("Error en la validación del campo '" + id + "': ", error);
        // Opcional: Mostrar un mensaje al usuario, e.g., alert("Error inesperado en validación.");
    }
}

function enviarValidar(event) {
    try {
        var nombrevalido = document.getElementById('name').checkValidity();
        var emailvalido = document.getElementById('email').checkValidity();
        var mensajevalido = document.getElementById('message').checkValidity();

        if (nombrevalido && emailvalido && mensajevalido) {
            alert("Formulario procesado exitosamente");
            document.getElementById('contact-form').reset();
            location.reload();
        } else {
            event.preventDefault();
            alert("No se ha podido procesar el formulario, intente nuevamente");
        }
    } catch (error) {
        console.error("Error al procesar el envío del formulario: ", error);
        event.preventDefault();  // Previene el envío en caso de error
        alert("Ha ocurrido un error inesperado. Intente nuevamente.");
    }
}

