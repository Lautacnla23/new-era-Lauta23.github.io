document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const nextButton = document.querySelector('.carousel-control.next');
    const prevButton = document.querySelector('.carousel-control.prev');
    let currentIndex = 0;
    const productos = [
        { imagen: 'imagenes/productos/gorra1.jpg', nombre: 'Gorra New Era Arizona Cardinals 39THIRTY Team Classic', precio: '$20', genero: 'Unisex' },
        { imagen: 'imagenes/productos/gorra2.jpg', nombre: 'Gorra New Era Golden State Warriors 59FIFTY Citrus Pop', precio: '$20', genero: 'Unisex' },
        { imagen: 'imagenes/productos/gorra3.jpg', nombre: 'Gorra New Era Los Angeles Dodgers 59FIFTY MLB Basic', precio: '$20', genero: 'Unisex' },
        { imagen: 'imagenes/productos/gorra4.jpg', nombre: 'Gorra New Era New York Mets 2023 Batting Practice 59FIFTY', precio: '$25', genero: 'Hombre' },
        { imagen: 'imagenes/productos/gorra5.jpg', nombre: 'Gorra New Era New York Yankees 9FIFTY Mlb Basic', precio: '$25', genero: 'Mujer' },
        { imagen: 'imagenes/productos/gorra6.jpg', nombre: 'Gorra New Era Boston Red Sox Team Classic 3930', precio: '$25', genero: 'Unisex' },
        { imagen: 'imagenes/productos/gorra7.jpg', nombre: 'Gorra New Era Phoenix Suns White Crown Team 9FIFTY', precio: '$30', genero: 'Unisex' }
    ];

    function llenarProductosEnCarrusel() {
        carousel.innerHTML = ''; // Limpiar contenido anterior
    
        productos.forEach(producto => {
            const productoHTML = `
                <div class="carousel-item">
                    <a href="producto.html">
                        <img src="${producto.imagen}" alt="">
                    </a>
                    <h3>${producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <p>${producto.genero}</p>
                </div>
            `;
            carousel.innerHTML += productoHTML;
        });
    }
    

    function moveToNextItem() {
        currentIndex = (currentIndex + 1) % productos.length;
        const offset = -currentIndex * 33.33; // Ancho de cada producto
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function moveToPreviousItem() {
        currentIndex = (currentIndex - 1 + productos.length) % productos.length;
        const offset = -currentIndex * 33.33; // Ancho de cada producto
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', moveToNextItem);
    prevButton.addEventListener('click', moveToPreviousItem);

    setInterval(moveToNextItem, 5000); // Mueve al siguiente ítem cada 5 segundos

    // Llenar el carrusel inicialmente
    llenarProductosEnCarrusel();
});
