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
        "Dr. Efosa Israel-Agbonkonkon Ogbeide is an entrepreneur and global business leader with nearly two decades of experience in FMCG, brand development, marketing, distribution, hospitality, EPC, electronics, and renewable energy. Widely recognized as an Innovation Champion, Efosa is respected for his ability to launch and scale global brands across Africa, develop consumer-centric strategies, and position African enterprises on the global stage.",
      image: efosaImg,
    },
    {
      jobTitle: "Director",
      name: "Ewemade Ogbeide",
      experience:
        "Ewemade brings to bear over a decade of experience in entrepreneurial engagements and high-level trainings. She holds a bachelor's degree in English Language from the University of Lagos and has attended several international trainings relevant to the company’s business to sharpen her entrepreneurial skills.",
      image: ewemadeImg,
    },
    {
      jobTitle: "COO",
      name: "Saikat Ganguly",
      experience:
        "Saikat Ganguly is a results-driven professional with over two decades of diverse experience across FMCG, automotive, IT, and education sectors. Skilled in business strategy, P&L management, sales and marketing leadership, brand management, operations, and channel development, he has successfully led business growth and transformation across multiple organizations.",
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
