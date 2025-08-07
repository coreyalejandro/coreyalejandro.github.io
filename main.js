// Dramatic Parallax Effects for Corey's GitHub Profile
// This will bring pure joy with 10x the parallax effect!

class ParallaxController {
    constructor() {
        this.layers = document.querySelectorAll('.parallax-layer');
        this.particles = document.querySelectorAll('.particle');
        this.scrollY = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.isScrolling = false;
        this.scrollTimeout = null;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupSmoothScrolling();
        this.animateParticles();
        this.createFloatingElements();
        this.startParallaxLoop();
    }

    bindEvents() {
        // Smooth scroll handling
        window.addEventListener('scroll', () => {
            this.scrollY = window.pageYOffset;
            this.isScrolling = true;
            
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                this.isScrolling = false;
            }, 150);
        });

        // Mouse movement for interactive parallax
        document.addEventListener('mousemove', (e) => {
            this.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            this.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        // Touch events for mobile
        document.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            this.mouseX = (touch.clientX / window.innerWidth - 0.5) * 2;
            this.mouseY = (touch.clientY / window.innerHeight - 0.5) * 2;
        });

        // Intersection Observer for animations
        this.setupIntersectionObserver();
    }

    setupSmoothScrolling() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                const target = document.querySelector(href);
                
                if (target) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    const targetPosition = target.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        document.querySelectorAll('.project-card, .skill-category, .contact-card, .quote-card').forEach(el => {
            observer.observe(el);
        });
    }

    animateParticles() {
        this.particles.forEach((particle, index) => {
            const speed = parseFloat(particle.dataset.speed) || 1;
            
            setInterval(() => {
                const x = Math.sin(Date.now() * 0.001 * speed + index) * 50;
                const y = Math.cos(Date.now() * 0.001 * speed + index) * 30;
                
                particle.style.transform = `translate(${x}px, ${y}px) rotate(${Date.now() * 0.1 * speed}deg)`;
            }, 50);
        });
    }

    createFloatingElements() {
        // Create additional floating elements for extra drama
        const container = document.querySelector('.parallax-container');
        
        // Create floating code snippets
        for (let i = 0; i < 5; i++) {
            const codeElement = document.createElement('div');
            codeElement.className = 'floating-code';
            codeElement.style.cssText = `
                position: absolute;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                font-family: 'JetBrains Mono', monospace;
                font-size: 0.8rem;
                color: rgba(139, 92, 246, 0.6);
                pointer-events: none;
                z-index: 5;
                animation: code-float ${6 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            
            const codeSnippets = [
                'const joy = true;',
                'function createMagic() {',
                'return "parallax";',
                'async function dream() {',
                'await sleep(1000);'
            ];
            
            codeElement.textContent = codeSnippets[i % codeSnippets.length];
            container.appendChild(codeElement);
        }

        // Add CSS for floating code animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes code-float {
                0%, 100% { 
                    transform: translateY(0px) rotate(0deg) scale(1);
                    opacity: 0.6;
                }
                50% { 
                    transform: translateY(-30px) rotate(5deg) scale(1.1);
                    opacity: 1;
                }
            }
            
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
        `;
        document.head.appendChild(style);
    }

    startParallaxLoop() {
        const animate = () => {
            // Apply dramatic parallax to layers
            this.layers.forEach(layer => {
                const speed = parseFloat(layer.dataset.speed) || 1;
                const baseTransform = this.scrollY * speed * 0.5;
                const mouseTransform = this.mouseX * speed * 20;
                
                layer.style.transform = `translateY(${baseTransform}px) translateX(${mouseTransform}px)`;
            });

            // Animate neural network connections
            this.animateNeuralNetwork();
            
            // Animate floating islands with extra drama
            this.animateFloatingIslands();
            
            // Animate data streams
            this.animateDataStreams();
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }

    animateNeuralNetwork() {
        const neurons = document.querySelectorAll('.neuron');
        const connections = document.querySelectorAll('.connection');
        
        neurons.forEach((neuron, index) => {
            const time = Date.now() * 0.001;
            const pulse = Math.sin(time + index) * 0.3 + 0.7;
            neuron.style.transform = `scale(${pulse})`;
            neuron.style.opacity = pulse;
        });

        connections.forEach((connection, index) => {
            const time = Date.now() * 0.002;
            const flow = Math.sin(time + index) * 0.5 + 0.5;
            connection.style.opacity = flow;
            connection.style.background = `linear-gradient(90deg, transparent, rgba(236, 72, 153, ${flow}), transparent)`;
        });
    }

    animateFloatingIslands() {
        const islands = document.querySelectorAll('.island');
        
        islands.forEach((island, index) => {
            const time = Date.now() * 0.001;
            const float = Math.sin(time + index) * 15;
            const rotate = Math.sin(time * 0.5 + index) * 3;
            const scale = 1 + Math.sin(time * 0.3 + index) * 0.05;
            
            island.style.transform = `translateY(${float}px) rotate(${rotate}deg) scale(${scale})`;
        });
    }

    animateDataStreams() {
        const streams = document.querySelectorAll('.data-stream');
        
        streams.forEach((stream, index) => {
            const time = Date.now() * 0.001;
            const flow = (time + index) % 4;
            const opacity = Math.sin(flow * Math.PI) * 0.8 + 0.2;
            
            stream.style.opacity = opacity;
            stream.style.transform = `translateY(${flow * 100}px)`;
        });
    }
}

// Enhanced hover effects for project cards
class CardEffects {
    constructor() {
        this.cards = document.querySelectorAll('.project-card, .contact-card, .skill-category');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => this.handleMouseEnter(e));
            card.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        });
    }

    handleMouseEnter(e) {
        const card = e.currentTarget;
        card.style.transform = 'translateY(-15px) scale(1.02)';
        card.style.boxShadow = '0 25px 50px rgba(139, 92, 246, 0.4)';
        
        // Add floating particles around the card
        this.createHoverParticles(card);
    }

    handleMouseLeave(e) {
        const card = e.currentTarget;
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.2)';
        
        // Remove hover particles
        this.removeHoverParticles(card);
    }

    handleMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
    }

    createHoverParticles(card) {
        const particles = document.createElement('div');
        particles.className = 'hover-particles';
        particles.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--accent-purple);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: hover-particle-float 2s ease-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            particles.appendChild(particle);
        }
        
        card.appendChild(particles);
        
        // Add CSS for hover particle animation
        if (!document.querySelector('#hover-particle-styles')) {
            const style = document.createElement('style');
            style.id = 'hover-particle-styles';
            style.textContent = `
                @keyframes hover-particle-float {
                    0% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-50px) scale(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    removeHoverParticles(card) {
        const particles = card.querySelector('.hover-particles');
        if (particles) {
            particles.remove();
        }
    }
}

// Typing effect for the hero title
class TypingEffect {
    constructor() {
        this.titleElement = document.querySelector('.title-line');
        this.init();
    }

    init() {
        if (!this.titleElement) return;
        
        const text = this.titleElement.textContent;
        this.titleElement.textContent = '';
        this.titleElement.style.borderRight = '3px solid var(--accent-purple)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                this.titleElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                this.titleElement.style.borderRight = 'none';
            }
        };
        
        // Start typing after a short delay
        setTimeout(typeWriter, 1000);
    }
}

// Skill bar animations
class SkillAnimations {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-progress');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkillBar(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.skillBars.forEach(bar => observer.observe(bar));
    }

    animateSkillBar(bar) {
        // Get the skill class to determine the target width
        const skillClass = Array.from(bar.classList).find(cls => cls.startsWith('skill-'));
        if (!skillClass) return;
        
        const targetWidth = skillClass.replace('skill-', '') + '%';
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'width 2s ease-out';
            bar.style.width = targetWidth;
        }, 100);
    }
}

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'y2k';
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = this.themeToggle?.querySelector('.theme-icon');
        
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.bindEvents();
    }

    bindEvents() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        const themes = ['y2k', 'corey', 'ghibli-aa'];
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const newTheme = themes[nextIndex];
        this.applyTheme(newTheme);
    }

    applyTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme === 'y2k' ? '' : theme);
        localStorage.setItem('theme', theme);
        
        // Update theme icon
        if (this.themeIcon) {
            const icons = {
                'y2k': '🌙',
                'corey': '✨',
                'ghibli-aa': '🌾'
            };
            this.themeIcon.textContent = icons[theme] || '🌙';
        }
        
        // Update theme name in console
        const themeNames = {
            'y2k': 'Y2K',
            'corey': 'Corey\'s Professional',
            'ghibli-aa': 'African-American Ghibli'
        };
        console.log(`🎨 Switched to ${themeNames[theme]} theme!`);
        
        // Add dramatic transition effect
        document.body.style.transition = 'all 0.5s ease-in-out';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
    }
}

// Three.js 3D Model Manager
class ThreeJSManager {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.model = null;
        this.container = document.getElementById('three-container');
        
        if (this.container) {
            this.init();
        }
    }

    init() {
        // Import Three.js dynamically
        import('three').then(({ Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight, GLTFLoader, Clock }) => {
            this.setupScene(Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight, GLTFLoader, Clock);
        }).catch(err => {
            console.log('Three.js not available, skipping 3D model');
        });
    }

    setupScene(Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight, GLTFLoader, Clock) {
        // Scene setup
        this.scene = new Scene();
        
        // Camera setup
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
        
        // Renderer setup
        this.renderer = new WebGLRenderer({ 
            alpha: true, 
            antialias: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        this.container.appendChild(this.renderer.domElement);
        
        // Lighting
        const ambientLight = new AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);
        
        const directionalLight = new DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        this.scene.add(directionalLight);
        
        // Load the GLB model
        const loader = new GLTFLoader();
        loader.load(
            '/assets/3d/ninja_eyeball_textured_mesh.glb',
            (gltf) => {
                this.model = gltf.scene;
                this.model.scale.set(2, 2, 2);
                this.model.position.set(0, 0, 0);
                this.scene.add(this.model);
            },
            (progress) => {
                console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
            },
            (error) => {
                console.error('Error loading GLB model:', error);
            }
        );
        
        // Animation loop
        const clock = new Clock();
        const animate = () => {
            requestAnimationFrame(animate);
            
            if (this.model) {
                this.model.rotation.y += 0.01;
                this.model.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
            }
            
            this.renderer.render(this.scene, this.camera);
        };
        animate();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Fix the linter errors by adding webkit prefixes
    const style = document.createElement('style');
    style.textContent = `
        .navbar, .project-card, .skill-category, .contact-card, .quote-card {
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
        }
    `;
    document.head.appendChild(style);

    // Initialize theme manager first
    new ThemeManager();
    
    // Initialize all effects
    new ParallaxController();
    new CardEffects();
    new TypingEffect();
    new SkillAnimations();
    
    // Initialize 3D model
    new ThreeJSManager();

    // Add some extra joy with confetti on scroll
    let confettiCount = 0;
    window.addEventListener('scroll', () => {
        if (confettiCount < 3 && Math.random() > 0.95) {
            this.createConfetti();
            confettiCount++;
        }
    });
});

// Confetti effect for extra joy
function createConfetti() {
    const colors = ['#8b5cf6', '#3b82f6', '#10b981', '#ec4899', '#f59e0b'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            top: -10px;
            left: ${Math.random() * 100}%;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: confetti-fall ${3 + Math.random() * 2}s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
    
    // Add confetti animation CSS
    if (!document.querySelector('#confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'confetti-styles';
        style.textContent = `
            @keyframes confetti-fall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add smooth reveal animations for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
};

// Initialize reveal animations
document.addEventListener('DOMContentLoaded', revealSections);

console.log('🌟 Corey\'s GitHub Profile is now alive with pure joy and dramatic parallax effects! 🌟');
