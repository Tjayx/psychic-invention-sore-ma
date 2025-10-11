import ServiceCard, { type ServiceCardProps } from "../Services-Card";
import "./index.css";
import haulageImage from "../../assets/haulage.jpg";
import supplyImage from "../../assets/supply.jpg";
import consultancy from "../../assets/consultancy.jpg";
//import fabricationImage from "../../assets/fabrication.webp";
//import installationImage from "../../assets/installation.webp";
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
        "We specialize in the safe and efficient transportation of refined petroleum products, ensuring timely delivery and compliance withindustry regulations.",
      image: haulageImage,
      title: "Haulage",
    },
    {
      content:
        "We supply high-quality industrial components, including valves, nozzles, expanders, flanges, seals, O-rings, bolts, and nuts, ensuring seamless operations and long-term performance.",
      image: supplyImage,
      title: "Equipment/Material Supply",
    },
    {
      content:
        "Our expert engineering consultancy services provide technical guidance and innovative solutions to optimize operational efficiency and project execution.",
      image: consultancy,
      title: "Technical Consultancy",
    },
    /*{
      content:
        " We specialize in minor civil and mechanical works, offering rehabilitation, upgrade, and fabrication services to enhance structural integrity and industrial efficiency.",
      image: fabricationImage,
      title: "Rehabilitation/ Upgrade/ Fabrication Works",
    },
    {
      content:
        "We deliver comprehensive civil installation and maintenance services, ensuring infrastructure sustainability and operational reliability",
      image: installationImage,
      title: "Installation And Maintenance",
    },*/
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
