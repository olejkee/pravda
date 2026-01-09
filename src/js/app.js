import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.querySelector('.header__burger-btn');
  const navList = document.querySelector('.header__nav-list');

  if (burgerBtn && navList) {
    burgerBtn.addEventListener('click', function() {
      // Toggle active class on burger button
      this.classList.toggle('active');
      
      // Toggle active class on nav list
      navList.classList.toggle('header__nav-list--active');
      
      // Prevent body scroll when menu is open
      document.body.classList.toggle('no-scroll', navList.classList.contains('header__nav-list--active'));
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!burgerBtn.contains(event.target) && 
          !navList.contains(event.target) &&
          window.innerWidth <= 1024) {
        burgerBtn.classList.remove('active');
        navList.classList.remove('header__nav-list--active');
        document.body.classList.remove('no-scroll');
      }
    });

    // Handle window resize to close menu when going from mobile to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth > 1024) {
        burgerBtn.classList.remove('active');
        navList.classList.remove('header__nav-list--active');
        document.body.classList.remove('no-scroll');
      }
    });
  }
});