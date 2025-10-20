import ContactUsHero from "../../components/Contact-Us-Hero";
import "./index.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import Iframe from "../../components/Iframe";
import { motion } from "motion/react";

const index = () => {
  const socialIcons = [
    { element: <FaFacebookF />, background: "bg-[#2D4373]" },
    { element: <FaTwitter />, background: "bg-[#0087BA]" },
    { element: <FaInstagram />, background: "bg-[#CB2027]" },
  ];

  return (
    <div className="contact-us-page">
      <ContactUsHero />
      <div className="contacts-us-components">
        <motion.div
          animate={{ y: [100, 0], opacity: [0, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <h4>Let's Talk!</h4>
          <h2>Contact Sorema Group</h2>
          <div className="address">
            <h3>Office Address</h3>
            <p>
              283a, Akin Olugbade Street Off Adeola Odeku Victoria Island,
              Lagos, Nigeria.
            </p>
          </div>
          <div className="contact-infos">
            <div>
              <h3>Telephone number</h3>
              <p>+234 706 874 9844</p>
            </div>
            <div>
              <h3>Email address</h3>
              <p>info@soremagroup.com</p>
            </div>
          </div>
          <div className="follow-us">
            <h3>Follow Us</h3>
            <div className="socials">
              {socialIcons.map(({ background, element }, index) => (
                <p
                  key={index}
                  className={`${background} rounded-[50%] p-3 text-white`}
                >
                  {element}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="form"
          animate={{ y: [100, 0], opacity: [0, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5, delay: 0.7, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <h5>Contact Us</h5>
          <form action="">
            <div className="field">
              <label htmlFor="">
                Name<span className="text-red-500">*</span>
              </label>
              <input type="text" name="" id="" className="input-field" />
            </div>
            <div className="field">
              <label htmlFor="">
                Email<span className="text-red-500">*</span>
              </label>
              <input type="text" name="" id="" className="input-field" />
            </div>
            <div className="field">
              <label htmlFor="">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea name="" id="" rows={5} className="input-field" />
            </div>

            <button>Submit</button>
          </form>
        </motion.div>
      </div>
      <Iframe />
    </div>
  );
};

export default index;
