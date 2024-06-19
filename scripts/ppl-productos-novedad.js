function getProductosPorCategoria(categoria) {
    switch (categoria) {
        case 'gorras':
            return [
                { id: 1, imagen: 'imagenes/productos/gorra5.jpg', nombre: 'Gorra New Era New York Yankees 9FIFTY Mlb Basic', precio: '$20', genero: 'Unisex' },
                { id: 2, imagen: 'imagenes/productos/gorra2.jpg', nombre: 'Gorra New Era Golden State Warriors 59FIFTY Citrus Pop', precio: '$20', genero: 'Unisex' },
                { id: 3, imagen: 'imagenes/productos/gorra3.jpg', nombre: 'Gorra New Era Los Angeles Dodgers 59FIFTY MLB Basic', precio: '$20', genero: 'Hombre' }
            ];
        case 'destacado':
            return [
                { id: 4, imagen: 'imagenes/productos/gorra4.jpg', nombre: 'Gorra New Era New York Mets 2023 Batting Practice 59FIFTY', precio: '$20', genero: 'Unisex' },
                { id: 5, imagen: 'imagenes/productos/gorra5.jpg', nombre: 'Gorra New Era New York Yankees 9FIFTY Mlb Basic', precio: '$20', genero: 'Unisex' },
                { id: 6, imagen: 'imagenes/productos/gorra6.jpg', nombre: 'Gorra New Era Boston Red Sox Team Classic 3930', precio: '$20', genero: 'Mujer' }
            ];
        case 'lifestyle':
            return [
                { id: 7, imagen: 'imagenes/productos/gorra7.jpg', nombre: 'Gorra New Era Phoenix Suns White Crown Team 9FIFTY', precio: '$30', genero: 'Hombre' },
                { id: 8, imagen: 'imagenes/productos/gorra17.jpg', nombre: 'Gorra New Era Arizona Cardinals 39THIRTY Team Classic', precio: '$25', genero: 'Hombre' },
                { id: 9, imagen: 'imagenes/productos/gorra11.jpg', nombre: 'Gorra New Era Boston Celtics Throwback Corduroy 59FIFTY', precio: '$30', genero: 'Hombre' }
            ];
        default:
            return [];
    }
}

function llenarProductos(categoria) {
    const productosWrapper = document.querySelector('.productos-list');
    productosWrapper.innerHTML = ''; // Limpiar contenido anterior

    const productos = getProductosPorCategoria(categoria);
    productos.forEach(producto => {
        const isSale = [1, 6,5, 9, 2].includes(producto.id); // IDs de productos en oferta
        const saleTag = isSale ? '<div class="sale-tag">SALE</div>' : '';

        const productoHTML = `
            <div class="producto" data-id="${producto.id}">
                ${saleTag}
                <a href="producto.html">
                    <img src="${producto.imagen}" alt="">
                </a>    
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

    // Añadir event listener para los botones de comprar
    document.querySelectorAll('.comprar-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.closest('.producto');
            const id = parseInt(productElement.dataset.id);
            const nombre = productElement.querySelector('p strong').innerText;
            const precio = productElement.querySelector('.precio').innerText;
            const imagen = productElement.querySelector('img').src;
            const genero = productElement.querySelector('p:last-child').innerText;

            const product = { id, nombre, precio, imagen, genero, quantity: 1 };
            window.addToCart(product);
        });
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
