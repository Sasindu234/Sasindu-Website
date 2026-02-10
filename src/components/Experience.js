export function renderExperience() {
  const experienceSection = document.getElementById('experience');

  const experiences = [
    {
      role: 'IT & Digital Operations (Co-owner)',
      company: 'Ceylon Clean Co',
      date: '2023 - Present',
      points: [
        'Most recent ongoing project as my job.',
        'Co-founded and run a service-based business partnership.',
        'Handle end-to-end marketing, including brand positioning, digital presence, and customer outreach.',
        'Designed, launched, and maintained the business website (CeylonCleanCo.ca).',
        'Manage social media accounts, online marketing campaigns, and basic financial management.'
      ]
    },
    {
      role: 'Residential Rehabilitation Worker',
      company: 'Core Support Services, NS',
      date: 'April 2025 - Present', // Leaving as is from resume provided, though dates might be conflicting with "2023-Present" for the other role, but user only specified change for IT Ops.
      points: [
        'Developed strong problem-solving, documentation, and professional communication skills.',
        'Worked collaboratively in a team while handling sensitive information and responsibilities.'
      ]
    },
    {
      role: 'Stock Unloader Associate',
      company: 'Walmart, New Minas, NS',
      date: '2023',
      points: [
        'Demonstrated reliability, time management, and efficiency in a fast-paced environment.'
      ]
    }
  ];

  const generateExp = (exps) => {
    return exps.map(exp => `
      <div class="experience-item">
        <span class="experience-date">${exp.date}</span>
        <h3 class="experience-title">${exp.role}</h3>
        <p class="experience-company">${exp.company}</p>
        <div class="experience-desc">
          <ul>
            ${exp.points.map(point => `<li>${point}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  };

  experienceSection.innerHTML = `
    <div class="experience section">
      <div class="container">
        <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
          <h2>Professional <span class="text-gradient">Experience</span></h2>
          <p>My journey in the tech and service industry.</p>
        </div>
        
        <div class="experience-list">
          ${generateExp(experiences)}
        </div>
      </div>
    </div>
  `;
}
