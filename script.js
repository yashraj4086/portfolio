// Mobile menu toggle
function openmenu() {
    document.getElementById('sidemenu').style.right = "0";
}

function closemenu() {
    document.getElementById('sidemenu').style.right = "-200px";
}

// Theme switcher
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

themeToggle.addEventListener('click', function() {
    let theme = 'dark';
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        theme = 'light';
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// Initialize particles.js and other functionality
document.addEventListener('DOMContentLoaded', function() {
    // Auto-hide header on scroll
    let lastScroll = 0;
    const navbar = document.querySelector('nav');
    const header = document.getElementById('header');
    const headerHeight = header.offsetHeight;

    // Typing animation
    const typed = new Typed('.typing-text', {
        strings: ['From Pakistan.', 'Graphic Designer.', 'Video Editor.', 'Web Developer.'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Initialize particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#6C63FF"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#6C63FF",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Scroll event for header
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('hide');
            navbar.classList.remove('scrolled');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('hide')) {
            // Scroll down
            navbar.classList.add('hide');
        } else if (currentScroll < lastScroll && navbar.classList.contains('hide')) {
            // Scroll up
            navbar.classList.remove('hide');
        }
        
        // Add background when scrolled
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closemenu();
            }
        });
    });

    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    // Form submission using Formspree
    const contactForm = document.querySelector('form[name="contact-form"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            
            // Change button text to loading state
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then(data => {
                // Show success message
                alert('Message sent successfully! I will get back to you soon.');
                contactForm.reset();
            })
            .catch(error => {
                // Show error message
                alert('There was a problem sending your message. Please try again later.');
                console.error('Error:', error);
            })
            .finally(() => {
                // Reset button state
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            });
        });
    }

    // Responsive adjustments
    function handleResponsive() {
        // Adjust header text size for mobile
        if (window.innerWidth < 768) {
            document.querySelector('.header-text h1').style.fontSize = '2.5rem';
            document.querySelector('.tagline').style.fontSize = '1rem';
            
            // Stack buttons on mobile
            const ctaButtons = document.querySelector('.cta-buttons');
            if (ctaButtons) {
                ctaButtons.style.flexDirection = 'column';
                ctaButtons.querySelector('.btn-secondary').style.marginLeft = '0';
                ctaButtons.querySelector('.btn-secondary').style.marginTop = '15px';
            }
            
            // Adjust about section layout
            document.querySelector('.about-col-1').style.flex = '0 0 100%';
            document.querySelector('.about-col-1').style.maxWidth = '100%';
            document.querySelector('.about-col-2').style.flex = '0 0 100%';
            document.querySelector('.about-col-2').style.maxWidth = '100%';
            document.querySelector('.about-col-1').style.marginBottom = '40px';
            
            // Adjust skills grid
            document.querySelector('.skills-grid').style.gridTemplateColumns = '1fr';
        } else {
            document.querySelector('.header-text h1').style.fontSize = '3.5rem';
            document.querySelector('.tagline').style.fontSize = '1.2rem';
            
            const ctaButtons = document.querySelector('.cta-buttons');
            if (ctaButtons) {
                ctaButtons.style.flexDirection = 'row';
                ctaButtons.querySelector('.btn-secondary').style.marginLeft = '15px';
                ctaButtons.querySelector('.btn-secondary').style.marginTop = '0';
            }
            
            document.querySelector('.about-col-1').style.flex = '0 0 40%';
            document.querySelector('.about-col-1').style.maxWidth = '40%';
            document.querySelector('.about-col-2').style.flex = '0 0 60%';
            document.querySelector('.about-col-2').style.maxWidth = '60%';
            document.querySelector('.about-col-1').style.marginBottom = '0';
            
            document.querySelector('.skills-grid').style.gridTemplateColumns = 'repeat(2, 1fr)';
        }
    }

    // Run on load and resize
    handleResponsive();
    window.addEventListener('resize', handleResponsive);
});