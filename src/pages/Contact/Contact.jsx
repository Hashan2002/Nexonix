import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Message sent! I\'ll get back to you within 24 hours.');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <header className="contact-header">
          <p className="subheader">Get In Touch</p>
          <h2>Let's build something remarkable together.</h2>
        </header>

        <div className="contact-content">

          {/* ── Left: Contact Info ── */}
          <div className="contact-info">

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Location</h4>
                <p>Kurunegala, Sri Lanka</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <h4>Email</h4>
                <p>pahan@nexonix.com</p>
                 <p>hashan@nexonix.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-text">
                <h4>Phone</h4>
                <p>+94 7X XXX XXXX</p>
                <p>+94 7X XXX XXXX</p>
              </div>
            </div>

            <div className="availability-badge">
              <span className="badge-dot"></span>
              <span>Available for new projects</span>
            </div>

          </div>

          {/* ── Right: Contact Form ── */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <div className="form-field">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name" type="text" name="name"
                  placeholder="Pahan Silva"
                  onChange={handleChange} required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email" type="email" name="email"
                  placeholder="hello@example.com"
                  onChange={handleChange} required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject" type="text" name="subject"
                placeholder="What's this about?"
                onChange={handleChange} required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message" rows="5"
                placeholder="Tell me about your project..."
                onChange={handleChange} required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 13L13 3M13 3H7M13 3V9" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
