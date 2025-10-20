import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import LandingPage from "./pages/Landing-Page";
import Footer from "./components/Footer";
import AboutUs from "./pages/About-Us";
import Services from "./pages/Services";
import ContactUs from "./pages/Contact-Us";
import ScrollToTop from "./components/Scroll-To-Top";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
