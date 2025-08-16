// Sophisticated JavaScript for Corey Alejandro's website - Material Dark Theme

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
        const parallaxElements = document.querySelectorAll('.animated-bg > div');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Add floating animation to code snippets
    const codeSnippets = document.querySelector('.code-snippets');
    if (codeSnippets) {
        // Create additional floating code elements
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
                top: ${20 + (index * 15)}%;
                left: ${10 + (index * 20)}%;
                font-family: 'Courier New', monospace;
                font-size: 0.8rem;
                color: rgba(187, 134, 252, 0.3);
                pointer-events: none;
                animation: code-float ${15 + Math.random() * 10}s ease-in-out infinite;
                animation-delay: ${index * 2}s;
            `;
            codeSnippets.appendChild(codeElement);
        });
    }
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
console.log('🌟 Welcome to Corey Alejandro\'s sophisticated portfolio!');
console.log('♿️ Built with accessibility and neurodivergent design in mind.');
console.log('🎨 Sophisticated Material Dark theme with dynamic animations.');
console.log('✨ Featuring floating code snippets and neural network aesthetics!');
