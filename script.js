document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('#mainNavbar a');
    const menuIcon = document.querySelector('.hamburger-menu'); // Moved inside DOMContentLoaded

    // 1. Dynamic Scroll Effects for Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.6rem 0';
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.02)';
        }
    });

    // 2. Click Handler - Forces mobile layout to clear instantly when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Manage Active Class Highlight
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // --- THE MOBILE FORCE-CLOSE TRICK ---
            if (window.innerWidth <= 768) {
                navbar.classList.remove('responsive-nav-open');
                navbar.style.display = 'none';
            }
        });
    });

    // 3. Hamburger Menu Click Event Listener
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            toggleMenu(navbar);
        });
    }
});

// 4. Cleaned up Menu Toggle Function
function toggleMenu(navbar) {
    // If the navbar element wasn't passed, find it manually
    const nav = navbar || document.getElementById('mainNavbar');
    
    // If the menu was hard-hidden by our link clicker, reset it
    if (nav.style.display === 'none') {
        nav.style.display = 'block';
        nav.classList.add('responsive-nav-open');
    } else {
        // Otherwise, run standard toggling
        nav.classList.toggle('responsive-nav-open');
        
        // Match the inline display property to the current state
        if (nav.classList.contains('responsive-nav-open')) {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }
}