import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Projects.css'

const Projects = () => {
  const sectionRef = useScrollAnimation('slide-in-up')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web',
      description: 'Full-stack e-commerce solution with React and Node.js',
      image: 'https://via.placeholder.com/400x250?text=E-Commerce',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Web',
      description: 'Collaborative task management application with real-time updates',
      image: 'https://via.placeholder.com/400x250?text=Task+App',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'Web',
      description: 'Modern portfolio with smooth animations and scroll effects',
      image: 'https://via.placeholder.com/400x250?text=Portfolio',
      tech: ['React', 'Vite', 'GSAP', 'CSS3'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Weather App',
      category: 'Web',
      description: 'Real-time weather application with forecasting',
      image: 'https://via.placeholder.com/400x250?text=Weather',
      tech: ['React', 'API', 'Chart.js'],
      link: '#',
      github: '#'
    }
  ]

  const categories = ['All', 'Web', 'Mobile', 'AI']
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="project-card stagger-item" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">Live Demo</a>
                  <a href={project.github} className="project-link">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
