
        const cursor = document.querySelector('.cursor-bubble');
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            currentX += (mouseX - currentX) * 0.2;
            currentY += (mouseY - currentY) * 0.2;
            cursor.style.transform = `translate3d(${currentX - 15}px, ${currentY - 15}px, 0)`;
            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Optional hover animation for buttons & links
        const hoverElements = document.querySelectorAll('a, button');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform += ' scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = `translate3d(${currentX - 15}px, ${currentY - 15}px, 0) scale(1)`;
            });
        });
    