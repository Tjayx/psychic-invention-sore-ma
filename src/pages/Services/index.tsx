import "./index.css";
import ServicesHero from "../../components/Services-Hero";
import haulageImage from "../../assets/haulage.jpg";
import supplyImage from "../../assets/supply.jpg";
import consultancy from "../../assets/consultancy.jpg";
import fabricationImage from "../../assets/fabrication.webp";
import installationImage from "../../assets/installation.webp";
import ServiceCard, {
  type ServiceCardProps,
} from "../../components/Services-Card";
import { motion } from "motion/react";

const index = () => {
  const ourServices: ServiceCardProps[] = [
    {
      content:
        "We ensure the safe, efficient, and regulation-compliant transportation of refined petroleum products and gas using modern, high-standard haulage solutions.",
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
    {
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
    },
  ];

  return (
    <div className="services">
      <ServicesHero />

      <motion.div
        className="what-we-do"
        animate={{ y: [100, 0], opacity: [0, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h2>What we do</h2>
        <p className="we-offer">
          We offer professional engineering, procurement, construction,
          installation (EPCI), marine and logistics services.
        </p>

        <div className="flex flex-col items-center">
          <motion.div
            className="our-services-1"
            animate={{ y: [100, 0], opacity: [0, 1] }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1.5,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
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
            transition={{
              duration: 1.5,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
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
        </div>
      </motion.div>
    </div>
  );
};

export default index;
