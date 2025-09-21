document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
});

function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            const isHidden = mobileMenu.classList.contains('hidden');

            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                setTimeout(() => {
                    mobileMenu.classList.add('show');
                }, 10);

                // Change icon to X
                mobileMenuButton.innerHTML = '<i class="fas fa-times text-xl"></i>';
            } else {
                mobileMenu.classList.remove('show');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);

                // Change icon back to hamburger
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            }
        });

        // Close menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            });
        });
    }
}