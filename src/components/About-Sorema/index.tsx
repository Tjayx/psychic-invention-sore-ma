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
            with business interests spanning Fast-Moving Consumer Goods (FMCG), 
            hospitality, engineering, procurement & construction (EPC), electronics 
            & gadgets, and renewable energy solutions.
            <br />
            The Group’s origins trace back to Sorema Nigeria Limited, its pioneering subsidiary
            and foundation entity, which continues to serve as the Group’s core operational 
            and technical arm, driving major EPC and infrastructure projects across Africa.
            Headquartered in Nigeria, Sorema connects local markets to global opportunities 
            through innovation, strategic partnerships, and operational excellence. 
            Over the years, the Group has built a solid reputation for reliability, growth, 
            and sustainable impact across Africa and Europe, with a growing footprint in Asia 
            and the Middle East.
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
            To be a globally recognized African brand, shaping industries, empowering 
            communities, and delivering world-class solutions that inspire progress 
            through collaboration and sustainable enterprise.
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
