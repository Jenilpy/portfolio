import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './About.css'

const About = () => {
  const sectionRef = useScrollAnimation('slide-in-up')
  
  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
        
        <div className="about-content">
          <div className="about-image-wrapper stagger-item">
            <img src="https://via.placeholder.com/300x300?text=Profile" alt="Profile" className="about-image" />
          </div>
          
          <div className="about-text stagger-item">
            <h3>Hi, I'm Your Name</h3>
            <p className="about-intro">
              I'm a passionate Full Stack Developer with a love for creating beautiful and functional web experiences. 
              With 3+ years of experience in web development, I specialize in modern JavaScript frameworks and responsive design.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎓</span>
                <h4>Education</h4>
                <p>Bachelor's in Computer Science</p>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💼</span>
                <h4>Experience</h4>
                <p>3+ Years in Web Development</p>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <h4>Projects</h4>
                <p>15+ Completed Projects</p>
              </div>
            </div>

            <p className="about-description">
              I love solving complex problems and turning ideas into reality through code. When I'm not coding, 
              you can find me exploring new technologies, contributing to open-source, or sharing knowledge with the community.
            </p>

            <button className="cta-button">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
