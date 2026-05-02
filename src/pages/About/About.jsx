// About.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './About.css';

// ==================== DATA ====================
const stats = [
  { value: 5, label: 'Years Combined Experience', suffix: '+' },
  { value: 45, label: 'Projects Completed', suffix: '+' },
  { value: 25, label: 'Clients Served', suffix: '+' },
  { value: 5, label: 'Countries Reached', suffix: '' },
];

const techStack = [
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 88 },
  { name: 'Node.js', level: 82 },
  { name: 'Figma', level: 92 },
  { name: 'TypeScript', level: 85 },
  { name: 'Python', level: 78 },
];

const highlights = [
  {
    id: 'teamwork',
    icon: '🤝',
    title: 'Teamwork First',
    text: 'We collaborate closely to deliver high-quality, scalable digital solutions that exceed expectations.',
  },
  {
    id: 'process',
    icon: '⚡',
    title: 'Agile Process',
    text: 'We plan, design, and develop with a clear strategy, ensuring transparency and timely delivery.',
  },
  {
    id: 'growth',
    icon: '🌱',
    title: 'Continuous Growth',
    text: 'We constantly learn and improve, staying ahead with modern technologies and best practices.',
  },
];

const teamMembers = [
  { initial: 'A', name: 'Alex Rivera', role: 'Full-Stack Architect' },
  { initial: 'M', name: 'Morgan Chen', role: 'Creative Technologist' },
];

// ==================== ANIMATED BAR COMPONENT ====================
const AnimatedBar = ({ level, animate }) => {
  return (
    <div className="skill-bar-track">
      <div
        className="skill-bar-fill"
        style={{ width: animate ? `${level}%` : '0%' }}
      />
    </div>
  );
};

// ==================== COUNTER COMPONENT ====================
const AnimatedCounter = ({ targetValue, suffix, duration = 1200 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;
    const startValue = 0;
    const endValue = targetValue;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, targetValue, duration]);

  return (
    <span ref={ref} className="stat-value">
      {count}{suffix}
    </span>
  );
};

// ==================== MAIN ABOUT COMPONENT ====================
function About() {
  const [hoveredHighlight, setHoveredHighlight] = useState(null);
  const [barsVisible, setBarsVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleViewProjects = useCallback(() => {
    setToastMessage('✨ Explore our featured projects! ✨');
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleContactUs = useCallback(() => {
    setToastMessage('📧 Reach out — let\'s build something great!');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-blob about-blob--1" />
      <div className="about-blob about-blob--2" />
      <div className="about-blob about-blob--3" />

      <div className="about-container">
        <header className="about-header">
          <div className="about-label">
            <span className="about-label-line" />
            <span>Who We Are</span>
          </div>

          <div className="about-title-row">
            <h2 className="about-heading">
              Building digital<br />products as a team.
            </h2>
            <p className="about-subtext">
              Two creators. One vision. We design and build modern digital experiences 
              that make a difference.
            </p>
          </div>
        </header>

        <div className="about-grid">
          {/* TEAM BIO CARD */}
          <div className="about-card about-card--bio">
            <div className="about-sweep" />
            <div className="about-watermark">TEAM</div>
            <div className="about-card-inner">
              <div className="bio-team">
                {teamMembers.map((member, idx) => (
                  <div className="bio-member" key={idx}>
                    <div className="bio-avatar">
                      <div className="bio-avatar-ring" />
                      <div className="bio-avatar-img">
                        <div className="bio-avatar-placeholder">{member.initial}</div>
                      </div>
                    </div>
                    <span className="bio-member-name">{member.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>

              <div className="bio-meta">
                <h3 className="bio-name">
                  {teamMembers.map(m => m.name.split(' ')[0]).join(' & ')}
                </h3>
                <span className="bio-role">
                  {teamMembers.map(m => m.role).join(' + ')}
                </span>
                <div className="bio-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#00c9a7" strokeWidth="1.5" fill="none"/>
                    <circle cx="12" cy="9" r="2.5" stroke="#00c9a7" strokeWidth="1.5" fill="none"/>
                  </svg>
                  Colombo, Sri Lanka
                </div>
              </div>

              <div className="bio-body">
                <p>
                  We are a passionate duo focused on building{' '}
                  <span className="bio-highlight">impactful digital solutions</span> that solve real problems.
                </p>
                <p>
                  Our strength lies in combining development and design to create{' '}
                  <span className="bio-highlight">fast, scalable, and user-friendly products</span> 
                  that users love.
                </p>
              </div>

              <div className="bio-cta-row">
                <button className="bio-cta bio-cta--primary" onClick={handleViewProjects}>
                  View Projects →
                </button>
                <button className="bio-cta bio-cta--ghost" onClick={handleContactUs}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* STATS CARD */}
          <div className="about-card about-card--stats">
            <div className="about-sweep" />
            <div className="about-card-inner">
              <p className="about-card-label">Our Impact</p>
              <div className="stats-grid">
                {stats.map((stat, idx) => (
                  <div className="stat-item" key={idx}>
                    <AnimatedCounter targetValue={stat.value} suffix={stat.suffix} duration={1200} />
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SKILLS CARD */}
          <div className="about-card about-card--skills" ref={skillsRef}>
            <div className="about-sweep" />
            <div className="about-card-inner">
              <p className="about-card-label">Tech Stack & Skills</p>
              <div className="skills-list">
                {techStack.map((skill) => (
                  <div className="skill-row" key={skill.name}>
                    <div className="skill-row-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <AnimatedBar level={skill.level} animate={barsVisible} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HIGHLIGHT CARDS */}
          {highlights.map((highlight, index) => (
            <div
              key={highlight.id}
              className={`about-card about-card--highlight ${
                hoveredHighlight === index ? 'about-card--active' : ''
              }`}
              onMouseEnter={() => setHoveredHighlight(index)}
              onMouseLeave={() => setHoveredHighlight(null)}
            >
              <div className="about-sweep" />
              <div className="about-card-inner">
                <div className="highlight-icon-box">{highlight.icon}</div>
                <h4 className="highlight-title">{highlight.title}</h4>
                <p className="highlight-text">{highlight.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {toastMessage && (
        <div className="toast-notification">
          {toastMessage}
        </div>
      )}
    </section>
  );
}

export default About;