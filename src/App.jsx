import React from 'react'
import './App.css'
import SparkleNavbar from './Components/Navbar.jsx'
import Hero from './Pages/Hero.jsx'
import About from './Pages/About.jsx'
import Skills from './Pages/Skills.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import Footer from './Components/Footer.jsx'

function App() {
 
  return (
    <>
    <SparkleNavbar items={['Home', 'About', 'Skills', 'Projects', 'Contact']} color="#0000ff" />
    <main style={{ paddingTop: '84px' }}>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}

export default App
