import React, { useState } from "react";
import "./index.css";

export interface ServiceCardProps {
  image: any;
  title: string;
  content?: string; // Short hover content for landing page
  description?: string; // Full description for services page
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  content, 
  image, 
  title, 
  description 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine which mode we're in
  const isLandingPageMode = content && !description;
  const isServicesPageMode = description;

  return (
    <div className="service-card">
      <div 
        className="service-card-image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={image} alt={title} />
        
        {/* Hover overlay for landing page mode */}
        {isLandingPageMode && (
          <div className={`service-card-overlay ${isHovered ? 'active' : ''}`}>
            <p className="service-card-overlay-content">{content}</p>
          </div>
        )}
      </div>

      <h3>{title}</h3>
      
      {/* Description for services page mode */}
      {isServicesPageMode && <p>{description}</p>}
    </div>
  );
};

export default ServiceCard;