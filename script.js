/* ============================================
   Presidential Ball - Envelope Animation
============================================ */

document.addEventListener('DOMContentLoaded', function () {
    initParticles();
    initEnvelope();
    initButtons();
});

/* Create Floating Particles */
function initParticles() {
    const container = document.querySelector('.particles');
    const count = 25;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 6 + 3;
        const left = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = Math.random() * 15 + 15;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;

        container.appendChild(particle);
    }
}

/* Envelope Click Handler */
function initEnvelope() {
    const envelope = document.getElementById('envelope');
    const clickHint = document.getElementById('clickHint');

    envelope.addEventListener('click', function () {
        if (!this.classList.contains('opened')) {
            this.classList.add('opened');
            clickHint.style.opacity = '0';

            // Add sound effect (optional - need audio file)
            // playSound('open.mp3');
        }
    });
}

/* Button Handlers */
function initButtons() {
    const btnYes = document.getElementById('btnYes');
    const btnMaybe = document.getElementById('btnMaybe');
    const successOverlay = document.getElementById('successOverlay');

    btnYes.addEventListener('click', function (e) {
        e.stopPropagation();
        showSuccess();
    });

    btnMaybe.addEventListener('click', function (e) {
        e.stopPropagation();

        // Fun animation - button runs away!
        const randomX = (Math.random() - 0.5) * 100;
        const randomY = (Math.random() - 0.5) * 50;
        this.style.transform = `translate(${randomX}px, ${randomY}px)`;

        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });

    // Close success overlay on click
    successOverlay.addEventListener('click', function () {
        this.classList.remove('active');
    });
}

/* Show Success Animation */
function showSuccess() {
    const overlay = document.getElementById('successOverlay');
    overlay.classList.add('active');

    // Create hearts explosion
    createHeartsExplosion();

    // Create confetti
    createConfetti();
}

/* Create Hearts Explosion */
function createHeartsExplosion() {
    const container = document.querySelector('.hearts-explosion');
    container.innerHTML = '';

    const hearts = ['❤️', '💕', '💗', '💖', '💓', '💘', '💝'];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        const angle = (i / 20) * Math.PI * 2;
        const distance = 100 + Math.random() * 150;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        heart.style.cssText = `
            --tx: ${tx}px;
            --ty: ${ty}px;
            animation-delay: ${Math.random() * 0.3}s;
        `;

        container.appendChild(heart);
    }
}

/* Create Confetti */
function createConfetti() {
    const colors = ['#8B0000', '#C9A962', '#ff6b6b', '#ffd93d', '#6BCB77', '#4D96FF'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';

        const left = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 2;
        const size = Math.random() * 8 + 5;

        confetti.style.cssText = `
            left: ${left}%;
            top: -20px;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            animation-delay: ${delay}s;
        `;

        document.body.appendChild(confetti);

        // Remove after animation
        setTimeout(() => confetti.remove(), 5000);
    }
}

/* Console Easter Egg */
console.log('%c💌 Presidential Ball Invitation 💌',
    'color: #8B0000; font-size: 20px; font-family: Georgia;');
