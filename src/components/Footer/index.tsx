import "./index.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/sorema-logo.png";
import { Link } from "react-router-dom";

const index = () => {
  const socialIcons = [<FaFacebookF />, <FaTwitter />, <FaInstagram />];

  const ourServices = [
    { title: "FMCG & Distribution", link: "/our-services#what-we-do" },
    { title: "Engineering, Procurement & Construction", link: "/our-services#what-we-do" },
    { title: "Hospitality", link: "/our-services#what-we-do" },
    { title: "Electronics & Gadgets", link: "/our-services#what-we-do" },
    { title: "Solar & Renewable Energy", link: "/our-services#what-we-do" },
  ];

  const quickLinks = [
    { title: "About Sorema", link: "/about-us" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  return (
    <div className="footer">
      <div className="footer-items">
        <div className="mt-3">
          <img src={logo} alt="" />
          <p className="statement">Providing innovative, high-quality and reliable solutions.</p>
        </div>

        <div className="item">
          <h3>Our Services</h3>
          <div>
            {ourServices.map(({ link, title }, index) => (
              <Link to={link} key={index}>
                {title}
              </Link>
            ))}
          </div>
        </div>

        <div className="item ml-[3em]">
          <h3>Quick Links</h3>
          <div>
            {quickLinks.map(({ link, title }, index) => (
              <Link to={link} key={index}>
                {title}
              </Link>
            ))}
          </div>
        </div>

        <div className="item">
          <h3>Contact Us</h3>
          <p className="address">
            283a, Akin Olugbade Street Off Adeola Odeku Victoria Island, Lagos,
            Nigeria
            <span className="text-[#4282bd]">+234 816 441 8810</span>
          </p>
        </div>
      </div>

      <div className="bottom-footer">
        <p className="copyrights">
          All rights reserved. © {new Date().getFullYear()} Sorema Group
          Limited.
        </p>

        <div className="socials">
          {socialIcons.map((icon, index) => (
            <p key={index}>{icon}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
