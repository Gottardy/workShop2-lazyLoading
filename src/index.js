// Importar la función observeImage desde el archivo observer.js
import { observeImage } from './lazy.js';


/**
 * Inserta un nodo con una imagen en el contenedor especificado.
 * @param {string} containerId - El ID del contenedor donde se insertará el nodo.
 * @param {string} imageUrl - La URL de la imagen que se insertará.
 */
let counterChilds = 0;
function insertImageNode(containerId, imageUrl) {
    // Obtener el contenedor por su ID
    const container = document.getElementById(containerId);
    

    // Verificar si el contenedor existe
    if (!container) {
        console.error(`Contenedor con ID '${containerId}' no encontrado.`);
        return;
    }

    // Crear el nodo 'div' con el ID y la clase especificada
    const div = document.createElement('div');
    div.id = 'image';
    div.classList.add('p-4');
    div.classList.add('my-4');
    div.classList.add('bg-white');
    div.classList.add('shadow-md');
    div.classList.add('rounded');

    // Crear el nodo 'img' con la URL de la imagen y las clases especificadas
    const img = document.createElement('img');
    img.dataset.src = imageUrl;
    img.alt = '';
    img.classList.add('mx-auto');
    img.width = 320;
    img.loading = 'lazy';

    // Añadir el nodo 'img' dentro del 'div'
    div.appendChild(img);

    // Añadir el 'div' al contenedor
    container.appendChild(div);
    counterChilds++
    console.log(`Total de imagenes: ${counterChilds}`)
    // Llamar a la función para observar la imagen
    observeImage(img,counterChilds);
}

/**
 * Elimina todos los nodos con imágenes del contenedor especificado.
 * @param {string} containerId - El ID del contenedor del que se eliminarán las imágenes.
 */
function clearImageNodes(containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Contenedor con ID '${containerId}' no encontrado.`);
        return;
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//Función random
const maximum = 122
const minimum = 1
const random = () => Math.floor(Math.random()*(maximum - minimum)) + minimum 


// Accion del boton insertar
const ActionInsertImage = () => {
    // Uso de la función
    insertImageNode('container_images', `https://randomfox.ca/images/${random()}.jpg`);
}

// Accion del boton insertar
const ActionClearImage =() => {
    clearImageNodes('container_images');
}

// Manejar el clic del botón para insertar la imagen
document.getElementById('insertButton').addEventListener('click', ActionInsertImage);

// Manejar el clic del botón para limpiar las imágenes
document.getElementById('clearButton').addEventListener('click',ActionClearImage );