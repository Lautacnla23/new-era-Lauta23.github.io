const products = [
    { id: 1, imagen: 'imagenes/productos/gorra1.jpg', nombre: 'Gorra New Era New York Mets 39THIRTY Team Classic', precio: '$25', genero: 'Hombre', categoria: '39THIRTY' },
    { id: 2, imagen: 'imagenes/productos/gorra2.jpg', nombre: 'Gorra New Era Golden State Warriors 59FIFTY Citrus Pop', precio: '$20', genero: 'Unisex', categoria: '59FIFTY' },
    { id: 3, imagen: 'imagenes/productos/gorra3.jpg', nombre: 'Gorra New Era Los Angeles Dodgers 59FIFTY MLB Basic', precio: '$20', genero: 'Hombre', categoria: '59FIFTY' },
    { id: 4, imagen: 'imagenes/productos/gorra4.jpg', nombre: 'Gorra New Era New York Mets 2023 Batting Practice 59FIFTY', precio: '$20', genero: 'Unisex', categoria: '59FIFTY' },
    { id: 5, imagen: 'imagenes/productos/gorra5.jpg', nombre: 'Gorra New Era New York Yankees 9FIFTY Mlb Basic', precio: '$20', genero: 'Unisex', categoria: '9FIFTY' },
    { id: 6, imagen: 'imagenes/productos/gorra6.jpg', nombre: 'Gorra New Era Boston Red Sox Team Classic 3930', precio: '$20', genero: 'Mujer', categoria: '39THIRTY' },
    { id: 7, imagen: 'imagenes/productos/gorra7.jpg', nombre: 'Gorra New Era Phoenix Suns White Crown Team 9FIFTY', precio: '$30', genero: 'Hombre', categoria: '9FIFTY' },
    { id: 8, imagen: 'imagenes/productos/gorra8.jpg', nombre: 'Gorra New Era Phoenix Suns Basic 59Fifty', precio: '$25', genero: 'Hombre', categoria: '59FIFTY' },
    { id: 9, imagen: 'imagenes/productos/gorra9.jpg', nombre: 'Gorra New Era Phoenix Suns NBA Basic 9FIFTY', precio: '$20', genero: 'Unisex', categoria: '9FIFTY' },
    { id: 10, imagen: 'imagenes/productos/gorra10.jpg', nombre: 'Gorra New Era New York Yankees 59FIFTY MLB Basic', precio: '$30', genero: 'Hombre', categoria: '59FIFTY' },
    { id: 11, imagen: 'imagenes/productos/gorra11.jpg', nombre: 'Gorra New Era Boston Celtics Throwback Corduroy 59FIFTY', precio: '$30', genero: 'Hombre', categoria: '59FIFTY' },
    { id: 12, imagen: 'imagenes/productos/gorra12.jpg', nombre: 'Gorra New Era New York Yankees Pastel Patch 9FIFTY', precio: '$25', genero: 'Unisex', categoria: '9FIFTY' },
    { id: 13, imagen: 'imagenes/productos/gorra13.jpg', nombre: 'Gorra New Era New York Knicks White Crown Team 9FIFTY', precio: '$25', genero: 'Mujer', categoria: '9FIFTY' },
    { id: 14, imagen: 'imagenes/productos/gorra14.jpg', nombre: 'Gorra New Era San Diego Padres MLB Basic Snap 9FIFTY', precio: '$20', genero: 'Mujer', categoria: '9FIFTY' },
    { id: 15, imagen: 'imagenes/productos/gorra15.jpg', nombre: 'Gorra New Era New York Yankees League Essential 39THIRTY', precio: '$20', genero: 'Unisex', categoria: '39THIRTY' },
    { id: 16, imagen: 'imagenes/productos/gorra16.jpg', nombre: 'Gorra New Era New York Yankees 39THIRTY', precio: '$20', genero: 'Unisex', categoria: '39THIRTY' },
    { id: 17, imagen: 'imagenes/productos/gorra17.jpg', nombre: 'Gorra New Era Arizona Cardinals 39THIRTY Team Classic', precio: '$25', genero: 'Hombre', categoria: '39THIRTY' },
    { id: 18, imagen: 'imagenes/productos/gorra18.jpg', nombre: 'Gorra New Era Detroit Tigers 39THIRTY', precio: '$20', genero: 'Unisex', categoria: '39THIRTY' },
    { id: 19, imagen: 'imagenes/productos/gorra19.jpg', nombre: 'Gorra New Era BIZARRAP 9FORTY Ajustable', precio: '$30', genero: 'Unisex', categoria: '9FORTY' },
    { id: 20, imagen: 'imagenes/productos/gorra20.jpg', nombre: 'Gorra New Era New York Yankees WMNS Diamond Era 9FORTY', precio: '$30', genero: 'Hombre', categoria: '9FORTY' },
    { id: 21, imagen: 'imagenes/productos/gorra21.jpg', nombre: 'Gorra New Era New York Yankees Linen 9FORTY', precio: '$25', genero: 'Unisex', categoria: '9FORTY' },
    { id: 22, imagen: 'imagenes/productos/gorra22.jpg', nombre: 'Gorra New Era Chicago Bulls Desert Palm 9FORTY', precio: '$20', genero: 'Mujer', categoria: '9FORTY' },
    { id: 23, imagen: 'imagenes/productos/gorra23.jpg', nombre: 'Gorra New Era Chicago Bulls 9FORTY The League', precio: '$20', genero: 'Unisex', categoria: '9FORTY' },
    { id: 24, imagen: 'imagenes/productos/gorra24.jpg', nombre: 'Gorra New Era Los Angeles Lakers 9FORTY The League', precio: '$30', genero: 'Unisex', categoria: '9FORTY' }
];

