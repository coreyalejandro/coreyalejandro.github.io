// Sophisticated JavaScript for Corey Alejandro's Material Dark Space Theme

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

    // Hero button interactions
    const viewWorkBtn = document.querySelector('.btn-primary');
    const connectBtn = document.querySelector('.btn-secondary');
    
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', function() {
            document.getElementById('projects').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    if (connectBtn) {
        connectBtn.addEventListener('click', function() {
            document.getElementById('connect').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

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

    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.project-card, .skill-category, .connect-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(187, 134, 252, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .skill-category, .connect-card, .quote-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Call once on load

    // Parallax effect for background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.space-background > div');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Create additional floating elements
    const floatingElements = document.querySelector('.floating-elements');
    if (floatingElements) {
        // Create neural network nodes
        for (let i = 0; i < 8; i++) {
            const node = document.createElement('div');
            node.style.cssText = `
                position: absolute;
                width: 8px;
                height: 8px;
                background: var(--md-primary);
                border-radius: 50%;
                top: ${20 + (i * 10)}%;
                left: ${15 + (i * 12)}%;
                animation: pulse ${3 + Math.random() * 2}s infinite;
                animation-delay: ${i * 0.5}s;
                box-shadow: 0 0 10px var(--md-primary);
            `;
            floatingElements.appendChild(node);
        }

        // Create floating code snippets
        const codeLines = [
            'const joy = true;',
            'function createMagic() {',
            'return "parallax";',
            'async function dream() {',
            'await sleep(1000);'
        ];
        
        codeLines.forEach((line, index) => {
            const codeElement = document.createElement('div');
            codeElement.textContent = line;
            codeElement.style.cssText = `
                position: absolute;
                top: ${30 + (index * 12)}%;
                right: ${10 + (index * 8)}%;
                font-family: 'Courier New', monospace;
                font-size: 0.8rem;
                color: rgba(187, 134, 252, 0.3);
                pointer-events: none;
                animation: code-float ${15 + Math.random() * 10}s ease-in-out infinite;
                animation-delay: ${index * 2}s;
            `;
            floatingElements.appendChild(codeElement);
        });
    }

    // Bottom right icon interactions
    const iconSquares = document.querySelectorAll('.icon-square');
    iconSquares.forEach(icon => {
        icon.addEventListener('click', function() {
            console.log('Icon clicked:', this.textContent || this.querySelector('i').className);
        });
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.8s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% { 
            transform: scale(1); 
            opacity: 0.7; 
        }
        50% { 
            transform: scale(1.2); 
            opacity: 1; 
        }
    }
    
    @keyframes code-float {
        0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3; 
        }
        50% { 
            transform: translateY(-20px) rotate(2deg); 
            opacity: 0.6; 
        }
    }
    
    .project-card,
    .skill-category,
    .connect-card,
    .quote-card {
        opacity: 0;
        transform: translateY(50px);
    }
    
    .project-card.animate-in,
    .skill-category.animate-in,
    .connect-card.animate-in,
    .quote-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('🌟 Welcome to Corey Alejandro\'s sophisticated Material Dark space portfolio!');
console.log('♿️ Built with accessibility and neurodivergent design in mind.');
console.log('🎨 Material Dark theme with dynamic space background.');
console.log('✨ Featuring neural networks, floating code, and cosmic animations!');
