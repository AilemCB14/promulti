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