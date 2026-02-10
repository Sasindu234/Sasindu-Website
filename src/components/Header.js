export function renderHeader() {
  const header = document.getElementById('header');

  header.innerHTML = `
    <div class="container header-container">
      <a href="#" class="logo">
        <span class="text-gradient">&lt;/&gt;</span> Sasindu Peiris
      </a>
      
      <button class="mobile-menu-btn" aria-label="Toggle menu">
        <i class="fas fa-bars"></i> &#9776; <!-- Unicode hamburger fallback -->
      </button>

      <nav class="nav-links">
        <a href="#about" class="nav-link">About</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#contact" class="nav-link btn-secondary">Contact</a>
      </nav>
    </div>
  `;

  // Add class on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      header.classList.add('glass'); // Ensure glass effect is strong on scroll
    } else {
      header.classList.remove('scrolled');
      header.classList.remove('glass');
    }
  });

  // Mobile Menu Logic
  const menuBtn = header.querySelector('.mobile-menu-btn');
  const navLinks = header.querySelector('.nav-links');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
