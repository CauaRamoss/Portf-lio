// Scroll suave para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Botão "Voltar ao topo"
const backToTop = document.createElement('button');
backToTop.innerText = '↑';
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

// Estilo do botão via JS
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px 15px';
backToTop.style.fontSize = '18px';
backToTop.style.borderRadius = '50%';
backToTop.style.background = '#00aaff';
backToTop.style.color = '#121212';
backToTop.style.border = 'none';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';

// Mostrar/esconder botão ao rolar
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Voltar ao topo quando clicar
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animação ao rolar (fade-in)
const elements = document.querySelectorAll('.sobre, .habilidades, .projetos, .contato');

const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;
    elements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Configuração inicial para os elementos
elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // chamar ao carregar
