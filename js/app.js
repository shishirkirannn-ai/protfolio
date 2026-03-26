document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-links li');
    const dashboards = document.querySelectorAll('.dashboard');

    // Make switchTab globally accessible for the button
    window.switchTab = (targetId) => {
        // Update Nav
        navItems.forEach(nav => {
            nav.classList.remove('active');
            if(nav.dataset.target === targetId) {
                nav.classList.add('active');
            }
        });

        // Update Dashboards
        dashboards.forEach(dash => {
            dash.classList.remove('active');
            // Slight delay removal of active for animation re-triggering
            if(dash.id === targetId) {
                setTimeout(() => {
                    dash.classList.add('active');
                }, 50);
            }
        });
    };

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.dataset.target;
            window.switchTab(target);
        });
    });

    // Simple Web Particle Generator for Background Interactivity
    const container = document.getElementById('particles');
    if (container) {
        for(let i=0; i<40; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 3 + 1 + 'px';
            particle.style.position = 'absolute';
            particle.style.width = size;
            particle.style.height = size;
            particle.style.background = 'rgba(255, 42, 42, 0.5)';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 100 + 'vh';
            particle.style.borderRadius = '50%';
            particle.style.boxShadow = '0 0 8px rgba(255, 42, 42, 0.8)';
            particle.style.animation = `float ${Math.random() * 5 + 5}s infinite ease-in-out alternate`;
            container.appendChild(particle);
        }
    }
    
    // Add audio hover effect logic (optional feature)
    const buttons = document.querySelectorAll('.btn, .nav-links li');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            // we could play a subtle web 'thwip' sound here if added to assets
        });
    });
});

// Add keyframes dynamically for floating particles
const style = document.createElement('style');
style.innerHTML = `
    @keyframes float {
        0% { transform: translateY(0) scale(1); opacity: 0.1; }
        100% { transform: translateY(-40px) scale(1.5); opacity: 0.6; }
    }
`;
document.head.appendChild(style);
