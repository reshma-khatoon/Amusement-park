// ============== NAVIGATION ============== 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ============== HERO SLIDER ==============
let currentSlide = 0;
const heroSlides = document.querySelectorAll('.hero-slide');
const totalSlides = heroSlides.length;
const hero = document.querySelector('.hero');
const heroBackgrounds = [
    'ramadan-background-design-template-with-mosque_1126269-179.avif',
    'ferris-wheel-theme-park-amusement-park-image_1325692-7935.jpg',
    '20b4f480-d367-4172-acd3-a07facf195bf-Kings_Island_Adventure_Port_-_Sol_Spin.webp',
    '1.jpg'
];
let currentBackground = 0;

function updateHeroBackground(index) {
    const bgIndex = index % heroBackgrounds.length;
    hero.style.backgroundImage = `url("${heroBackgrounds[bgIndex]}")`;
}

function showSlide(n) {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    heroSlides[n].classList.add('active');
    updateHeroBackground(n);
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    showSlide(currentSlide);
}

function cycleHeroBackground() {
    currentBackground = (currentBackground + 1) % heroBackgrounds.length;
    updateHeroBackground(currentBackground);
}

// Initialize hero background and start looping backgrounds.
if (hero) {
    updateHeroBackground(currentBackground);
    setInterval(cycleHeroBackground, 7000);
}

// Auto-slide every 5 seconds
setInterval(() => changeSlide(1), 5000);

// ============== TESTIMONIAL SLIDER ==============
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonialCards.length;

function showTestimonial(n) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialCards[n].classList.add('active');
}

function changeTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    showTestimonial(currentTestimonial);
}

// Auto-change testimonials every 6 seconds
setInterval(() => changeTestimonial(1), 6000);

// ============== NEWSLETTER FORM ==============
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simple validation
    if (!email) {
        alert('Please enter your email!');
        return;
    }
    
    // Show success message
    const form = e.target;
    const button = form.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Thanks for subscribing! 🎉';
    button.style.background = 'linear-gradient(135deg, #06ffa5, #00ff88)';
    button.style.color = '#0a0e27';
    
    // Reset form
    form.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        button.style.color = '';
    }, 3000);
}

// ============== SCROLL ANIMATION ==============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all ride cards, activity cards, and event cards
document.querySelectorAll('.ride-card, .activity-card, .event-card, .video-card').forEach(card => {
    observer.observe(card);
});

// ============== SMOOTH SCROLL ==============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============== INTERACTIVE ELEMENTS ==============
// Add hover effects to buttons
const buttons = document.querySelectorAll('.learn-btn, .book-btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============== PARALLAX EFFECT ==============
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-slide');
    
    parallaxElements.forEach((el, index) => {
        if (el.classList.contains('active')) {
            el.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});

// ============== NAVBAR BACKGROUND ON SCROLL ==============
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(255, 0, 110, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ============== PAGE LOAD ANIMATION ==============
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Animate stats on page load
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
    });
});

// ============== KEYBOARD NAVIGATION ==============
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') changeSlide(1);
    if (e.key === 'ArrowLeft') changeSlide(-1);
});

// ============== VIDEO PLAY FUNCTIONALITY ==============
const videoCards = document.querySelectorAll('.video-card');
videoCards.forEach(card => {
    card.addEventListener('click', function() {
        // You can replace this with actual video modal functionality
        alert('Video would play here! 🎬\n\nImplement with video library like Plyr or Video.js');
    });
});

// ============== RIDE CARD DETAILS ==============
const rideButtons = document.querySelectorAll('.learn-btn');
rideButtons.forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const rideCard = this.closest('.ride-card');
        const rideName = rideCard.querySelector('.ride-info h3').textContent;
        
        // Show ride details (you can enhance this with a modal)
        alert(`Learn more about ${rideName}!\n\nThis would open a detailed modal with more information, videos, and booking options.`);
    });
});

// ============== BOOKING BUTTON ENHANCEMENT ==============
const bookingButtons = document.querySelectorAll('.book-btn');
bookingButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const packageName = this.closest('.pricing-card').querySelector('h3').textContent;
        
        // Simulate booking
        const formData = {
            package: packageName,
            timestamp: new Date().toLocaleString(),
            status: 'Pending'
        };
        
        console.log('Booking initiated:', formData);
        alert(`🎉 Proceeding with ${packageName} booking!\n\nIn a real application, this would:\n✓ Validate user information\n✓ Process payment\n✓ Send confirmation email\n✓ Generate QR code tickets`);
    });
});

// ============== COUNTER ANIMATION ==============
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 50);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 50);
}

// Animate stats when they come into view
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const value = entry.target.querySelector('h3').textContent;
            const numberValue = parseInt(value.replace(/\D/g, ''));
            
            if (numberValue) {
                animateCounter(entry.target.querySelector('h3'), numberValue);
                entry.target.dataset.animated = 'true';
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
});

// ============== FORM VALIDATION ==============
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============== EASTER EGGS & FUN ==============
let clickCount = 0;
const logo = document.querySelector('.logo');

if (logo) {
    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            alert('🎉 You found the Easter Egg!\n\nWelcome to NEXUS PARK - Where Dreams Meet Reality!\n\n🚀 Ready for an adventure?');
            clickCount = 0;
        }
    });
}

// ============== MOBILE OPTIMIZATION ==============
// Detect mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    // Reduce animation duration on mobile for better performance
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
    
    // Disable parallax on mobile
    window.removeEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
    });
}

// ============== PRINT STYLES ==============
window.addEventListener('beforeprint', () => {
    document.body.style.background = 'white';
});

// ============== PERFORMANCE OPTIMIZATION ==============
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============== ACCESSIBILITY ==============
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// Add focus styles for keyboard navigation
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const focusableContent = document.querySelectorAll(focusableElements);
const firstElement = focusableContent[0];
const lastElement = focusableContent[focusableContent.length - 1];

document.addEventListener('keydown', (e) => {
    const isTabPressed = e.key === 'Tab';
    
    if (!isTabPressed) return;
    
    if (e.shiftKey) {
        if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
        }
    } else {
        if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
        }
    }
});

// ============== CONSOLE MESSAGE ==============
console.log('%c🎢 Welcome to NEXUS PARK! 🎢', 'font-size: 20px; color: #ff006e; font-weight: bold;');
console.log('%cExperience the future of fun and entertainment!', 'font-size: 14px; color: #8338ec;');
console.log('%cDeveloped with ❤️ for thrill-seekers everywhere', 'font-size: 12px; color: #06ffa5;');
