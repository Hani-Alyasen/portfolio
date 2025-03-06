import React from 'react';

function Services() {
  return (
    <section id="services" className="services-section  ">
      <h2 className='container'>Our Services</h2>
      <div className="service-cards container">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Building fast, scalable, and responsive websites with a focus on performance and user experience.</p>
        </div>
        <div className="service-card">
          <h3>Mobile App Development</h3>
          <p>Designing seamless, user-friendly mobile apps for both Android and iOS platforms to expand your reach.</p>
        </div>
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>Creating beautiful and intuitive designs that prioritize usability and deliver exceptional experiences.</p>
        </div>
        <div className="service-card">
          <h3>Cloud Solutions</h3>
          <p>Leveraging cloud technology to enhance scalability, performance, and reliability for your business.</p>
        </div>
        <button></button>
      </div>
    </section>
  );
}

export default Services;
