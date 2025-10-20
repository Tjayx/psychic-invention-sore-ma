import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

// Import hero background images
import heroBg1 from "../../assets/landing-page-hero-bg.png";
import heroBg2 from "../../assets/landing-page-hero-bg-2.png";
import heroBg3 from "../../assets/landing-page-hero-bg-3.png";
import heroBg4 from "../../assets/landing-page-hero-bg-4.png";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [heroBg1, heroBg2, heroBg3, heroBg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-bg ${currentImageIndex === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Hero Content */}
      <div className="hero-components">
        <h1>
          WE ARE,
          <br/>
          SOREMA GROUP LTD.
        </h1>
        <p>Driving global business through innovation and partnerships-with integrity and excellence.</p>
        <div className="buttons">
          <Link to="/our-services" className="services">
            Our Services
          </Link>
          <Link to="/about-us" className="about-us">
            About Us
          </Link>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="hero-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`indicator ${currentImageIndex === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;