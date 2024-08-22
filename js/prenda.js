const canvas = new fabric.Canvas('canvas');

// Función para cargar la prenda seleccionada en el canvas
function loadPrenda(prendaUrl) {
    fabric.Image.fromURL(prendaUrl, function(img) {
        canvas.clear(); // Limpiar el canvas antes de cargar la nueva prenda
        img.set({
            selectable: false, // La prenda no debe ser movida ni redimensionada
            evented: false, // No interactúa con el mouse
            width: canvas.width, // Ajustar al tamaño del canvas
            height: canvas.height
        });
        canvas.add(img); // Añadir la prenda al canvas
        canvas.sendToBack(img); // Enviar la prenda al fondo
    }, { crossOrigin: 'anonymous' }); // Asegurar que las imágenes externas puedan ser cargadas
}

// Añadir eventos de clic a cada opción de prenda
document.querySelectorAll('.dropdown-content div').forEach(item => {
    item.addEventListener('click', function() {
        const prendaUrl = this.getAttribute('data-prenda');
        document.getElementById('selectedPrenda').innerText = this.innerText; // Actualizar el texto del botón
        loadPrenda(prendaUrl); // Cargar la prenda seleccionada en el canvas
    });
});

// Cargar la primera prenda por defecto
document.addEventListener('DOMContentLoaded', () => {
    loadPrenda('prenda1.png'); // Cambia a la prenda por defecto
});
