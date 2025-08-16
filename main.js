// Simple JavaScript for Corey Alejandro's website - Material Dark Theme

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
                             bar.classList.contains('skill-85') ? '85%' :
                             bar.classList.contains('skill-80') ? '80%' :
                             bar.classList.contains('skill-75') ? '75%' :
                             bar.classList.contains('skill-70') ? '70%' : '80%';
                
                bar.style.width = width;
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));

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
});

// Console welcome message
console.log('🌱 Welcome to Corey Alejandro\'s portfolio!');
console.log('♿️ Built with accessibility and neurodivergent design in mind.');
console.log('🎨 Clean Material Dark theme with subtle animations.');
