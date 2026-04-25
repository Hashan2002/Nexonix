import React from 'react';
import './Services.css';

const servicesList = [
  {
    icon: '⬡',
    title: 'Web Design & Development',
    description: 'Pixel-perfect, responsive websites crafted with performance and purpose — built to convert visitors into clients.',
  },
  {
    icon: '◈',
    title: 'UI/UX Design',
    description: 'Intuitive interfaces grounded in user psychology. Every interaction is intentional, every flow frictionless.',
  },
  {
    icon: '◎',
    title: 'Digital Marketing',
    description: 'Data-driven strategies that amplify reach, build authority, and generate measurable results across channels.',
  },
  {
    icon: '⬢',
    title: 'Software Development',
    description: 'Scalable, maintainable software engineered for complexity — from MVPs to enterprise-grade systems.',
  },
  {
    icon: '△',
    title: 'Brand Identity',
    description: 'A brand is a story told consistently. We define your visual language, voice, and presence from the ground up.',
  },
  {
    icon: '◇',
    title: 'Mobile App Development',
    description: 'Cross-platform iOS and Android apps with native-grade performance and a design that users actually love.',
  },
];

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">

        <header className="services-header">
          <div className="services-header-left">
            <p className="subheader">What I Offer</p>
            <h2>Capabilities built for the modern web.</h2>
          </div>
          <div className="services-header-count" aria-hidden="true">06</div>
        </header>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-inner">
                <div className="service-icon-container">
                  <span className="service-icon">{service.icon}</span>
                </div>
                <p className="service-index">0{index + 1}</p>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <span className="service-arrow">
                  Learn more
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 13L13 3M13 3H7M13 3V9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;