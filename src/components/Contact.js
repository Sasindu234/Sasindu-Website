export function renderContact() {
    const footer = document.getElementById('footer');

    footer.innerHTML = `
    <div id="contact" class="footer section">
      <div class="container">
        <div class="contact-header">
          <h2>Get In <span class="text-gradient">Touch</span></h2>
        </div>
        
        <div class="contact-grid">
          <div class="contact-item">
            <h3 class="contact-label">Phone</h3>
            <p class="contact-value">902-990-0352</p>
          </div>
          
          <div class="contact-item">
            <h3 class="contact-label">Email</h3>
            <a href="mailto:malwaththa64@gmail.com" class="contact-link">malwaththa64@gmail.com</a>
          </div>
          
          <div class="contact-item">
            <h3 class="contact-label">Location</h3>
            <p class="contact-value">614 Main St, Wolfville, NS, B4P 1E8</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Sasindu Peiris. All rights reserved.</p>
          <div class="socials">
            <a href="https://github.com/Sasindu234" target="_blank" class="contact-link"><i class="fab fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
