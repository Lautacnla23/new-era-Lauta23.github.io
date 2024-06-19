document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    let activeNavItem = null;

    navItems.forEach(navItem => {
        navItem.addEventListener('mouseenter', () => {
            if (activeNavItem && activeNavItem !== navItem) {
                activeNavItem.classList.remove('show');
            }
            navItem.classList.add('show');
            activeNavItem = navItem;
        });

        navItem.addEventListener('mouseleave', () => {
            const currentNavItem = navItem;
            setTimeout(() => {
                if (!currentNavItem.contains(document.activeElement)) {
                    currentNavItem.classList.remove('show');
                    if (activeNavItem === currentNavItem) {
                        activeNavItem = null;
                    }
                }
            }, 300); // Retraso de 300ms antes de ocultar el submenú
        });

        const submenuContent = navItem.querySelector('.submenu-content');

        submenuContent.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
        });

        submenuContent.addEventListener('mouseleave', () => {
            const currentNavItem = navItem;
            setTimeout(() => {
                if (!currentNavItem.contains(document.activeElement)) {
                    currentNavItem.classList.remove('show');
                    if (activeNavItem === currentNavItem) {
                        activeNavItem = null;
                    }
                }
            }, 30000); // Retraso de 300ms antes de ocultar el submenú
        });
    });
});
