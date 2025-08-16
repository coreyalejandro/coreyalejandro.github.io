// Main JavaScript file for Corey Alejandro's website

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            if (themeIcon) {
                themeIcon.textContent = document.body.classList.contains('dark-theme') ? '🌙' : '🌾';
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-layer');
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Particle animation
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const speed = parseFloat(particle.getAttribute('data-speed')) || 1;
        let position = Math.random() * window.innerWidth;
        
        function animateParticle() {
            position += speed;
            if (position > window.innerWidth + 50) {
                position = -50;
            }
            particle.style.left = position + 'px';
            requestAnimationFrame(animateParticle);
        }
        
        animateParticle();
    });

    // Add some interactive effects
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.classList.contains('skill-95') ? '95%' :
                                          entry.target.classList.contains('skill-92') ? '92%' :
                                          entry.target.classList.contains('skill-88') ? '88%' : '85%';
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));
});

// Console welcome message
console.log('🌱 Welcome to Corey Alejandro\'s portfolio!');
console.log('♿️ Built with accessibility and neurodivergent design in mind.');
