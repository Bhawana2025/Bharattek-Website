import Bharatteklogo from "../Assets/Bharatteklogo.png";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Company Overview", page: "home" },
  { label: "Engineering & Growth", page: "services" },
  { label: "Case Studies", page: "portfolio" },
  { label: "Architecture & Stack", page: "tech" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1HVWyKdRuT/?mibextid=wwXIfr",
    hover: "hover:bg-blue-600 hover:border-blue-600",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/bharat_tek?s=11",
    hover: "hover:bg-slate-900 hover:border-slate-900",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bharat.tek?stkn=MWZmbmZ2NjdkYnlqbQ%3D%3D&utm_source=qr",
    hover: "hover:bg-orange-500 hover:border-orange-500",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

function Footer({ setCurrentPage }) {
  return (
    <footer className="relative bg-linear-to-b from-white to-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-8">

        {/* Columns, with the brand wordmark centred behind them */}
        <div className="relative mb-8">
          <p className="ft-wordmark absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black tracking-tighter leading-none whitespace-nowrap text-[17vw] lg:text-[12rem] select-none pointer-events-none" aria-hidden="true">
            BHARATTEK
          </p>

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* Brand */}
            <div className="md:col-span-5 space-y-4">
              <button onClick={() => setCurrentPage("home")} className="flex items-center gap-3.5 group cursor-pointer" aria-label="BharatTek home">
                <span className="w-11 h-11 bg-white rounded-xl shadow-sm border border-slate-200/60 flex items-center justify-center overflow-hidden group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300">
                  <img src={Bharatteklogo} alt="BharatTek logo" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500" />
                </span>
                <span className="flex flex-col justify-center text-left">
                  <span className="text-[21px] font-black tracking-wider leading-none mb-0.5 w-max text-transparent bg-clip-text bg-linear-to-r from-[#F97316] via-[#2563EB] to-[#16A34A]">
                    BHARATTEK
                  </span>
                  <span className="text-[0.55rem] font-bold text-slate-700 uppercase leading-none tracking-widest">
                    Bringing Innovation to Life
                  </span>
                </span>
              </button>

              <p className="text-slate-700 leading-relaxed text-sm font-semibold max-w-sm">
                Architecting the future of the Indian digital ecosystem. We build
                hyper-local solutions, robust B2B platforms, and drive
                exponential growth.
              </p>

              <div className="flex items-center gap-2.5 pt-1">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm ${social.hover}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <p className="text-[11px] font-black tracking-[0.25em] text-slate-600 uppercase mb-3">Navigation</p>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => setCurrentPage(link.page)}
                      className="group flex items-center text-sm font-bold text-slate-800 hover:text-slate-950 transition-colors cursor-pointer"
                    >
                      <span className="w-0 h-0.5 rounded-full bg-linear-to-r from-orange-500 to-blue-600 transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <p className="text-[11px] font-black tracking-[0.25em] text-slate-600 uppercase mb-3">Contact HQ</p>
              <div className="space-y-2.5">
                <a href="mailto:help@bharattek.com" className="group flex items-center gap-3.5">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <HiOutlineMail className="text-xl" />
                  </span>
                  <span>
                    <span className="block text-[9px] font-bold text-slate-600 uppercase tracking-widest">Email Us</span>
                    <span className="block text-sm font-bold text-slate-900 group-hover:text-orange-500 transition-colors">help@bharattek.com</span>
                  </span>
                </a>

                <a href="https://wa.me/919467873151" target="_blank" rel="noreferrer" className="group flex items-center gap-3.5">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-green-50 text-[#25D366] flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                    <FaWhatsapp className="text-xl" />
                  </span>
                  <span>
                    <span className="block text-[9px] font-bold text-slate-600 uppercase tracking-widest">WhatsApp Chat</span>
                    <span className="block text-sm font-bold text-slate-900 group-hover:text-green-600 transition-colors">+91 94678 73151</span>
                  </span>
                </a>

                <div className="flex items-center gap-3.5">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                    <FiMapPin className="text-lg" />
                  </span>
                  <span>
                    <span className="block text-[9px] font-bold text-slate-600 uppercase tracking-widest">Headquarters</span>
                    <span className="block text-xs font-bold text-slate-900 leading-snug">Near BMG Mall, Rewari, Haryana, India, PIN - 123401</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-slate-200/80 pt-6 pb-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm font-bold text-slate-900">
            © 2026 BharatTek. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm font-bold text-slate-900">
            {/* Privacy Policy Button */}
            <button
              onClick={() => setCurrentPage("privacy")}
              className="hover:text-orange-500 transition-colors cursor-pointer bg-transparent border-none p-0 text-sm font-bold text-slate-900"
            >
              Privacy Policy
            </button>

            <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>

            {/* Terms of Service Button */}
            <button
              onClick={() => setCurrentPage("terms")}
              className="hover:text-orange-500 transition-colors cursor-pointer bg-transparent border-none p-0 text-sm font-bold text-slate-900"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .ft-wordmark {
          background-image: linear-gradient(to right, #F97316, #2563EB, #16A34A);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          opacity: 0.07;
        }
      `}} />
    </footer>
  );
}

export default Footer;
