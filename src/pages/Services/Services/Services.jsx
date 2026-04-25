import React from 'react';
import './Services.css';

function Services() {
  // Oya danna balaporoththu wena services methana template ekak widihata thiyenawa.
  const servicesList = [
    {
      icon: '🌐', // Meka SVG icon ekakin modify karanna (pahatha note eka balanna)
      title: 'Web Design & Development',
      description: 'Create stunning, responsive websites tailored to your brand.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Craft intuitive interfaces for an unparalleled user experience.'
    },
    {
      icon: '📊',
      title: 'Digital Marketing',
      description: 'Boost your online presence with data-driven marketing strategies.'
    },
    {
      icon: '⚙️',
      title: 'Software Development',
      description: 'Build robust, scalable software solutions for complex needs.'
    },
    {
      icon: '🚀',
      title: 'Brand Identity',
      description: 'Define your unique brand voice and visual presence.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Reach users on the go with custom iOS and Android apps.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Wireframe eke uda text section eka */}
        <header className="services-header">
          <p className="subheader">What I Offer</p>
          <h2>Apple's latest technology for modern solutions.</h2>
        </header>

        {/* Wireframe eke card grid structure eka */}
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-inner">
                <div className="service-icon-container">
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                {/* Oona nam 'Learn More' wage button ekak danna puluwan */}
                {/* <button className="service-cta">Learn More &rarr;</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;