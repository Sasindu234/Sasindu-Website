import './styles/index.css'
import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderSkills } from './components/Skills.js';
import { renderExperience } from './components/Experience.js';
import { renderProjects } from './components/Projects.js';
import { renderEducation } from './components/Education.js';
import { renderContact } from './components/Contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // Render Components
  renderHeader();
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderContact();

  // Initialize Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Add 'fade-in-up' class to major sections or elements if present
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);

    // Monkey patch class adding for visibility
    const originalAdd = section.classList.add;
  });

  // Minimalistic animation loop
  const reveal = () => {
    document.querySelectorAll('.section').forEach(section => {
      const windowHeight = window.innerHeight;
      const elementTop = section.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', reveal);
  reveal(); // Trigger once on load

  // Scroll to Top Logic
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.id = 'scroll-top-btn';
  scrollTopBtn.innerHTML = '&uarr;'; // Arrow up
  scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
