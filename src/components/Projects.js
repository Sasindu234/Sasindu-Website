export function renderProjects() {
  const projectsSection = document.getElementById('projects');

  // Data for projects (Simulating a database)
  const projects = [
    {
      id: 1,
      title: 'RideShare Application',
      desc: 'An academic Capstone Project. A prototype application with user registration, ride matching, logic, and Google Maps API integration for real-time routing.',
      fullDesc: 'The RideShare Application was a comprehensive Capstone project developed using Java and Object-Oriented Design principles. Key features include:\n- User Authentication & Registration System.\n- Sophisticated Ride Matching Algorithm based on location and preferences.\n- Integration with Google Maps API for real-time routing and distance calculation.\n- Clean, maintainable codebase designed for scalability.',
      tags: ['Java', 'Google Maps API', 'OOP', 'Prototype'],
      link: 'https://github.com/Sasindu234',
      icon: '🚗'
    },
    {
      id: 2,
      title: 'Ceylon Clean Co Website',
      desc: 'Official business website for a service-based company. Designed, launched, and maintained to improve brand visibility and customer outreach.',
      fullDesc: 'As a co-owner of Ceylon Clean Co, I designed and developed the official business website to establish a digital presence. \n- Created a responsive, user-friendly interface.\n- Implemented SEO best practices to increase local visibility.\n- Integrated contact forms and service listings.\n- Managed ongoing updates and performance optimization.',
      tags: ['Web Design', 'SEO', 'Digital Marketing', 'Business'],
      link: 'https://ceyloncleanco.ca',
      icon: '✨'
    }
  ];

  const generateProjects = (projs) => {
    return projs.map(proj => `
      <div class="project-card">
        <div class="project-image">
          ${proj.icon}
        </div>
        <div class="project-content">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.desc}</p>
          <div class="project-tags">
            ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            <button class="card-btn view-details-btn" data-id="${proj.id}">View Details &rarr;</button>
          </div>
        </div>
      </div>
    `).join('');
  };

  projectsSection.innerHTML = `
    <div class="projects section">
      <div class="container">
        <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
          <h2>Featured <span class="text-gradient">Projects</span></h2>
          <p>Highlights from my academic and professional work.</p>
        </div>
        
        <div class="projects-grid">
          ${generateProjects(projects)}
        </div>
        
        <div style="text-align: center; margin-top: 3rem;">
          <a href="https://github.com/Sasindu234" target="_blank" class="btn btn-outline">
            View More on GitHub <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Modal Structure -->
    <div id="project-modal" class="modal">
      <div class="modal-content glass">
        <span class="close-modal">&times;</span>
        <h2 id="modal-title">Project Title</h2>
        <div id="modal-body">
          <!-- Details injected here -->
        </div>
      </div>
    </div>
  `;

  // Modal Logic
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.close-modal');
  const btns = document.querySelectorAll('.view-details-btn');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = parseInt(btn.getAttribute('data-id'));
      const project = projects.find(p => p.id === projectId);

      if (project) {
        modalTitle.textContent = project.title;
        // Convert newlines to <br> or paragraphs
        modalBody.innerHTML = project.fullDesc
          .split('\n')
          .map(line => `<p style="margin-bottom: 0.5rem;">${line}</p>`)
          .join('') +
          `<br><a href="${project.link}" target="_blank" class="btn btn-primary" style="font-size: 0.9rem;">Visit Project / Repo</a>`;

        modal.style.display = "flex";
        setTimeout(() => modal.classList.add('show'), 10);
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = "none", 300);
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.classList.remove('show');
      setTimeout(() => modal.style.display = "none", 300);
    }
  });
}
