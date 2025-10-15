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
          Sorema Group, founded in 2016, is a diversified African conglomerate 
          with interests in FMCG, hospitality, EPC, electronics & gadgets, and 
          renewable energy. Headquartered in Nigeria, we connect local markets 
          to global opportunities through innovation, partnerships, and operational 
          excellence.
          <br/>
          Driven by a mission to link Africa to the world, Sorema has built a reputation 
          for reliability, strategic growth, and sustainable impact across Africa & Europe. 
          With progressive footprint in Asia and middle east. 
          <br/>
          <br/>
          Our vision is to be a globally recognized African brand, shaping industries, 
          empowering communities, and delivering world class solutions that inspire 
          progress through strategic partnerships.
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
