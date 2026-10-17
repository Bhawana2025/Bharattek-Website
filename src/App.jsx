// import { useEffect, useState } from "react";

// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// import HomePage from "./Pages/HomePage";
// import ServicesPage from "./Pages/ServicesPage";
// import PortfolioPage from "./Pages/PortfolioPage";
// import TechPage from "./Pages/TechPage";
// import ContactPage from "./Pages/ContactPage";

// import PrivacyPolicy from "./Components/PrivacyPolicy";
// import TermsOfService from "./Components/TermsOfService";

// function App() {
//   const [currentPage, setCurrentPage] = useState("home");

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [currentPage]);

//   const renderPage = () => {
//     switch (currentPage) {
//       case "home":
//         return <HomePage setCurrentPage={setCurrentPage} />;

//       case "services":
//         return <ServicesPage setCurrentPage={setCurrentPage} />;

//       case "portfolio":
//         return <PortfolioPage setCurrentPage={setCurrentPage} />;

//       case "tech":
//         return <TechPage setCurrentPage={setCurrentPage} />;

//       case "contact":
//         return <ContactPage setCurrentPage={setCurrentPage} />;

//       case "privacy":
//         return <PrivacyPolicy />;

//       case "terms":
//         return <TermsOfService/>;

//       default:
//         return <HomePage setCurrentPage={setCurrentPage} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />

//       {renderPage()}

//       <Footer setCurrentPage={setCurrentPage} />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route ,useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import PortfolioPage from "./Pages/PortfolioPage";
import TechPage from "./Pages/TechPage";
import ContactPage from "./Pages/ContactPage";

import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService";
import AndriodPolicy from "./Components/AndriodPolicy";
import IosAppsPolicy from "./Components/IosAppsPolicy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/tech" element={<TechPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/AndroidPolicy" element={<AndriodPolicy />} />
            <Route path="/IosAppsPolicy" element={<IosAppsPolicy />} />
            <Route path="/Privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsOfService" element={<TermsOfService />} />
            {/* Fallback for unmatched routes */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;