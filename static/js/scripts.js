// Professional Portfolio Animation System
class PortfolioAnimations {
    constructor() {
        this.init();
        this.bindEvents();
    }

    init() {
        this.initSmoothScrolling();
        this.initScrollAnimations();
        this.initParallaxEffects();
        this.initInteractiveElements();
        this.initTypingEffect();
        this.initMouseFollower();
        this.initScrollProgress();
        this.initParticleSystem();
        this.initMagneticButtons();
        this.initStaggerAnimations();
        this.initFormAnimations();
    }

    bindEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            this.handlePageLoad();
        });

        window.addEventListener('scroll', this.throttle(() => {
            this.handleScroll();
        }, 16));

        window.addEventListener('resize', this.throttle(() => {
            this.handleResize();
        }, 100));
    }

    // Smooth scrolling with enhanced easing
    initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    this.smoothScrollTo(target.offsetTop - 80, 1000);
                }
            });
        });
    }

    smoothScrollTo(targetY, duration) {
        const startY = window.pageYOffset;
        const difference = targetY - startY;
        const startTime = performance.now();

        const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

        const scroll = (currentTime) => {
            const elapsed = (currentTime - startTime) / duration;
            const progress = Math.min(elapsed, 1);
            const easedProgress = easeInOutCubic(progress);

            window.scrollTo(0, startY + difference * easedProgress);

            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    }

    // Advanced scroll-triggered animations with stagger effect
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 150);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll(
            '.animate-slide-up, .animate-fade-in, .animate-bounce, ' +
            '.feature-card, .project-card, .skill-item, .experience-item, ' +
            '.contact-item, .faq-item, .stat-card, .value-card'
        );

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Multi-layer parallax effects
    initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero-section, .particle');

        parallaxElements.forEach((element, index) => {
            element.style.transform = 'translateZ(0)'; // Force hardware acceleration
        });

        this.handleScroll = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            // Hero parallax
            const hero = document.querySelector('.hero-section');
            if (hero) {
                hero.style.transform = `translateY(${rate * 0.8}px)`;
            }

            // Particle parallax with different speeds
            document.querySelectorAll('.particle').forEach((particle, index) => {
                const speed = (index + 1) * 0.1;
                particle.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.01}deg)`;
            });
        };
    }

    // Interactive elements with magnetic effects
    initInteractiveElements() {
        // Enhanced hover effects for cards
        const cards = document.querySelectorAll('.feature-card, .project-card, .skill-item, .stat-card, .value-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.createRippleEffect(e, card);
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '';
            });
        });

        // Navigation effects
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.textShadow = '0 0 20px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.6)';
                this.style.transform = 'translateY(-2px)';
            });

            link.addEventListener('mouseleave', function() {
                this.style.textShadow = '';
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // Magnetic button effects
    initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }

    // Advanced typing effect with cursor animation
    initTypingEffect() {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;

        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid var(--primary-color)';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                // Blinking cursor effect
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                    this.animateCursor(heroTitle);
                }, 500);
            }
        };

        setTimeout(typeWriter, 1500);
    }

    animateCursor(element) {
        let visible = true;
        setInterval(() => {
            element.style.borderRight = visible ? '2px solid var(--primary-color)' : 'none';
            visible = !visible;
        }, 600);
    }

    // Enhanced mouse follower with trail effect
    initMouseFollower() {
        const cursor = document.createElement('div');
        cursor.className = 'cursor-follower';
        cursor.innerHTML = '<div class="cursor-inner"></div>';
        cursor.style.cssText = `
            position: fixed;
            width: 40px;
            height: 40px;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            opacity: 0;
        `;
        document.body.appendChild(cursor);

        const cursorInner = cursor.querySelector('.cursor-inner');
        cursorInner.style.cssText = `
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            border: 1px solid rgba(0, 212, 255, 0.5);
        `;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '1';
        });

        const updateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;

            cursor.style.left = cursorX - 20 + 'px';
            cursor.style.top = cursorY - 20 + 'px';

            requestAnimationFrame(updateCursor);
        };
        updateCursor();

        // Interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .feature-card, .project-card, .skill-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursorInner.style.background = 'radial-gradient(circle, rgba(0, 255, 136, 0.4) 0%, transparent 70%)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorInner.style.background = 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)';
            });
        });
    }

    // Enhanced scroll progress with gradient
    initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color));
            z-index: 1000;
            transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = Math.min(scrollPercent, 100) + '%';
        });
    }

    // Dynamic particle system
    initParticleSystem() {
        const particleContainer = document.querySelector('.animated-bg');
        if (!particleContainer) return;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'dynamic-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: ${Math.random() > 0.5 ? 'var(--primary-color)' : 'var(--accent-color)'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5 + 0.1};
                animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
                animation-delay: ${Math.random() * 10}s;
            `;
            particleContainer.appendChild(particle);
        }
    }

    // Stagger animations for lists and grids
    initStaggerAnimations() {
        const staggerItems = document.querySelectorAll('.skills-grid .skill-item, .project-links a, .social-links a');

        staggerItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('stagger-item');
        });
    }

    // Form animations and validation
    initFormAnimations() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });

            input.addEventListener('input', function() {
                this.parentElement.classList.add('has-content');
            });
        });

        // Skip submission handling for contact form as it has custom Web3Forms integration
        if (form.id === 'contactForm') return;

        // Form submission animation for other forms
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                submitBtn.style.background = 'var(--accent-color)';

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    form.reset();
                }, 3000);
            }, 2000);
        });
    }

    // Ripple effect for interactive elements
    createRippleEffect(event, element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            z-index: 1;
        `;

        element.style.position = 'relative';
        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Page load animations
    handlePageLoad() {
        document.body.classList.add('loaded');

        // Animate hero elements
        setTimeout(() => {
            const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .btn');
            heroElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('animate-in');
                }, index * 200);
            });
        }, 300);
    }

    // Handle resize events
    handleResize() {
        // Recalculate positions for responsive design
        this.updateParticlePositions();
    }

    updateParticlePositions() {
        const particles = document.querySelectorAll('.dynamic-particle');
        particles.forEach(particle => {
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
        });
    }

    // Utility function for throttling
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize the animation system
const portfolioAnimations = new PortfolioAnimations();

// Add dynamic CSS animations
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }

    @keyframes floatParticle {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
        100% { transform: translateY(0px) rotate(360deg); }
    }

    .animate-in {
        animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
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

    .stagger-item {
        opacity: 0;
        animation: staggerFadeIn 0.6s ease-out forwards;
    }

    @keyframes staggerFadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .focused .form-control {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 0.2rem rgba(0, 212, 255, 0.25);
    }

    .has-content .form-control {
        background: rgba(255, 255, 255, 0.08);
    }

    body.loaded {
        opacity: 1;
    }

    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .cursor-follower {
        mix-blend-mode: difference;
    }

    .cursor-inner {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(dynamicStyles);
