function cambiarCantidad(cambio) {
    const cantidadInput = document.getElementById('cantidad');
    let cantidad = parseInt(cantidadInput.value);
    cantidad = isNaN(cantidad) ? 1 : cantidad;
    cantidad = cantidad + cambio;
    if (cantidad < 1) cantidad = 1;
    cantidadInput.value = cantidad;
}

function obtenerTalleSeleccionado() {
    const talles = document.querySelectorAll('.talle');
    for (const talle of talles) {
        if (talle.classList.contains('seleccionado')) {
            return talle.getAttribute('data-talle');
        }
    }
    return null;
}

document.querySelectorAll('.talle').forEach(talle => {
    talle.addEventListener('click', () => {
        document.querySelectorAll('.talle').forEach(t => t.classList.remove('seleccionado'));
        talle.classList.add('seleccionado');
    });
});

document.querySelector('.btn-agregar-carrito').addEventListener('click', () => {
    const id = '1';
    const nombre = 'Gorra New Era Los Angeles Dodgers 59FIFTY MLB Basic';
    const precio = '$99.99';
    const imagen = 'imagenes/productos/gorra3.jpg';
    const genero = 'Unisex';
    const talle = obtenerTalleSeleccionado();
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (!talle) {
        alert('Por favor selecciona un talle.');
        return;
    }

    const producto = { id, nombre, precio, imagen, genero, talle, quantity: cantidad };
    addToCart(producto);
});

document.querySelector('.btn-comprar-ahora').addEventListener('click', () => {
    const id = '1';
    const nombre = 'Gorra New Era Los Angeles Dodgers 59FIFTY MLB Basic';
    const precio = '$99.99';
    const imagen = 'imagenes/productos/gorra3.jpg';
    const genero = 'Unisex';
    const talle = obtenerTalleSeleccionado();
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (!talle) {
        alert('Por favor selecciona un talle.');
        return;
    }

    const producto = { id, nombre, precio, imagen, genero, talle, quantity: cantidad };
    addToCart(producto);
    window.location.href = 'checkout.html';
});