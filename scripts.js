document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll when clicking navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Add active class to the current link
    const allLinks = document.querySelectorAll('.navbar-nav .nav-link');
    allLinks.forEach(link => {
        link.addEventListener('click', function () {
            allLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Back to top button functionality (optional)
    const backToTopBtn = document.createElement('button');
    backToTopBtn.classList.add('btn', 'btn-primary');
    backToTopBtn.textContent = 'Back to Top';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '30px';
    backToTopBtn.style.right = '30px';
    backToTopBtn.style.display = 'none';
    document.body.appendChild(backToTopBtn);

    // Show button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Scroll back to the top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
