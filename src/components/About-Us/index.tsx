import "./index.css";
import refinery2 from "../../assets/industry_one.png";
import refinery1 from "../../assets/industry_two.png";
import Button from "../Button";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const index = () => {

  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate("/about-us");
  };

  return (
    <div className="landing-about-us">
      <motion.div
        className="left-div"
        animate={{ x: [-100, 0], opacity: [0, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h4 className="text-[#6fa0cd] text-lg">About Us</h4>
        <h2 className="who-we-are">Who We Are</h2>
        <p className="text-[#787878]">
          Sorema is a forward-thinking company dedicated to delivering top-tier
          solutions across multiple sectors. With a steadfast commitment to
          excellence, innovation, and integrity, we ensure that our clients
          receive industry-leading services tailored to their specific needs.
          Our expertise spans a diverse range of fields, making us a trusted
          partner in the industry.
        </p>
        <Button
          content={"View more"}
          onClick={handleViewMoreClick}
        />
      </motion.div>
      <motion.div
        className="images"
        initial={{ scale: 0 }}
        animate={{ scale: [1.1, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <img src={refinery1} alt="" />
        <img src={refinery2} alt="" />
      </motion.div>
    </div>
  );
};

export default index;
