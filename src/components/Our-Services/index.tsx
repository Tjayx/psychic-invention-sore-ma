import ServiceCard, { type ServiceCardProps } from "../Services-Card";
import "./index.css";
import haulageImage from "../../assets/haulage.jpg";
import supplyImage from "../../assets/supply.jpg";
import consultancy from "../../assets/easystayimg.png";
import gadgetsImage from "../../assets/electronics_gadgets.png";
import installationImage from "../../assets/landing-page-hero-bg-2.png";
import Button from "../Button";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const index = () => {

  const navigate = useNavigate();

  const handleViewAllServicesClick = () => {
    navigate("/our-services");
  };

  const ourServices: ServiceCardProps[] = [
    {
      content:
        "",
      image: haulageImage,
      title: "FMCG & Distribution",
    },
    {
      content:
        "",
      image: supplyImage,
      title: "Engineering, Procurement & Construction",
    },
    {
      content:
        "",
      image: consultancy,
      title: "Hospitality",
    },
    {
      content:
        "",
      image: gadgetsImage,
      title: "Electronics & Gadgets",
    },
    {
      content:
        "",
      image: installationImage,
      title: "Solar & Renewable Energy",
    },
  ];

  return (
    <div className="w-screen bg-[#F3F3F3]">
      <motion.div
        className="landing-page-our-services"
        animate={{ y: [100, 0], opacity: [0, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h4>Our Services</h4>
        <h2>What We Do</h2>

        <motion.div
          className="our-services-1"
          animate={{ y: [100, 0], opacity: [0, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2, delay: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
        >
          {ourServices.slice(0, 3).map(({ content, image, title }, index) => (
            <ServiceCard
              image={image}
              title={title}
              content={content}
              key={index}
            />
          ))}
        </motion.div>

        <motion.div
          className="our-services-2"
          animate={{ y: [100, 0], opacity: [0, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2, delay: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
        >
          {ourServices.slice(3, 5).map(({ content, image, title }, index) => (
            <ServiceCard
              image={image}
              title={title}
              content={content}
              key={index}
            />
          ))}
        </motion.div>
        <Button
          content={"View all services"}
          onClick={handleViewAllServicesClick}
        />
      </motion.div>
    </div>
  );
};

export default index;
