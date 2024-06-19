let counter = 1;
let autoSliderInterval;

function startAutoSlider() {
    autoSliderInterval = setInterval(() => {
        counter++;
        if (counter > 4) {
            counter = 1;
        }
        document.getElementById('radio' + counter).checked = true;
        updateSlider();
    }, 5000); // 5000ms = 5 seconds
}

function updateSlider() {
    const radios = document.querySelectorAll('input[name="radio-btn"]');
    radios.forEach((radio, index) => {
        if (radio.checked) {
            const ulElement = document.querySelector('.slider-frame ul');
            ulElement.style.transform = `translateX(-${index * 100}%)`;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    startAutoSlider();

    const radios = document.querySelectorAll('input[name="radio-btn"]');
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            clearInterval(autoSliderInterval);
            counter = index + 1; // Actualizar el contador según el radio seleccionado
            updateSlider();
            startAutoSlider(); // Reiniciar el slider automático
        });
    });
});

