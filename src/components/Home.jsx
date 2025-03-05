import React from 'react';
import photo1 from "../assets/1.jpg"
import photo2 from "../assets/2.jpg"
import photo3 from "../assets/3.jpg"
import photo4 from "../assets/4.jpg"

function Home() {
  return (
    <section id="home" className="home-section py-5 text-light bg-dark">
      <div className="container text-center">
        <h1 className="display-4 text-uppercase mb-4">Welcome to the Future of Technology</h1>
        <p className="lead mb-4">
          Welcome to <strong> Quantum Core </strong>, where the boundaries of innovation are constantly being pushed forward. We are a modern, high-tech company driven by a passion for creating cutting-edge solutions that transform industries and empower businesses to thrive in the digital era.
        </p>
        <p className="lead mb-4">
          Whether it’s <strong>Artificial Intelligence</strong>, <strong>Blockchain</strong>, <strong>Cloud Computing</strong>, or <strong>Internet of Things (IoT)</strong>, we leverage the latest advancements to create smarter, faster, and more efficient products.
        </p>
        <p className="lead mb-4">
          Join us in exploring a world of limitless possibilities. Discover how we are pushing the envelope to make the world a smarter, more connected place.
        </p>
        <a href="#about" className="btn btn-primary btn-lg mt-4">Learn More</a>
      </div>

    
      <div className="container mt-5">
        <div className="row">
        
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-lg">
              <img src={photo1} alt="Tech Image 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Innovative Solutions</h5>
                <p className="card-text">Explore our innovative solutions that are shaping the future of technology.</p>
              </div>
            </div>
          </div>

          
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-lg">
              <img src={photo2} alt="Tech Image 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">AI-Powered Systems</h5>
                <p className="card-text">See how our AI-powered systems are transforming industries.</p>
              </div>
            </div>
          </div>

         
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-lg">
              <img src={photo3} alt="Tech Image 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Blockchain Innovation</h5>
                <p className="card-text">Discover the potential of blockchain technology in modern business.</p>
              </div>
            </div>
          </div>

          
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-lg">
              <img src={photo4} alt="Tech Image 4" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">IoT Connectivity</h5>
                <p className="card-text">See how IoT is enabling seamless connections and smarter living.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
