import { motion } from "motion/react";
import AboutSorema from "../../components/About-Sorema";
import AboutUsHero from "../../components/About-Us-Hero";
import "./index.css";

const index = () => {
  const coreValues = [
    {
      title: "Ambition",
      content:
        "We are driven by our vision of the future, how things could be. It inspires us, motivates us and keeps us focused on what really counts, working together to transform goals into reality.",
    },
    {
      title: "Respect",
      content:
        "We are committed to treating employees, customers and other stakeholders with respect and courtesy in a way that creats a pleasant work environment for everyone.",
    },
    {
      title: "Integrity",
      content:
        "Honesty, trust and integrity are at the heart of everything we say and do. We keep our promises.",
    },
    {
      title: "Innovation",
      content:
        "Creating new ideas and probatively delivering our services. Services, we are dependable and we always strive towards exceptional service delivery.",
    },
    {
      title: "Excellence",
      content:
        "The ability to consistently meet, manage and exceed stakeholders’ expectation.",
    },
  ];

  const managementTeam = [
    {
      jobTitle: "Managing Director/CEO",
      name: "Richardson Arigbodi",
      experience:
        "Richardson is currently the managing director and chief executive officer of Nemera oil and gas limited. He is responsible for the company business and strategy. He has over 23 years working experience with the finest financial institutions in Nigeria and holds a bachelors degree in econmics from the University of Benin.",
    },
    {
      jobTitle: "DMD/COO",
      name: "Ikponmwosa Oronsaye",
      experience:
        "Ikponwosa is the deputy managing director and executive director of operations at Nemera oil and gas limited. He oversees the implementation of the company’s business strategy, planning, finance and administration. He holds a BSc in Economics and Statistics from the University of Benin and an MBA with a supply chain management concentration from the University of Rhode Island.",
    },
    {
      jobTitle: "Director",
      name: "Tejumola Arigbodi",
      experience:
        "Tejumola brings to bear over a decade experience in entrepreneurial engagements and high level trainings. Tejumola holds a bachelors degree in English language from the University of Lagos and has attended several international trainings relevant to the company’s business to sharpen her entrepreneurial skills.",
    },
  ];

  return (
    <div className="w-screen">
      <AboutUsHero />
      <AboutSorema />

      {/* Core values */}
      <motion.div
        className="core-values"
        animate={{ y: [100, 0], opacity: [0, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h2>Our Core Values</h2>
        <div className="values">
          {coreValues.map(({ content, title }, index) => (
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

      {/* Management team */}
      <motion.div
        className="management-team"
        animate={{ y: [100, 0], opacity: [0, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h2>Our Management Team</h2>
        <div className="team">
          {managementTeam.map(({ experience, jobTitle, name }, index) => (
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
              <h4>{jobTitle}</h4>
              <h3>{name}</h3>
              <p>{experience}</p>
              <span></span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default index;
