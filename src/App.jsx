import { useState, useEffect } from 'react'
import './GruvboxTheme.css'

function App() {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // State for theme toggle (dark/light)
  const [isDarkMode, setIsDarkMode] = useState(false) 

  useEffect(() => {
    document.body.className = isDarkMode ? 'gruvbox-dark' : 'gruvbox-light'
  }, [isDarkMode])

  return (
    <div className={`portfolio-container ${isDarkMode ? 'gruvbox-dark' : 'gruvbox-light'}`}>
      {/* Header/Navigation */}
      <header className="header">
        <div className="header-controls">
          <button 
            className="theme-toggle" 
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          
          <h1 className="logo">Portfolio</h1>
        </div>
        
        <div className="right-controls">
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="menu-icon"></span>
          </button>
        </div>
        
        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Hello, I'm <span className="highlight">Miłosz Fede</span></h2>
          <h3>Software Engineering, Backend and Frontend Development</h3>
          <p>I specialize in .NET Core applications, on the Frontend side I use React.js</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p> I'm student of applied informatics and I'm passionate about programming. I have experience with C#, ASP.NET, Python and JavaScript. I create my own projects, so I can still progress in my programming journey. </p>
            <p> I enjoy teamwork, my english is on B2/C1 level. I'm seeking for a job opportunity as a Junior/Intern Developer</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            
            <h3>Online Shop in C#</h3>
            <p>Somewhat of a Amazon Shop copy. I used .NET MVC structure. Database in Postgresql.</p>
            <div className="project-links">
              <a href="https://github.com/miloszfede/Online-shop-in-C-" className="btn small-btn">Source Code</a>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="project-card">
            
            <h3>Filmweb</h3>
            <p>Still in progress, I'm doing big database of movies, using .NET Web Api and for Frontend React with Typescript. DB in SQLite.</p>
            <div className="project-links">
              <a href="https://github.com/miloszfede/filmweb" className="btn small-btn">Source Code</a>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="project-card">
            
            <h3>Assembly Simulator</h3>
            <p>Assembly Simulator I did for my Architecture of Computer systems course. It simmulates commands you can do for memory in 8086 processor.</p>
            <div className="project-links">
              <a href="https://github.com/miloszfede/Assembly-Simulator" className="btn small-btn">Source Code</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {/* Frontend */}
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul className="skill-list">
              <li>HTML5/CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          
          {/* Backend */}
          <div className="skill-category">
            <h3>Backend</h3>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>C#</li>
              <li>ASP .NET Core</li>
              <li>Python</li>
            </ul>
          </div>
          
          {/* Tools */}
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <ul className="skill-list">
              <li>Git</li>
              <li>VS Code</li>
              <li>Visual Studio</li>
              <li>Bun</li>
              <li>SQLite</li>
              <li>Postgresql</li>
              <li>Microsoft SQL Server</li>
              <li>Microsoft Azure</li>
              <li>Docker</li>
            </ul>
          </div>
          
          {/* Soft Skills */}
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <ul className="skill-list">
              <li>Problem Solving</li>
              <li>Teamwork</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </section>
          
      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {/* Experience Item 1 */}
          <div className="timeline-item">
            <div className="timeline-date">2022 - Present</div>
            <div className="timeline-content">
              <h3>Receptionist</h3>
              <h4>SKW Racing Park</h4>
              <p>Customer service, contact in person, on e-mail and phone. Managing databases.</p>
            </div>
          </div>
          
          {/* Experience Item 2 */}
          <div className="timeline-item">
            <div className="timeline-date">2021 - 2022</div>
            <div className="timeline-content">
              <h3>Barista</h3>
              <h4>Bonjour Cava</h4>
              <p>Customer Service, Sales</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2020 - 2022</div>
            <div className="timeline-content">
              <h3>Cashier</h3>
              <h4>Żabka</h4>
              <p>Customer Service, Sales</p>
            </div>
          </div>
        </div>
      </section>

        {/* Education */}

        <section id="education" className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="timeline-content">
            <div className="education-timeline">2024 - 2027</div>
              <h3>Applied Informatics</h3>
              <h4>Wyższa Szkoła Ekonomii i informatyki w Krakowie</h4>
              <p>Stydying informatics and programming mostly in Microsoft tech stack</p>
          </div>

          <br></br>
          
            <div className = "timeline-content">
            <div className="education-timeline">02.2024 - 03.2025</div>
              <h3>Fullstack Web Developer</h3>
              <h4>Codecool</h4>
              <p>Studied technologies and did projects in Python, JavaScript, React, C#, ASP .NET Core. I used Postgresql, SQLite and GIT.</p>
            </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me through any of these channels:</p>
            <ul>
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:miloszfede@gmail.com">miloszfede@gmail.com</a>
              </li>
              <li>
                <span className="contact-label">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/mi%C5%82osz-fede-032045283/" target="_blank" rel="noreferrer">linkedin.com/in/miloszfede</a>
              </li>
              <li>
                <span className="contact-label">GitHub:</span>
                <a href="https://github.com/miloszfede" target="_blank" rel="noreferrer">github.com/miloszfede</a>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn primary-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/mi%C5%82osz-fede-032045283/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/miloszfede" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
