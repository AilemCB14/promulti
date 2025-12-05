const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (menuLink) {  // Verificación para evitar errores si el enlace no existe
            if (entry.isIntersecting) {
                menuLink.classList.add("selected");
                entry.target.classList.add("visible"); 
            } else {
                menuLink.classList.remove("selected");
                entry.target.classList.remove("visible");
            }
        }
    });
}, {
    threshold: 0.5  // Se activa cuando el 50% de la sección es visible
});

// Observar las secciones
observer.observe(document.querySelector('#home'));
observer.observe(document.querySelector('#personajes'));
observer.observe(document.querySelector('#opening'));
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


//////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('welcomeBanner');

    if (banner) {
        
        // 1. Primer setTimeout: Muestra el banner después de 0.5 segundos.
        setTimeout(function() {
            // Remueve la clase 'oculto' y añade 'visible' para iniciar el efecto de aparición
            banner.classList.remove('oculto');
            banner.classList.add('visible');
            
            // 2. Segundo setTimeout (ANIDADO): Oculta el banner después de 2 segundos.
            setTimeout(function() {
                // Remueve la clase 'visible' y añade 'oculto' para iniciar el efecto de desaparición
                banner.classList.remove('visible');
                banner.classList.add('oculto');
            }, 2000); // 4000 milisegundos (2 segundos)
            
        }, 500); // El banner aparece después de 500 milisegundos (0.5 segundos)
    }
});
