import type React from "react";
import "./index.css";

export interface ServiceCardProps {
  image: any;
  title: string;
  content: string;
}

const index: React.FC<ServiceCardProps> = ({ content, image, title }) => {
  return (
    <div className="service-card">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default index;
