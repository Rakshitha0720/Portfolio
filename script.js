    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          document.querySelector('.navbar').classList.add('navbar-scrolled');
      } else {
          document.querySelector('.navbar').classList.remove('navbar-scrolled');
      }
  });

  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  // Close mobile menu on click
  const navLinks = document.querySelectorAll('.nav-item')
  const menuToggle = document.getElementById('navbarNav')
  const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false})
  navLinks.forEach((l) => {
      l.addEventListener('click', () => { bsCollapse.toggle() })
  })