function getProductosPorCategoria(categoria) {
    // Aquí podrías hacer una solicitud AJAX para obtener productos de una API o usar datos locales
    // Por simplicidad, se agregará un ejemplo de productos aquí
    switch (categoria) {
        case 'gorras':
            return [
                { imagen: 'imagenes/productos/gorra1.jpg', nombre: 'Gorra New Era Arizona Cardinals 39THIRTY Team Classic', precio: '$20', genero: 'Unisex' },
                { imagen: 'imagenes/productos/gorra2.jpg', nombre: 'Gorra New Era Golden State Warriors 59FIFTY Citrus Pop', precio: '$20', genero: 'Unisex' },
                { imagen: 'imagenes/productos/gorra3.jpg', nombre: 'Gorra New Era Los Angeles Dodgers 59FIFTY MLB Basic', precio: '$20', genero: 'Unisex' }
            ];
        case 'destacado':
            return [
                { imagen: 'imagenes/productos/gorra4.jpg', nombre: 'Gorra New Era New York Mets 2023 Batting Practice 59FIFTY', precio: '$25', genero: 'Hombre' },
                { imagen: 'imagenes/productos/gorra5.jpg', nombre: 'Gorra New Era New York Yankees 9FIFTY Mlb Basic', precio: '$25', genero: 'Mujer' },
                { imagen: 'imagenes/productos/gorra6.jpg', nombre: 'Gorra New Era Boston Red Sox Team Classic 3930', precio: '$25', genero: 'Unisex' }
            ];
        case 'lifestyle':
            return [
                { imagen: 'imagenes/productos/gorra7.jpg', nombre: 'Gorra New Era Phoenix Suns White Crown Team 9FIFTY', precio: '$30', genero: 'Unisex' },
                { imagen: 'imagenes/productos/gorra5.jpg', nombre: 'Gorra New Era New York Yankees 9FIFTY Mlb Basic', precio: '$30', genero: 'Hombre' },
                { imagen: 'imagenes/productos/gorra8.jpg', nombre: 'Gorra New Era Kansas City Chiefs NFL22 Sideline 9TWENTY', precio: '$30', genero: 'Mujer' }
            ];
        default:
            return [];
    }
}

window.getProductosPorCategoria = getProductosPorCategoria;

// Función para llenar la lista de productos en el DOM
function llenarProductos(categoria) {
    const productosWrapper = document.querySelector('.productos-list');
    productosWrapper.innerHTML = ''; // Limpiar contenido anterior

    const productos = getProductosPorCategoria(categoria);
    productos.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="">
                <div class="overlay">
                    <button class="comprar-btn">Comprar</button>
                </div>
                <p><strong>${producto.nombre}</strong></p>
                <p><span class="precio">${producto.precio}</span></p>
                <p>${producto.genero}</p>
            </div>
        `;
        productosWrapper.innerHTML += productoHTML;
    });
}

// Event listener para los elementos de la lista de novedades
const novedadesItems = document.querySelectorAll('.novedades-item');
novedadesItems.forEach(item => {
    item.addEventListener('click', () => {
        const categoria = item.getAttribute('data-categoria');
        llenarProductos(categoria);
    });
});

// Llenar inicialmente con la primera categoría al cargar la página
llenarProductos('gorras');
