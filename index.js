const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (menuLink) {  // Verificación para evitar errores si el enlace no existe
            if (entry.isIntersecting) {
                menuLink.classList.add("selected");
            } else {
                menuLink.classList.remove("selected");
            }
        }
    });
}, {
    threshold: 0.5  // Se activa cuando el 50% de la sección es visible
});

// Observar las secciones
observer.observe(document.querySelector('#home'));
observer.observe(document.querySelector('#personajes'));
observer.observe(document.querySelector('#contact'));

//////////////////////////////////////////////////

let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML = 'Leer Menos';
    }
    else{
        hideText_btn.innerHTML = 'Leer Mas';
    }
}

