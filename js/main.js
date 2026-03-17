// Main JavaScript - GitHub Desde Cero

document.addEventListener('DOMContentLoaded', function() {
    console.log('GitHub Desde Cero - Sitio cargado correctamente');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#tema')) {
                showTopicContent(targetId);
                return;
            }
            const target = document.querySelector(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    function showTopicContent(topicId) {
        const content = document.getElementById(topicId);
        if (content) {
            document.querySelectorAll('.content-detail').forEach(el => el.style.display = 'none');
            content.style.display = 'block';
            setTimeout(() => content.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }
    }

    document.querySelectorAll('.content-detail').forEach(el => el.style.display = 'none');

    console.log('%c🐙 ¡Bienvenido a GitHub Desde Cero!', 'font-size: 20px; color: #181717; font-weight: bold;');
});
