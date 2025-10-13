import { Link } from "react-router-dom";
import "./index.css";

const index = () => {
  return (
    <div className="hero h-[600px]">
      <div className="hero-components">
        <h1>WE ARE SOREMA NIGERIA LTD.</h1>
        <p>Providing innovative, high-quality and reliable solutions.</p>
        <div className="buttons">
          <Link to={"/our-services"} className="services">
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
