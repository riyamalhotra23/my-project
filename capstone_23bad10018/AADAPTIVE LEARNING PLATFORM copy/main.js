// Main JavaScript for LearnFlow Adaptive Learning Platform
// Handles animations, interactions, and core functionality

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeInteractions();
    initializeScrollEffects();
    initializeTypedText();
    initializeCounters();
});

// Initialize all animations
function initializeAnimations() {
    // Animate mastery progress bars
    const progressBars = document.querySelectorAll('.mastery-progress');
    progressBars.forEach((bar, index) => {
        anime({
            targets: bar,
            width: bar.style.width,
            duration: 2000,
            delay: index * 200,
            easing: 'easeOutCubic'
        });
    });

    // Animate feature cards on scroll
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        anime({
            targets: card,
            opacity: 1,
            translateY: 0,
            duration: 800,
            delay: index * 100,
            easing: 'easeOutCubic'
        });
    });

    // Animate tech stack items
    const techItems = document.querySelectorAll('.tech-stack-item');
    techItems.forEach((item, index) => {
        anime({
            targets: item,
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 600,
            delay: index * 150,
            easing: 'easeOutBack'
        });
    });
}

// Initialize interactive elements
function initializeInteractions() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });

        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
    });

    // Feature cards interaction
    const featureCards = document.querySelectorAll('.card-hover');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -8,
                boxShadow: '0 20px 40px rgba(45, 90, 61, 0.15)',
                duration: 300,
                easing: 'easeOutCubic'
            });
        });

        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                boxShadow: '0 4px 12px rgba(45, 90, 61, 0.1)',
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Initialize scroll-based effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('stats-counter')) {
                    animateCounter(element);
                }
                
                if (element.classList.contains('feature-demo')) {
                    animateDemoSection(element);
                }
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const statsCounters = document.querySelectorAll('.stats-counter');
    const demoSections = document.querySelectorAll('.feature-demo');
    
    [...statsCounters, ...demoSections].forEach(el => observer.observe(el));
}

// Initialize typed text effect
function initializeTypedText() {
    const typed = new Typed('#typed-heading', {
        strings: [
            'Adaptive Learning',
            'Personalized Education',
            'AI-Driven Insights',
            'Smart Assessment'
        ],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Initialize animated counters
function initializeCounters() {
    const counters = document.querySelectorAll('.stats-counter');
    counters.forEach(counter => {
        counter.style.opacity = '0';
    });
}

// Animate counter numbers
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    anime({
        targets: element,
        opacity: 1,
        duration: 300,
        easing: 'easeOutCubic'
    });

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '%';
    }, 16);
}

// Animate demo sections
function animateDemoSection(element) {
    const progressBars = element.querySelectorAll('.mastery-progress');
    
    progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        anime({
            targets: bar,
            width: width,
            duration: 1500,
            delay: index * 300,
            easing: 'easeOutCubic'
        });
    });
}

// Utility function for creating floating elements
function createFloatingElements() {
    const heroSection = document.querySelector('.hero-bg');
    if (!heroSection) return;

    for (let i = 0; i < 5; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 6 + 's';
        element.style.width = (Math.random() * 20 + 10) + 'px';
        element.style.height = element.style.width;
        heroSection.appendChild(element);
    }
}

// Initialize particle system for hero background
function initializeParticleSystem() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const heroSection = document.querySelector('.hero-bg');
    
    if (!heroSection) return;
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.1';
    canvas.style.zIndex = '1';
    
    heroSection.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

// Initialize all systems when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    createFloatingElements();
    initializeParticleSystem();
});

// Smooth page transitions
function initializePageTransitions() {
    const links = document.querySelectorAll('a[href$=".html"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            anime({
                targets: 'body',
                opacity: 0,
                duration: 300,
                easing: 'easeOutCubic',
                complete: function() {
                    window.location.href = href;
                }
            });
        });
    });
}

// Initialize page transitions
document.addEventListener('DOMContentLoaded', initializePageTransitions);

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when page is not visible
        anime.running.forEach(animation => animation.pause());
    } else {
        // Resume animations when page becomes visible
        anime.running.forEach(animation => animation.play());
    }
});

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.warn('LearnFlow: Non-critical error handled:', e.message);
});

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        if (entry.entryType === 'measure') {
            console.log(`LearnFlow: ${entry.name} took ${entry.duration}ms`);
        }
    });
});

if (typeof PerformanceObserver !== 'undefined') {
    performanceObserver.observe({ entryTypes: ['measure'] });
}

// Export functions for use in other modules
window.LearnFlow = {
    initializeAnimations,
    initializeInteractions,
    animateCounter,
    createFloatingElements
};