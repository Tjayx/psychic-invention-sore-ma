import Button from "../Button";
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
          <h2>Sorema Limited</h2>
          <p>
            Sorema is a forward-thinking company dedicated to delivering
            top-tier solutions across multiple sectors. With a steadfast
            commitment to excellence, innovation, and integrity, we ensure that
            our clients receive industry-leading services tailored to their
            specific needs. Our expertise spans a diverse range of fields,
            making us a trusted partner in the industry.
            <br />
            <br />
            Our operations are designed to be environmentally friendly and
            socially responsible, ensuring a sustainable future for generations
            to come.
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

        <Button
          content={"See Company Brochure"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </motion.div>
    </div>
  );
};

export default index;
