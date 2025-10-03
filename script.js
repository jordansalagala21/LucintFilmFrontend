// Function to handle mobile menu visibility
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = mainNav.querySelectorAll('a');

    // Toggle the 'active' class on button click (opens/closes menu)
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        // Change the icon to an 'X' when open
        menuToggle.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when a link is clicked (for smoother mobile navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuToggle.textContent = '☰'; // Reset icon
        });
    });

    // Intersection Observer for section fade-in animation
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});