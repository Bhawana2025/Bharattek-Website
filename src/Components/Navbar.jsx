import React, { useState } from "react";
import Bharatteklogo from "../Assets/Bharatteklogo.png";

function Navbar({ currentPage, setCurrentPage }) {
  // यह स्टेट ट्रैक करेगी कि मोबाइल मेनू खुला है या बंद
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="glass fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => {
            setCurrentPage("home");
            setIsMobileMenuOpen(false);
          }}
        >
          <div className="flex items-center gap-3.5 group">
            
            {/* Logo */}
            <div className="w-11 h-11 bg-white rounded-xl shadow-sm border border-slate-200/60 flex items-center justify-center overflow-hidden group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300">
              <img
                src={Bharatteklogo} // इम्पोर्टेड वेरिएबल का इस्तेमाल किया
                alt="BharatTek Logo"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Brand */}
            <div className="flex flex-col justify-center">
              <span className="text-[21px] font-black tracking-wider leading-none mb-0.5 w-max text-transparent bg-clip-text bg-linear-to-r from-[#F97316] via-[#2563EB] to-[#16A34A] drop-shadow-sm">
                BHARATTEK
              </span>

              <span className="text-[0.50rem] font-bold text-slate-600 uppercase leading-none tracking-widest">
                Bringing Innovation to Life
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-10 font-black text-[14px] tracking-widest uppercase">
          {["Home", "Services", "Portfolio", "Tech", "Contact"].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page.toLowerCase())}
              className={`relative py-2 transition-all duration-300 hover:text-orange-600 ${
                currentPage === page.toLowerCase()
                  ? "text-green-600"
                  : "text-slate-800"
              }`}
            >
              {page}

              {currentPage === page.toLowerCase() && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-green-600 rounded-full animate-in fade-in zoom-in duration-300"></span>
              )}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <button
          onClick={() => setCurrentPage("contact")}
          className="hidden md:block px-8 py-2.5 bg-slate-900 text-white rounded-full font-bold text-[13px] uppercase tracking-widest hover:bg-green-600 transition-all duration-300 shadow-xl hover:shadow-green-600/30 transform hover:-translate-y-0.5"
        >
          Start a Project
        </button>

        {/* Mobile Menu Toggle Button (Hamburger Icon) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-800 hover:text-orange-600 transition-colors focus:outline-none"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              // Close (X) Icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger Icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl flex flex-col py-6 px-6 gap-6 animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-4 font-black text-[15px] tracking-widest uppercase">
            {["Home", "Services", "Portfolio", "Tech", "Contact"].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page.toLowerCase());
                  setIsMobileMenuOpen(false); // लिंक पर क्लिक करते ही मेनू बंद हो जाएगा
                }}
                className={`text-left pb-2 border-b border-slate-100 transition-all duration-300 ${
                  currentPage === page.toLowerCase()
                    ? "text-green-600"
                    : "text-slate-800"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => {
              setCurrentPage("contact");
              setIsMobileMenuOpen(false);
            }}
            className="w-full px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold text-[13px] uppercase tracking-widest hover:bg-green-600 transition-all duration-300 shadow-lg"
          >
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;