import React from 'react'
import LightRays from '../Components/LightRays'
import TextType from '../Components/TextType'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <LightRays
        raysOrigin="center"
        raysColor="#fff5cc"
        raysSpeed={0.8}
        lightSpread={1.5}
        rayLength={2.5}
        fadeDistance={1.3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />
      <div className="hero-card">
        <div className="hero-content">
          <h1 className="hero-title">I'm Patel Jenil</h1>
          <p className="hero-subtitle">
            <span className="subtitle-prefix">A</span>{''}
            <TextType 
              text={["Web Developer.", "Tech Enthusiast.", "Full-Stack Learner."]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              loop={true}
              className="typing-subtitle"
            />
          </p>
          <p className="hero-description">
            Crafting <span className="highlight">user-centered </span>, websites with a balance of <span className="highlight">creativity</span> & <span className="highlight">precision.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
