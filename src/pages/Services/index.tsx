import "./index.css";
import ServicesHero from "../../components/Services-Hero";
import haulageImage from "../../assets/haulage.jpg";
import supplyImage from "../../assets/supply.jpg";
import consultancy from "../../assets/easystayimg.png";
import gadgetsImage from "../../assets/electronics_gadgets.png";
import installationImage from "../../assets/landing-page-hero-bg-2.png";
import ServiceCard, {
  type ServiceCardProps,
} from "../../components/Services-Card";
import { motion } from "motion/react";
import Slider from "../../components/Slider";

const index = () => {
  const ourServices: ServiceCardProps[] = [
    {
      content:
        "We build robust trade and distribution networks that bring global consumer brands closer to African markets. Through efficient logistics, strategic partnerships, and a deep understanding of local demand, we ensure products reach consumers swiftly and reliably across the continent.",
      image: haulageImage,
      title: "FMCG & Distribution",
    },
    {
      content:
        "Our EPC division provides comprehensive infrastructure and industrial solutions that drive sustainable growth. By combining engineering expertise with cutting-edge technology, Sorema delivers high-quality, cost-effective projects that meet global standards and fuel economic development.",
      image: supplyImage,
      title: "Engineering, Procurement & Construction",
    },
    {
      content:
        "We are redefining African hospitality by creating exceptional lifestyle and premium service experiences. From luxury accommodations to innovative dining and leisure concepts, EasyStay Africa is dedicated to delivering comfort, elegance, and world-class service that reflect Africa’s warmth and diversity.",
      image: consultancy,
      title: "Hospitality",
    },
    {
      content:
        "Sorema Nig. Ltd is focused on bridging the technology gap by making modern gadgets and devices more accessible in emerging markets. We partner with leading global manufacturers to supply reliable, affordable, and innovative electronic products that enhance everyday life and productivity.",
      image: gadgetsImage,
      title: "Electronics & Gadgets",
    },
    {
      content:
        "Committed to powering Africa’s future, Sorema Renewable Energy delivers clean and sustainable energy solutions. Our projects focus on expanding access to affordable solar power, reducing carbon footprints, and supporting the continent’s transition toward a greener, energy-secure future.",
      image: installationImage,
      title: "Solar & Renewable Energy",
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
          installation (EPCI), distribution and hospitality services.
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
      <div className="our-products">
        <h3 className="text-[#6fa0cd] text-lg font-semibold">Our Services</h3>

        <Slider />
      </div>
    </div>
  );
};

export default index;
