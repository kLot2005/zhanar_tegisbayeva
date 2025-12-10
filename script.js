document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    mobileBtn.addEventListener('click', () => {
        nav.classList.toggle('active');

        // Optional: Animate burger to X
        mobileBtn.classList.toggle('open');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileBtn.classList.remove('open');
        });
    });
});
