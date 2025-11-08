// Video Play/Pause Functionality
const video = document.getElementById('feature-video');
const videoPlayOverlay = document.getElementById('video-play-overlay');
const videoThumbnailContainer = document.querySelector('.video-thumbnail-container');
const videoThumbnail = document.querySelector('.video-thumbnail');

if (video && videoPlayOverlay) {
    // Show play overlay when video is paused
    video.addEventListener('pause', () => {
        videoPlayOverlay.classList.remove('hidden');
    });

    // Hide play overlay when video is playing
    video.addEventListener('play', () => {
        videoPlayOverlay.classList.add('hidden');
    });

    // Toggle play/pause on video click (but not when clicking overlay)
    video.addEventListener('click', (e) => {
        // Don't toggle if clicking the overlay
        if (e.target === video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    });

    // Play video on overlay click
    videoPlayOverlay.addEventListener('click', (e) => {
        e.stopPropagation();
        video.play();
    });

    // Play video on thumbnail click
    if (videoThumbnailContainer) {
        videoThumbnailContainer.addEventListener('click', () => {
            videoThumbnailContainer.style.display = 'none';
            video.style.display = 'block';
            video.play();
        });
    }

    // Show overlay initially and when video ends
    video.addEventListener('ended', () => {
        videoPlayOverlay.classList.remove('hidden');
        videoThumbnailContainer.style.display = 'block';
        video.style.display = 'none';
    });

    // Initial state - show play overlay if video is paused
    if (video.paused) {
        videoPlayOverlay.classList.remove('hidden');
    } else {
        videoPlayOverlay.classList.add('hidden');
    }
}

// Testimonial Slider/Carousel
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.dot');
let currentTestimonial = 0;
let testimonialInterval;

function showTestimonial(index) {
    // Remove active class from all slides and dots
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    if (testimonialSlides[index]) {
        testimonialSlides[index].classList.add('active');
    }
    if (testimonialDots[index]) {
        testimonialDots[index].classList.add('active');
    }

    currentTestimonial = index;
}

function nextTestimonial() {
    const nextIndex = (currentTestimonial + 1) % testimonialSlides.length;
    showTestimonial(nextIndex);
}

function startTestimonialAutoSlide() {
    testimonialInterval = setInterval(() => {
        nextTestimonial();
    }, 5000); // 5 seconds interval
}

function stopTestimonialAutoSlide() {
    if (testimonialInterval) {
        clearInterval(testimonialInterval);
    }
}

// Initialize testimonial slider
if (testimonialSlides.length > 0) {
    showTestimonial(0);
    startTestimonialAutoSlide();

    // Dot click handlers
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopTestimonialAutoSlide();
            showTestimonial(index);
            startTestimonialAutoSlide();
        });
    });

    // Pause auto-slide on hover (optional)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', stopTestimonialAutoSlide);
        testimonialSlider.addEventListener('mouseleave', startTestimonialAutoSlide);
    }
}

// Contact Form Modal
const contactForm = document.getElementById('contact-form');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');

// Prevent body scrolling when modal is open
function toggleBodyScroll(disable) {
    if (disable) {
        document.body.classList.add('modal-open');
    } else {
        document.body.classList.remove('modal-open');
    }
}

// Show modal
function showModal() {
    if (modalOverlay) {
        modalOverlay.classList.add('active');
        toggleBodyScroll(true);
    }
}

// Hide modal
function hideModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        toggleBodyScroll(false);
    }
}

// Form submission handler
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Basic validation (HTML5 validation should handle this, but double-check)
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Show success modal
        showModal();

        // Reset form
        contactForm.reset();
    });
}

// Close modal handlers
if (modalClose) {
    modalClose.addEventListener('click', hideModal);
}

if (modalOverlay) {
    // Close modal when clicking outside of it
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            hideModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            hideModal();
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Newsletter form submission
const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = subscribeForm.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(emailInput.value)) {
                alert('Thank you for subscribing!');
                subscribeForm.reset();
            } else {
                alert('Please enter a valid email address');
            }
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully');
});

