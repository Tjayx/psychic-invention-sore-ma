import { motion } from "motion/react";
import AboutSorema from "../../components/About-Sorema";
import AboutUsHero from "../../components/About-Us-Hero";
import "./index.css";

// Import management team photos
import efosaImg from "../../assets/efosa-ogbeide.jpg";
import cooImg from "../../assets/coo-guy.jpg";
import ewemadeImg from "../../assets/ewemade-ogbeide.jpg";

const Index = () => {
  const coreValues = [
    {
      title: "Partnership",
      content: "building strong local and global collaborations.",
    },
    {
      title: "Integrity",
      content: "doing business with trust and transparency.",
    },
    {
      title: "Innovation",
      content: "staying ahead with bold, forward-thinking solutions.",
    },
    {
      title: "Excellence",
      content: "setting the highest standard in every venture we undertake.",
    },
  ];

  const managementTeam = [
    {
      jobTitle: "Founder/CEO",
      name: "Dr. Efosa Ogbeide",
      experience:
        "Dr. Efosa Israel-Agbonkonkon Ogbeide is an entrepreneur and global business leader with nearly two decades of experience in FMCG, brand development, marketing, distribution, hospitality, EPC, electronics, and renewable energy. Efosa holds a Bachelor’s degree in Business Administration from Igbinedion University, Okada, and a Master’s in International Business & Hospitality Management from the Swiss Hotel Management School, Leysin, Switzerland. Widely recognized as an Innovation Champion, Efosa is respected for his ability to launch and scale global brands across Africa, develop consumer-centric strategies, and position African enterprises on the global stage.",
      image: efosaImg,
    },
    {
      jobTitle: "Executive Director, IT & Operations",
      name: "Ewemade Agbonkonkon-Ogbeide",
      experience:
        "Ewemade Ogbeide is a results  driven technology and operations executive with expertise in data analytics, process optimization, and strategic management. At Sorema Group, she leads initiatives that enhance innovation, efficiency, and sustainable business growth. She holds a Master’s in Computer Science, a Bachelor’s in Statistics with Computer Science, and a Data Analytics certification from Udacity, with a passion for using data and technology to drive informed decision-making and organizational excellence.",
      image: ewemadeImg,
    },
    {
      jobTitle: "Chief Operating Officer",
      name: "Saikat Ganguly",
      experience:
        "Saikat Ganguly is a results-driven professional with over two decades of diverse experience across FMCG, automotive, IT, and education sectors. Skilled in business strategy, P&L management, sales and marketing leadership, brand management, operations, and channel development, he has successfully led business growth and transformation across multiple organizations. Saikat holds a B.Com degree from Calcutta University, along with a Diploma in Marketing & Sales Management and an iGNIIT certification from NIIT, Kolkata.",
      image: cooImg,
    },
  ];

  return (
    <div className="w-screen">
      <AboutUsHero />
      <AboutSorema />

      {/* Core Values */}
      <motion.div
        className="core-values"
        animate={{ y: [100, 0], opacity: [0, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h2>Our Core Values</h2>
        <div className="values">
          {coreValues.map(({ title, content }, index) => (
            <motion.div
              key={index}
              animate={{ y: [100, 0], opacity: [0, 1] }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 2,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <p>{title}</p>
              <span>{content}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Management Team */}
      <motion.div
        className="management-team"
        animate={{ y: [100, 0], opacity: [0, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h2>Our Management Team</h2>
        <div className="team">
          {managementTeam.map(
            ({ jobTitle, name, experience, image }, index) => (
              <motion.div
                key={index}
                className="member"
                animate={{ y: [100, 0], opacity: [0, 1] }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 2,
                  delay: 0.8,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <img src={image} alt={name} />
                <div className="member-info">
                  <h4>{jobTitle}</h4>
                  <h3>{name}</h3>
                  <p>{experience}</p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
