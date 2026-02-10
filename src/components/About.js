import profileImg from '../assets/profile.jpg';

export function renderAbout() {
  const about = document.getElementById('about');

  about.innerHTML = `
    <div class="about section">
      <div class="container about-content">
        <div class="about-image">
          <div class="profile-img-container" style="position: relative; width: 100%; max-width: 400px; margin: 0 auto;">
            <img src="${profileImg}" alt="Sasindu Peiris" style="width: 100%; border-radius: 20px; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5); object-fit: cover; aspect-ratio: 1/1;">
          </div>
        </div>
        
        <div class="about-text">
          <h2>About <span class="text-gradient">Me</span></h2>
          <p>
            I am a Computer Science graduate from Acadia University with a strong foundation in software development, databases, and APIs. My journey involves hands-on experience building real-world applications and co-owning a service-based business, "Ceylon Clean Co", where I managed everything from digital presence to operations.
          </p>
          <p>
            I combine technical expertise in Java, Python, and SQL with strong analytical thinking and adaptability. Currently seeking entry-level software developer roles to leverage my skills in a professional environment.
          </p>
          
          <div class="stats">
            <div class="stat-item">
              <h3>2025</h3>
              <p>Graduation Year</p>
            </div>
            <div class="stat-item">
              <h3>3.0</h3>
              <p>GPA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
