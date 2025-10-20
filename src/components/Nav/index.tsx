import "./index.css";
import logo from "../../assets/sorema-logo.png";
import { Link, useLocation } from "react-router-dom";
//import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdHomeRepairService } from "react-icons/md";
import { MdContactMail } from "react-icons/md";

const index = () => {
  const { pathname } = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowNavbar(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBarItems = [
    { title: "Home", to: "/", icon: <IoHomeOutline /> },
    { title: "About Us", to: "/about-us", icon: <IoNewspaperOutline /> },
    { title: "Services", to: "/our-services", icon: <MdHomeRepairService /> },
    { title: "Contact Us", to: "/contact-us", icon: <MdContactMail /> },
  ];

  return (
    <>
      <nav className="nav">
        <div className="left-nav">
          <img src={logo} alt="" />

          <div className="nav-items">
            {navBarItems.map(({ title, to }, index) => (
              <Link
                to={to}
                key={index}
                className={`nav-item hover:text-[#4282bd] ${
                  pathname === to ? "text-[#4282bd]" : "text-white"
                }`}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        {/*<IoSearch className="text-white" />*/}
      </nav>

      {/* Hidden navbar */}
      <nav
        className={`hidden-nav ${
          showNavbar
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="left-nav">
          <img src={logo} alt="" />

          <div className="nav-items">
            {navBarItems.map(({ title, to }, index) => (
              <Link
                to={to}
                key={index}
                className={`nav-item hover:text-[#4282bd] ${
                  pathname === to ? "text-[#4282bd]" : "text-black"
                }`}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        {/*<IoSearch className="text-black" />*/}
      </nav>

      {/* Menu Overlay */}
      <div
        className={`menu-overlay ${showSideBar ? "open" : ""}`}
        onClick={() => setShowSideBar(false)}
      ></div>

      {/* Mobile Nav */}
      <nav className="mobile-nav">
        <img src={logo} alt="" />
        <div>
          <RxHamburgerMenu onClick={() => setShowSideBar(true)} className="text-[28px] cursor-pointer" />
          {/*<IoSearch className="text-black" />*/}
        </div>
      </nav>

      {showSideBar && (
        <div className={`side-menu ${showSideBar ? "open" : ""}`}>
          <IoCloseSharp
            className={`absolute p-2 w-[40px] h-[40px] rounded-full close-button`}
            onClick={() => setShowSideBar(false)}
          />

          <div className="side-bar-items">
            {navBarItems.map(({ title, to, icon }, index) => (
              <Link
                to={to}
                key={index}
                className={`nav-item p-3 text-white rounded-xl flex gap-2 items-center ${
                  pathname === to ? " bg-[#4282bd] " : ""
                }`}
                onClick={() => setShowSideBar(false)}
              >
                {icon}
                {title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default index;
