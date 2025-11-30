import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Contact.css'

const Contact = () => {
  const sectionRef = useScrollAnimation('slide-in-up')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider"></div>

        <div className="contact-content">
          <div className="contact-info stagger-item">
            <h3>Let's Connect</h3>
            <p>Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible.</p>
            
            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:your.email@example.com">your.email@example.com</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Your City, Country</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>

          <form className="contact-form stagger-item" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact