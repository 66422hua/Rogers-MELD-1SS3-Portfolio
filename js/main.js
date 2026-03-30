/**
 * MELD 1SS3 Portfolio - Main JS
 * Simple logic for navigation and interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized');

    // Mobile Menu Toggle (Basic implementation)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // In a real implementation, we would toggle a class to show/hide the menu
            // For this static prototype, we'll just log it
            console.log('Menu toggled');
            alert('Mobile menu navigation: Home, About, Report, Reflection');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight current page in navigation (if not already handled by static HTML)
    const currentPath = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });
});
