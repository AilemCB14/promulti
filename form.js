function validar(id){
    var elemento = document.getElementById(id);
    if (elemento.checkValidity()){
        elemento.style.borderColor="blue";

    }else{
        elemento.style.borderColor="red";
    }
}

function enviarValidar(){

    var nombrevalido = document.getElementById ('name').checkValidity();
    var emailvalido = document.getElementById ('email').checkValidity();
    var mensajevalido = document.getElementById ('message').checkValidity();

    if (nombrevalido && emailvalido && mensajevalido) {
        alert ("Formulario procesado exitosamente");
        document.getElementById('contact-form').reset();
        location.reload();
    
    } else {
       event.preventDefault();
      alert("No se ha podido procesar el formulario, intente nuevamente");
    }
}