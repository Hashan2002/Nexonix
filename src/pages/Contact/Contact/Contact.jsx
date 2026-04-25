import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! I will get back to you soon.');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <header className="contact-header">
          <p className="subheader">Get In Touch</p>
          <h2>Let's Work Together on Your Next Project</h2>
        </header>

        <div className="contact-content">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <div className="icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Kurunegala, Sri Lanka</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>pahan@nexonix.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">📱</div>
              <div>
                <h4>Phone</h4>
                <p>+94 7X XXX XXXX</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" name="name" placeholder="Your Name" 
                onChange={handleChange} required 
              />
              <input 
                type="email" name="email" placeholder="Your Email" 
                onChange={handleChange} required 
              />
            </div>
            <input 
              type="text" name="subject" placeholder="Subject" 
              onChange={handleChange} required 
            />
            <textarea 
              name="message" rows="5" placeholder="Your Message" 
              onChange={handleChange} required
            ></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;