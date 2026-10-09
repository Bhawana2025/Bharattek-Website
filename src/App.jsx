import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import PortfolioPage from "./Pages/PortfolioPage";
import TechPage from "./Pages/TechPage";
import ContactPage from "./Pages/ContactPage";

import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;

      case "services":
        return <ServicesPage setCurrentPage={setCurrentPage} />;

      case "portfolio":
        return <PortfolioPage setCurrentPage={setCurrentPage} />;

      case "tech":
        return <TechPage setCurrentPage={setCurrentPage} />;

      case "contact":
        return <ContactPage setCurrentPage={setCurrentPage} />;

      case "privacy":
        return <PrivacyPolicy />;

      case "terms":
        return <TermsOfService/>;

      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {renderPage()}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;