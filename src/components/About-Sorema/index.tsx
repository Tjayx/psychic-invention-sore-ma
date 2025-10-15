//import Button from "../Button";
import trucksImage from "../../assets/trucks.png";
import "./index.css";
import { motion } from "motion/react";

const index = () => {
  return (
    <div className="about-sorema">
      <motion.div
        className="img-div"
        initial={{ scale: 0 }}
        animate={{ scale: [1.1, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <img src={trucksImage} alt="" />
      </motion.div>
      <motion.div
        className="about-company"
        animate={{ x: [-100, 0], opacity: [0, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h5>About Sorema</h5>

        <div>
          <h2>Sorema Group</h2>
          <p>
            Sorema Group, founded in 2016, is a diversified African conglomerate
            with operations across Fast-Moving Consumer Goods (FMCG), marketing, 
            sales and distribution, hospitality, EPC (Engineering, Procurement & 
            Construction), electronics & gadgets, and renewable energy solutions.
            <br />
            Since inception, the Group has built a reputation for bridging local 
            markets with global opportunities, successfully driving growth and 
            partnerships across Africa, Europe, Asia, and the Middle East. 
            Headquartered in Nigeria, Sorema is rapidly positioning itself as a 
            global player in international trade, brand development, infrastructure, 
            and sustainable solutions.
            <br />
            <br />
            At its core, Sorema Group is driven by a mission:
            To connect Africa to the world through innovation, 
            partnerships, and excellence in service delivery.
            <br />
            <br />
            Our Core Sectors
            <br />
            <br />
            FMCG & Distribution: Building strong trade networks for global consumer 
            brands across Africa.
            <br />
            Hospitality: Creating lifestyle and premium service experiences that 
            redefine African hospitality.
            <br />
            EPC (Engineering, Procurement & Construction): Delivering infrastructure 
            and industrial solutions that power growth.
            <br />
            Electronics & Gadgets: Expanding access to modern technology in emerging 
            markets.
            <br />
            Solar & Renewable Energy: Driving Africa’s energy transition with 
            sustainable, accessible power solutions.
          </p>
        </div>

        <div>
          <h4>Our Vision</h4>
          <p>
            To be a leading industry player recognized for excellence,
            innovation, and a commitment to sustainability, setting the
            benchmark for quality and service delivery
          </p>
        </div>
        <div>
          <h4>Our Mission</h4>
          <p>
            To provide innovative, high-quality, and reliable solutions across
            our service areas, ensuring customer satisfaction, operational
            efficiency, and sustainable growth.
          </p>
        </div>

        {/*<Button
          content={"See Company Brochure"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />*/}
      </motion.div>
    </div>
  );
};

export default index;
