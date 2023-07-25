document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const menu = document.getElementById('menu');

    toggleBtn.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        if (menu.classList.contains('hidden')) {
            // Si el menú está oculto, restaurar el color de fondo del botón
            toggleBtn.style.backgroundColor = '#4CAF50';
        } else {
            // Si el menú está visible, cambiar el color de fondo del botón
            toggleBtn.style.backgroundColor = '#f44336';
        }
    });
});
