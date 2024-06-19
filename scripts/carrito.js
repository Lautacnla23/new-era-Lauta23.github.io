$(document).ready(function() {
    // Cargar el carrito desde localStorage o inicializarlo si no existe
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function renderCartItems() {
        const cartItemsContainer = $('.cart-items');
        cartItemsContainer.empty();

        let totalQuantity = 0; // Variable para contar la cantidad total de productos
        let totalProducts = 0; // Variable para contar el número total de tipos de productos

        cart.forEach(product => {
            totalQuantity += product.quantity; // Sumar la cantidad de cada producto al total
            totalProducts += 1; // Contar cada tipo de producto

            const truncatedName = product.nombre.length > 20 ? product.nombre.substr(0, 20) + '..' : product.nombre;
            const itemHTML = `
                <div class="cart-item" data-id="${product.id}">
                    <img src="${product.imagen}" alt="${product.nombre}">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${truncatedName}</div>
                        <div class="cart-item-price">${product.precio}</div>
                        <div class="cart-item-gender">${product.genero}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn decrease">-</button>
                            <span>${product.quantity}</span>
                            <button class="quantity-btn increase">+</button>
                        </div>
                        <button class="remove-item">Eliminar</button>
                    </div>
                </div>
            `;
            cartItemsContainer.append(itemHTML);
        });

        // Actualizar el conteo total de productos en el carrito
        $('.cart-count').text(totalQuantity);

        // Actualizar el total de tipos de productos
        $('.total-products').text(totalProducts);

        const totalPrice = cart.reduce((acc, product) => acc + parseFloat(product.precio.replace('$', '')) * product.quantity, 0);
        $('.total-amount strong').text(`$${totalPrice.toFixed(2)}`);

        // Añadir event listeners a los botones de cantidad y eliminación
        $('.quantity-btn.increase').click(function() {
            const id = $(this).closest('.cart-item').data('id');
            updateQuantity(id, 1);
        });

        $('.quantity-btn.decrease').click(function() {
            const id = $(this).closest('.cart-item').data('id');
            updateQuantity(id, -1);
        });

        $('.remove-item').click(function() {
            const id = $(this).closest('.cart-item').data('id');
            removeFromCart(id);
        });
    }

    $('.cart-link').click(function(e) {
        e.preventDefault();
        $('.cart-dropdown').toggle();
    });

    $('.checkout-button').click(function() {
        window.location.href = 'carrito-compra.html'; // Redirigir a la página del carrito de compras
    });

    window.addToCart = function(product) {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += parseInt(product.quantity, 10);
        } else {
            product.quantity = parseInt(product.quantity, 10);
            cart.push(product);
        }
        saveCart();
        renderCartItems();
    };

    function updateQuantity(id, change) {
        const product = cart.find(item => item.id === id);
        if (product) {
            product.quantity += change;
            if (product.quantity <= 0) {
                cart = cart.filter(item => item.id !== id);
            }
            saveCart();
            renderCartItems();
        }
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        renderCartItems();
    }

    function emptyCart() {
        cart = [];
        saveCart();
        renderCartItems();
    }

    // Añadir event listener para el botón de vaciar el carrito
    $('.empty-cart-button').click(function() {
        if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
            emptyCart();
        }
    });

    // Inicializar el carrito con datos guardados
    renderCartItems();
});
