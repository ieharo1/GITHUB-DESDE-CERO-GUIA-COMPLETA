/* ============================================
   JavaScript Principal - GitHub Desde Cero
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🐙 GitHub Desde Cero - Sitio cargado correctamente');

    // Toggle del menú móvil
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            // Si es un enlace a un tema, mostrar el contenido
            if (targetId.startsWith('#tema')) {
                showTopicContent(targetId);
                return;
            }

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Función para mostrar contenido de tema
    function showTopicContent(topicId) {
        const content = document.getElementById(topicId);
        if (content) {
            // Ocultar todos los contenidos
            document.querySelectorAll('.content-detail').forEach(el => {
                el.style.display = 'none';
            });

            // Mostrar el contenido seleccionado
            content.style.display = 'block';

            // Scroll suave al contenido
            setTimeout(() => {
                content.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }

    // Ocultar todos los content-detail al cargar
    document.querySelectorAll('.content-detail').forEach(el => {
        el.style.display = 'none';
    });

    // Mensaje de bienvenida
    console.log('%c🐙 ¡Bienvenido a GitHub Desde Cero!', 'font-size: 20px; color: #181717; font-weight: bold;');
    console.log('%cLa plataforma de desarrollo más grande del mundo', 'font-size: 14px; color: #2ea44f;');
});
