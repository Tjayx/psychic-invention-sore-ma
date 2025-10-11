import "./index.css";
import Hero from "../../components/Hero";
import AboutUs from "../../components/About-Us";
import OurServices from "../../components/Our-Services";
import vaibImage from "../../assets/vaib_company.png";
//import shellImage from "../../assets/shell.png";
//import lngImage from "../../assets/nigeria-lng.jpg";
import btechImage from "../../assets/btech_company.png";
import { motion } from "motion/react";

const index = () => {
  const clientsImages = [btechImage, vaibImage];

  return (
    <div className="landing-page">
      <Hero />
      <AboutUs />
      <OurServices />

      {/* Our clients */}
      <motion.div className="our-clients">
        <h4>Our Partners</h4>
        <h2>Some of our Partners</h2>
        <div>
          {clientsImages.map((image, index) => (
            <motion.img
              src={image}
              alt=""
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: [1.5, 1] }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default index;
