import { Link } from "react-router-dom";
import "./index.css";

const index = () => {
  return (
    <div className="hero h-[600px]">
      <div className="hero-components">
        <h1>WE ARE SOREMA LIMITED.</h1>
        <p>Leading Nigeria in energy exploration.</p>
        <div className="buttons">
          <Link to={"/services"} className="services">
            Our Services
          </Link>
          <Link to={"/about-us"} className="about-us">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
