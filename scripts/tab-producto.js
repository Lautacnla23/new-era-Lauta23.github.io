document.addEventListener("DOMContentLoaded", function() {
    var tabs = document.querySelectorAll(".nav-tabs li");

    function updateTabStyles() {
        tabs.forEach(function(tab) {
            var isActive = tab.classList.contains("active");
            var link = tab.querySelector("a");
            if (isActive) {
                link.style.backgroundColor = "#000000";
                link.style.color = "#ffffff"; // Color del texto cuando está activo
            } else {
                link.style.backgroundColor = "#f9f9f9";
                link.style.color = "#333"; // Color del texto cuando no está activo
            }
        });
    }

    // Por defecto, activar el tab 'Detalles' al cargar la página
    var defaultTab = document.querySelector(".nav-tabs li.active");
    var defaultTabContentId = defaultTab.querySelector("a").getAttribute("href").substr(1);
    document.getElementById(defaultTabContentId).classList.add("active");
    updateTabStyles(); // Actualizar estilos al cargar la página

    tabs.forEach(function(tab) {
        tab.addEventListener("click", function(event) {
            event.preventDefault(); // Evitar comportamiento predeterminado del enlace

            // Removemos la clase 'active' de todos los tabs
            tabs.forEach(function(tab) {
                tab.classList.remove("active");
            });

            // Agregamos la clase 'active' al tab seleccionado
            this.classList.add("active");

            // Actualizar estilos de los tabs
            updateTabStyles();

            // Mostramos/ocultamos los tabs de contenido según el tab seleccionado
            var tabContentId = this.querySelector("a").getAttribute("href").substr(1);
            var activeTabContent = document.querySelector(".tab-pane.active");
            activeTabContent.classList.remove("active");
            document.getElementById(tabContentId).classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var thumbnails = document.querySelectorAll(".thumbnail");
    var mainImage = document.getElementById("producto-imagen");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            var newSrc = this.src;

            // Añadir clase para el desvanecimiento
            mainImage.classList.add("fade-out");

            // Esperar hasta que la transición de desvanecimiento termine
            setTimeout(function() {
                mainImage.src = newSrc;
                mainImage.classList.remove("fade-out");
                mainImage.classList.add("fade-in");
            }, 500); // La duración debe coincidir con la transición de CSS

            // Eliminar la clase fade-in después de la transición
            setTimeout(function() {
                mainImage.classList.remove("fade-in");
            }, 1000); // Tiempo extra para asegurarse de que la transición haya terminado
        });
    });
});
