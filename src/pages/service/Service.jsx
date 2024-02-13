import "./Service.css"
import React from 'react'

const ServicePage = () => {
  return (
    <main className="service-page">
      <div className="service-heading">
        <h3>why choose us?</h3>
        {/* <h2>FEATURES</h2> */}
        <h2>OUR FEATURES & SERVICES</h2>
        <p>--------------<i class="fa-solid fa-star"></i>--------------</p>
      </div>

      <div className="service-container">
        <div className="service-card">
          <i className="fa-solid fa-hotel"></i>
          <h2>PG RENTAL</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione illo velit voluptatibus impedit at sed quod id quos, eveniet iste.</p>
        </div>

        <div className="service-card">
          <i className="fa-solid fa-motorcycle"></i>
          <h2>BIKE RENTAL</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione illo velit voluptatibus impedit at sed quod id quos, eveniet iste.</p>
        </div>
      </div>
    </main>
  )
}

export default ServicePage