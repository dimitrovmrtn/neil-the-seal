// Copy Contract Address to Clipboard
const copyBtn = document.getElementById('copy-btn');
const contractAddressElement = document.getElementById('contract-address');
const tooltip = document.querySelector('.copied-tooltip');

if (copyBtn && contractAddressElement && tooltip) {
    const contractAddress = contractAddressElement.innerText;
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(contractAddress).then(() => {
            tooltip.classList.add('show');
            setTimeout(() => {
                tooltip.classList.remove('show');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy address: ', err);
        });
    });
}

// Dynamic Golden Aura Particle Generator
const particlesContainer = document.getElementById('particles');
const particleCount = 55;

if (particlesContainer) {
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');

    const size = Math.random() * 5 + 2; // 2px to 7px
    const posX = Math.random() * 100; // vw
    const posY = Math.random() * 100; // vh
    const duration = Math.random() * 10 + 6; // 6s to 16s
    const delay = Math.random() * 8; // 0s to 8s

    const colors = ['#ffd700', '#ff8c00', '#ffe4b5', '#ffaa00', '#ffffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    particle.style.position = 'absolute';
    particle.style.left = `${posX}vw`;
    particle.style.top = `${posY}vh`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = randomColor;
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = `0 0 ${size * 2}px ${randomColor}, 0 0 ${size * 4}px rgba(255, 215, 0, 0.3)`;
    particle.style.opacity = '0';
    particle.style.pointerEvents = 'none';
    particle.style.animation = `floatUp ${duration}s ease-in-out infinite ${delay}s`;

    particlesContainer.appendChild(particle);
}

// Inject keyframes dynamically for floating animations
const styleSheet = document.createElement('style');
styleSheet.innerText = `
@keyframes floatUp {
    0% { 
        transform: translateY(0) scale(1) translateX(0); 
        opacity: 0; 
    }
    15% { 
        opacity: 0.6; 
        transform: translateY(-15vh) scale(1.2) translateX(15px); 
    }
    50% { 
        transform: translateY(-50vh) scale(1) translateX(-20px); 
        opacity: 0.4;
    }
    85% { 
        opacity: 0.6; 
        transform: translateY(-85vh) scale(0.8) translateX(15px); 
    }
    100% { 
        transform: translateY(-100vh) scale(1.1) translateX(0); 
        opacity: 0; 
    }
}
`;
document.head.appendChild(styleSheet);

// Smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Interactive Mouse-Move Background Parallax
const bgElement = document.getElementById('interactive-bg');
if (bgElement) {
    window.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth) - 0.5;
        const mouseY = (e.clientY / window.innerHeight) - 0.5;
        
        // Translate the background slightly in the opposite direction
        const moveX = mouseX * -30; // Max 30px translation
        const moveY = mouseY * -30; // Max 30px translation
        
        bgElement.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.03)`;
    });
}
