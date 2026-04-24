import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null); // Menu eka eliya click kireema track karanna

  useEffect(() => {
    // Scroll detection for background change
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Active section detection using Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -150px 0px',
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    // Handle outside click to close menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container" ref={menuRef}>
        <div className="logo">
          NEXONIX<span className="dot">.</span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" className={`nav-cta ${activeSection === 'contact' ? 'active-cta' : ''}`} onClick={() => setMenuOpen(false)}>Contact Us</a></li>
        </ul>

        {/* Hamburger using <button> for Accessibility */}
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;