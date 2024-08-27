/**
 * Configura el IntersectionObserver para observar la visibilidad de las imágenes.
 * @param {HTMLImageElement} imageElement - El elemento de imagen a observar.
 */

export function observeImage(imageElement) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                const url = entry.target.dataset.src
                console.log(`La imagen ${entry.target.dataset.src} está visible en la pantalla.`);
                // Aquí puedes agregar más lógica para manejar la imagen cuando se vuelve visible
                entry.target.src=url;
                counterViewImages++;
                printLog();
                observer.unobserve(entry.target); // Dejar de observar después de que la imagen sea visible
            }
        });
    }, { threshold: 0.3 }); // Configura el umbral de visibilidad

    observer.observe(imageElement);
}
