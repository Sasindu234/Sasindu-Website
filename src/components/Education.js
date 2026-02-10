export function renderEducation() {
    const eduSection = document.getElementById('education');

    eduSection.innerHTML = `
    <div class="education section" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
          <h2>Education & <span class="text-gradient">Certifications</span></h2>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <!-- Degree 1 -->
          <div class="glass" style="padding: 2rem; border-radius: 16px;">
            <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">Bachelor of Applied Computer Science</h3>
            <p style="color: var(--accent-primary); font-weight: 500; margin-bottom: 1rem;">Software Development</p>
            <p style="color: var(--text-secondary);">Acadia University, Wolfville, NS</p>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Graduated: Dec 2025 | Final GPA: 3.0</p>
          </div>

          <!-- Degree 2 -->
          <div class="glass" style="padding: 2rem; border-radius: 16px;">
            <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">Bachelor of Computer Science</h3>
            <p style="color: var(--accent-primary); font-weight: 500; margin-bottom: 1rem;">Years 1-2</p>
            <p style="color: var(--text-secondary);">American Education Center, Sri Lanka</p>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Northwood University Affiliated</p>
          </div>

          <!-- Certifications -->
          <div class="glass" style="padding: 2rem; border-radius: 16px; grid-column: 1 / -1;">
             <h3 style="color: var(--text-primary); margin-bottom: 1rem;">Certifications & Additional</h3>
             <ul style="color: var(--text-secondary); list-style: circle; padding-left: 1.5rem; display: grid; gap: 0.5rem;">
                <li>Currently studying for CompTIA Network+ and Security+</li>
                <li>First Aid & CPR (Adult / Child / Infant)</li>
                <li>Valid Driver’s License</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}
