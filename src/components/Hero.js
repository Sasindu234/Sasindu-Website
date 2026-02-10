export function renderHero() {
    const hero = document.getElementById('hero');

    hero.innerHTML = `
    <div class="hero section">
      <div class="container hero-content">
        <div class="hero-text">
          <span class="hero-greeting">Hello, I'm Sasindu Peiris</span>
          <h1 class="hero-title">Building <span class="text-gradient">Digital Experiences</span> That Matter.</h1>
          <p class="hero-subtitle">Software Developer specializing in modern web apps, Java systems, and resilient code.</p>
          
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-outline">Contact Me</a>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="code-block">
            <div class="code-content">
              <span class="line"><span class="keyword">class</span> <span class="function">Developer</span> {</span>
              <span class="line">&nbsp;&nbsp;<span class="keyword">constructor</span>() {</span>
              <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.name = <span class="string">"Sasindu Peiris"</span>;</span>
              <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.role = <span class="string">"Software Developer"</span>;</span>
              <span class="line">&nbsp;&nbsp;}</span>
              <span class="line"></span>
              <span class="line">&nbsp;&nbsp;<span class="function">code</span>() {</span>
              <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> <span class="string">"Clean, Efficient, Scalable"</span>;</span>
              <span class="line">&nbsp;&nbsp;}</span>
              <span class="line">}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
