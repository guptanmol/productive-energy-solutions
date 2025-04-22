import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./main components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import logo from "./images/logo.png";
import ServicesMain from "./pages/Services/ServicesMain";
import OnlineTraining from "./pages/Services/OnlineTraining";
import OnsiteTraining from "./pages/Services/OnsiteTraining";
import Consulting from "./pages/Services/Consulting";
import { Footer } from "./components/ui/footer"; // Adjust path as needed
import ScrollToTop from "./components/ScrollTop"

const footerProps = {
  logo: <img src={logo} alt="Logo" className="h-20 w-auto" />,
  socialLinks: [
    { href: "https://twitter.com", label: "Twitter", icon: <i className="fab fa-twitter" /> },
    { href: "https://github.com", label: "GitHub", icon: <i className="fab fa-github" /> },
  ],
  mainLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
  ],
  legalLinks: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
  copyright: {
    text: "Madison, Wisconsin",
    license: "info@productiveenergy.com",
  },
};


const App = () => {
  return (
    <Router>
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <ScrollToTop />
    <main className="flex-1 pt-16 px-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesMain />} />
        <Route path="/services/online-training" element={<OnlineTraining />} />
        <Route path="/services/onsite-training" element={<OnsiteTraining />} />
        <Route path="/services/consulting" element={<Consulting />} />
      </Routes>
    </main>

    <Footer {...footerProps} />
  </div>
</Router>

  );
};

export default App;