let currentCategory = 'all';
let selectedGenders = [];

// Función para cargar los productos
function displayProducts(products) {
    const productContainer = document.getElementById('productContainer');
    const productCount = document.getElementById('productCount');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <a href="producto.html">
                <img src="${product.imagen}" alt="${product.nombre}">
            </a>
            <h3>${product.nombre}</h3>
            <p class="precio">Precio: ${product.precio}</p>
            <p>Género: ${product.genero}</p>
            <div class="overlay">
                <button class="comprar-btn" onclick="addToCart({ 
                    id: ${product.id}, 
                    nombre: '${product.nombre}', 
                    precio: '${product.precio}', 
                    imagen: '${product.imagen}', 
                    genero: '${product.genero}', 
                    quantity: 1 
                })">Comprar</button>
            </div>
        `;
        productContainer.appendChild(productElement);
    });

    // Actualizar el contador de productos
    productCount.textContent = `Productos: ${products.length}`;
}

function filterProductsByCategory(category) {
    currentCategory = category;
    filterProducts();
}

function filterProducts() {
    let filteredProducts = products;

    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.categoria === currentCategory);
    }

    if (selectedGenders.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedGenders.includes(product.genero));
    }

    displayProducts(filteredProducts);
}

function sortProducts() {
    const sortValue = document.getElementById('sortProducts').value;
    let sortedProducts;

    if (currentCategory === 'all' && selectedGenders.length === 0) {
        sortedProducts = [...products];
    } else {
        sortedProducts = products.filter(product => (currentCategory === 'all' || product.categoria === currentCategory) && (selectedGenders.length === 0 || selectedGenders.includes(product.genero)));
    }

    if (sortValue === 'priceHigh') {
        sortedProducts.sort((a, b) => parseFloat(b.precio.substring(1)) - parseFloat(a.precio.substring(1)));
    } else if (sortValue === 'priceLow') {
        sortedProducts.sort((a, b) => parseFloat(a.precio.substring(1)) - parseFloat(b.precio.substring(1)));
    }

    displayProducts(sortedProducts);
}

document.getElementById('sortProducts').addEventListener('change', sortProducts);

document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const category = event.target.dataset.category;
        filterProductsByCategory(category);
    });
});

document.querySelectorAll('.gender-filter').forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            selectedGenders.push(value);
        } else {
            selectedGenders = selectedGenders.filter(gender => gender !== value);
        }
        filterProducts();
    });
});

// Evento para el botón "Borrar los Filtros"
document.getElementById('clearFilters').addEventListener('click', () => {
    currentCategory = 'all';
    selectedGenders = [];
    document.querySelectorAll('.gender-filter').forEach(checkbox => checkbox.checked = false);
    filterProducts();
});

window.onload = () => {
    displayProducts(products);
};


document.addEventListener('DOMContentLoaded', () => {
    const filterTitle = document.querySelector('#filters h3');
    const filterOptions = document.querySelector('#filters .filter-options');
    const clearFiltersButton = document.getElementById('clearFilters');

    filterTitle.addEventListener('click', () => {
        if (filterOptions.classList.contains('show')) {
            filterOptions.classList.remove('show');
            filterOptions.style.maxHeight = null;
            filterOptions.style.opacity = 0;
        } else {
            filterOptions.classList.add('show');
            filterOptions.style.maxHeight = filterOptions.scrollHeight + 'px';
            filterOptions.style.opacity = 1;
        }
    });

    clearFiltersButton.addEventListener('click', () => {
        filterOptions.classList.remove('show');
        filterOptions.style.maxHeight = null;
        filterOptions.style.opacity = 0;
        // Aquí puedes añadir la lógica para limpiar los filtros seleccionados si es necesario
    });
});
