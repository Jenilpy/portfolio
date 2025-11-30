import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Skills.css'

const Skills = () => {
  const sectionRef = useScrollAnimation('slide-in-up')
  
  const skillsData = {
    Frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'CSS/Sass', level: 85 },
      { name: 'HTML5', level: 92 },
      { name: 'Vite', level: 80 },
      { name: 'Responsive Design', level: 90 }
    ],
    Backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'Python', level: 75 },
      { name: 'API Design', level: 82 }
    ],
    Tools: [
      { name: 'Git/GitHub', level: 88 },
      { name: 'Docker', level: 72 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 70 },
      { name: 'npm/yarn', level: 90 }
    ]
  }

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <div className="section-divider"></div>

        {Object.entries(skillsData).map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category[0]}</h3>
            <div className="skills-grid">
              {category[1].map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-card stagger-item">
                  <div className="skill-header">
                    <h4>{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-container">
                    <div 
                      className="progress-bar" 
                      style={{ '--width': `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills