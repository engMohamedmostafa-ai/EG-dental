document.addEventListener('DOMContentLoaded', () => {

    const text     = "Hello, Welcome to Egyptian German Dental";
    const typingEl = document.querySelector('.typing');
    const overlay  = document.querySelector('.transition-overlay');

    let index = 0;

    function typeChar() {
        if (index < text.length) {
            typingEl.textContent += text[index];
            index++;
            setTimeout(typeChar, 80 + Math.random() * 40);
        } else {
            setTimeout(() => {
                typingEl.classList.add('done');
                setTimeout(startTransition, 400);
            }, 700);
        }
    }

    function startTransition() {
        overlay.classList.add('go');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 750);
    }

    setTimeout(typeChar, 300);
});