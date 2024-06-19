document.addEventListener('DOMContentLoaded', () => {
    const newCartItemsContainer = document.querySelector('.new-cart-items');
    const newTotalProducts = document.querySelector('.new-total-products');
    const newTotalAmount = document.querySelector('.new-total-amount');
    const newEmptyCartButton = document.querySelector('.new-empty-cart-button');
    const newCheckoutButton = document.querySelector('.new-checkout-button');
    const newEmptyCartMessage = document.querySelector('.new-empty-cart-message');

    function updateNewCartUI() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        newCartItemsContainer.innerHTML = '';
        let total = 0;
        let totalCount = 0;

        if (cart.length === 0) {
            newEmptyCartMessage.style.display = 'block'; // Muestra el mensaje de carrito vacío
        } else {
            newEmptyCartMessage.style.display = 'none'; // Oculta el mensaje de carrito vacío
        }

        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('new-cart-item');
            cartItem.innerHTML = `
                <img src="${product.imagen}" alt="${product.nombre}">
                <div class="new-cart-item-info">
                    <p>${product.nombre}</p>
                    <p>Precio: ${product.precio}</p>
                    <div class="new-cart-item-quantity">
                        <button class="quantity-btn decrease">-</button>
                        <span>${product.quantity}</span>
                        <button class="quantity-btn increase">+</button>
                    </div>
                    <button class="new-remove-item">Eliminar</button>
                </div>
            `;
            newCartItemsContainer.appendChild(cartItem);

            total += parseFloat(product.precio.substring(1)) * product.quantity;
            totalCount += product.quantity;

            cartItem.querySelector('.quantity-btn.increase').addEventListener('click', () => updateQuantity(product.id, 1));
            cartItem.querySelector('.quantity-btn.decrease').addEventListener('click', () => updateQuantity(product.id, -1));
            cartItem.querySelector('.new-remove-item').addEventListener('click', () => removeFromCart(product.id));
        });

        newTotalProducts.textContent = `Total Productos: ${totalCount}`;
        newTotalAmount.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    }

    function updateQuantity(id, change) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = cart.find(item => item.id === id);
        if (product) {
            product.quantity += change;
            if (product.quantity <= 0) {
                cart = cart.filter(item => item.id !== id);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateNewCartUI();
        }
    }

    function removeFromCart(id) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateNewCartUI();
    }

    newEmptyCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        updateNewCartUI();
        location.reload(); // Recarga la página después de vaciar el carrito
    });

    newCheckoutButton.addEventListener('click', () => {
        alert('Compra finalizada');
    });

    updateNewCartUI();

    window.addEventListener('storage', (event) => {
        if (event.key === 'cart') {
            updateNewCartUI();
        }
    });
});
