// Simple JavaScript for Corey Alejandro's clean, minimalist website

document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            if (themeIcon) {
                themeIcon.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
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
    const viewWorkBtn = document.querySelector('.btn');
    const connectBtn = document.querySelectorAll('.btn')[1];
    
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', function() {
            // For now, just log the action
            console.log('View My Work clicked');
        });
    }
    
    if (connectBtn) {
        connectBtn.addEventListener('click', function() {
            // For now, just log the action
            console.log('Let\'s Connect clicked');
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

// Console welcome message
console.log('🌱 Welcome to Corey Alejandro\'s clean, minimalist portfolio!');
console.log('♿️ Built with accessibility and neurodivergent design in mind.');
console.log('🎨 Clean, simple design with subtle gradient background.');
