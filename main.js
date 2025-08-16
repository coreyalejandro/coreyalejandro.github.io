// Main JavaScript file for Corey Alejandro's website - Material Dark Theme with Simple Parallax

document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            if (themeIcon) {
                themeIcon.textContent = document.body.classList.contains('light-theme') ? '🌙' : '☀️';
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

    // Simple Scrolling Parallax Effect (no zooming)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-layer');
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
            const yPos = -(scrolled * speed);
            
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Particle animation with enhanced effects
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const speed = parseFloat(particle.getAttribute('data-speed')) || 1;
        let position = Math.random() * window.innerWidth;
        let opacity = Math.random() * 0.5 + 0.3;
        
        function animateParticle() {
            position += speed;
            if (position > window.innerWidth + 50) {
                position = -50;
                opacity = Math.random() * 0.5 + 0.3;
            }
            particle.style.left = position + 'px';
            particle.style.opacity = opacity;
            requestAnimationFrame(animateParticle);
        }
        
        animateParticle();
    });

    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.classList.contains('skill-95') ? '95%' :
                             bar.classList.contains('skill-92') ? '92%' :
                             bar.classList.contains('skill-90') ? '90%' :
                             bar.classList.contains('skill-88') ? '88%' :
                             bar.classList.contains('skill-85') ? '85%' : '80%';
                
                bar.style.width = width;
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => sectionObserver.observe(section));

    // Enhanced hover effects for contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(187, 134, 252, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Add active state to navigation links
    const updateActiveNavLink = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Call once on load

    // Add floating animation to islands
    const islands = document.querySelectorAll('.island');
    islands.forEach((island, index) => {
        island.style.animationDelay = `${index * 2}s`;
    });

    // Add pulsing effect to neurons
    const neurons = document.querySelectorAll('.neuron');
    neurons.forEach((neuron, index) => {
        neuron.style.animationDelay = `${index * 0.5}s`;
    });

    // Add flowing effect to data streams
    const dataStreams = document.querySelectorAll('.data-stream');
    dataStreams.forEach((stream, index) => {
        stream.style.animationDelay = `${index * 2}s`;
    });
});

// Console welcome message
console.log('🌱 Welcome to Corey Alejandro\'s portfolio!');
console.log('♿️ Built with accessibility and neurodivergent design in mind.');
console.log('🎨 Material Dark theme with smooth scrolling parallax.');
console.log('✨ No zooming effects - just beautiful smooth scrolling!');
