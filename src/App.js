import "./App.css";
import { useState } from "react";

function App() {
  const [expandedMonth, setExpandedMonth] = useState(null);

  const toggleMonth = (month) => {
    setExpandedMonth(expandedMonth === month ? null : month);
  };

  const progressData = [
    {
      id: 1,
      month: "Jan-Feb 2025",
      title: "Programming Foundations",
      technologies: ["Eclipse IDE", "Java", "Notepad++", "MS Access"],
      topics: ["Programming logic & pseudocode", "Data types, variables, and operators", "Control flow: if/else, loops, switch", "Intro to binary & hexadecimal systems", "Basic SQL queries and database structure"],
      skills: ["Problem-solving through algorithms", "Writing and debugging console applications", "Understanding memory and data representation", "Designing simple relational databases"],
    },
    {
      id: 2,
      month: "Mar-Apr 2025",
      title: "Object-Oriented Programming & Databases",
      technologies: ["Java", "Eclipse", "MySQL / MS Access", "Git & GitHub"],
      topics: ["Classes, objects, and methods", "Encapsulation, inheritance, polymorphism", "Database design, normalization & relationships", "SQL queries with joins and constraints"],
      skills: ["Designing object-oriented solutions", "Implementing reusable and modular code", "Integrating Java applications with databases", "Version control and collaboration with Git"],
    },
    {
      id: 3,
      month: "May-Jun 2025",
      title: "Web Development Fundamentals",
      technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Chrome DevTools"],
      topics: ["HTML structure & semantic elements", "CSS Flexbox and Grid layouts", "JavaScript DOM manipulation", "Events, functions, and basic animations", "Intro to responsive design"],
      skills: ["Creating responsive and accessible web pages", "Implementing dynamic front-end behavior", "Styling with modern CSS techniques", "Debugging and testing client-side code"],
    },
    {
      id: 4,
      month: "Jul-Aug 2025",
      title: "Advanced Java & Backend Development",
      technologies: ["Java Swing", "Node.js", "Express.js", "MySQL"],
      topics: ["GUI development using Swing", "Event-driven programming concepts", "Building RESTful APIs with Node.js and Express", "Exception handling and error management"],
      skills: ["Designing interactive desktop applications", "Developing backend services and APIs", "Connecting front-end and backend via JSON", "Implementing authentication and routing"],
    },
    {
      id: 5,
      month: "Sep-Oct 2025",
      title: "Software Design & Networking Fundamentals",
      technologies: ["Visual Studio", "Cisco Packet Tracer", "Networking Tools"],
      topics: ["Software design principles and architecture patterns", "Introduction to networking concepts (IP, DNS, routing)", "Client-server communication and protocols", "System design and software documentation"],
      skills: ["Applying software design principles to real projects", "Understanding how data travels through networks", "Implementing structured, scalable code", "Documenting and presenting technical designs"],
      current: true,
    },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">Portfolio</h1>
          <ul className="nav-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#progress">Progress</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ansh Patel</span>
          </h1>
          <p className="hero-subtitle">Computer programmer</p>
          <p className="hero-description">I design and develop efficient, functional, and user-friendly software solutions.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#progress" className="btn btn-secondary">
              My Progress
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a passionate developer building efficient software solutions & modern web applications. I love turning complex problems into simple solutions.</p>
              {/* <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p> */}
              <p>When I'm not coding, you'll find me exploring new technologies, making some projects or playing cricket.</p>

              <div className="education">
                <h3>Education</h3>
                <div className="education-item">
                  <h4>Adv. Diploma in Computer Programming and Analysis</h4>
                  <p className="education-school">Fanshawe College</p>
                  <p className="education-year">2025 - 2027</p>
                  <p>Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems</p>
                </div>
              </div>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">♻️</div>
              </div>
              <div className="project-info">
                <h3>Recycle Reminder</h3>
                <p>A full-stack web app that displays recycling, garbage, and yard waste pickup dates for any London, ON address.</p>
                <div className="project-tech">
                  <span>Node.js</span>
                  <span>REST APIs</span>
                  <span>Web Scrapping</span>
                </div>
                <div className="project-links">
                  {/* <a href="#" className="project-link">
                    View Demo
                  </a> */}
                  <a href="https://github.com/Ansh0x404/Recycle-Reminder" target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">🔢</div>
              </div>
              <div className="project-info">
                <h3>Sudoku</h3>
                <p>a fully interactive Sudoku puzzle generator with GUI</p>
                <div className="project-tech">
                  <span>Java</span>
                  <span>Swing</span>
                </div>
                <div className="project-links">
                  {/* <a href="#" className="project-link">
                    View Demo
                  </a> */}
                  <a href="https://github.com/Ansh0x404/Sudoku" target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">🌙</div>
              </div>
              <div className="project-info">
                <h3>Dark mode Extension</h3>
                <p>A custom Chrome extension that enables dark mode on any webpage.</p>
                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>HTML5</span>
                  <span>CSS</span>
                </div>
                <div className="project-links">
                  {/* <a href="#" className="project-link">
                    View Demo
                  </a> */}
                  <a href="https://github.com/Ansh0x404/Dark-mode-extension" target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section id="progress" className="progress-section">
        <div className="container">
          <h2 className="section-title">My Learning Journey</h2>
          <p className="progress-subtitle">January 2025 - October 2025</p>

          {/* Horizontal Progress Bar */}
          <div className="horizontal-timeline">
            <div className="timeline-bar">
              {progressData.map((item, index) => (
                <div key={item.id} className="timeline-segment">
                  <div className={`timeline-node ${item.current ? "current" : ""} ${expandedMonth === item.id ? "active" : ""}`} onClick={() => toggleMonth(item.id)}>
                    <div className="node-circle">
                      {item.current}
                      <span className="node-number">{item.id}</span>
                    </div>
                    <div className="node-label">{item.month}</div>
                  </div>
                  {index < progressData.length - 1 && <div className="timeline-connector"></div>}
                </div>
              ))}
            </div>

            {/* Expanded Card */}
            {expandedMonth && (
              <div className="expanded-card">
                {progressData
                  .filter((item) => item.id === expandedMonth)
                  .map((item) => (
                    <div key={item.id} className="card-content">
                      <div className="card-header">
                        <h3>{item.title}</h3>
                        <button className="close-btn" onClick={() => setExpandedMonth(null)}>
                          ✕
                        </button>
                      </div>

                      <div className="card-body">
                        <div className="card-section">
                          <h4>
                            <span className="icon">💻</span> Technologies
                          </h4>
                          <div className="tech-tags">
                            {item.technologies.map((tech, i) => (
                              <span key={i}>{tech}</span>
                            ))}
                          </div>
                        </div>

                        <div className="card-section">
                          <h4>
                            <span className="icon">📚</span> Topics Learned
                          </h4>
                          <ul>
                            {item.topics.map((topic, i) => (
                              <li key={i}>{topic}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="card-section">
                          <h4>
                            <span className="icon">⚡</span> Skills Gained
                          </h4>
                          <ul>
                            {item.skills.map((skill, i) => (
                              <li key={i}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Ansh Patel. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/Ansh0x404" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ansh0x200/" className="social-link">
              LinkedIn
            </a>
            {/* <a href="#" className="social-link">
              Twitter
            </a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
