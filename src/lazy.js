/**
 * Configura el IntersectionObserver para observar la visibilidad de las imágenes.
 * @param {HTMLImageElement} imageElement - El elemento de imagen a observar.
 */
let counterChildsViews=0;
export function observeImage(imageElement, counterChilds) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const url = entry.target.dataset.src
                console.log(`La imagen ${entry.target.dataset.src} está visible en la pantalla.`);
                // Aquí puedes agregar más lógica para manejar la imagen cuando se vuelve visible
                entry.target.src = url;
                counterChildsViews++;
                console.log(`Total de imagenes: ${counterChilds}`)
                console.log(`Imagenes cargadas: ${counterChildsViews}`)
                observer.unobserve(entry.target); // Dejar de observar después de que la imagen sea visible
            }
        });
    }, { threshold: 0.21 }); // Configura el umbral de visibilidad

    observer.observe(imageElement);
}
