import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import LOGO_URL from "../assets/Shubh-Safar-Holidays-Logo-Without-Bg.png"; 

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#packages" },
  { label: "Service", href: "#services" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-[100] w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md py-2 shadow-md"
            : "bg-[#F9FAFB] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* BRAND IDENTITY - Forced to Single Line */}
          <a href="#home" className="flex items-center gap-3 group relative z-[110] whitespace-nowrap">
            <img 
              src={LOGO_URL} 
              alt="Shubh Safar Holidays" 
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h1 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-[#0B3C5D] flex items-center">
              Shubh Safar Holidays<span className="text-[#F4B400] ml-0.5">.</span>
            </h1>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-[#6B7280]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative transition-colors hover:text-[#0B3C5D] group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F4B400] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+918852070596" className="flex items-center gap-2 text-xs font-bold text-[#0B3C5D]">
              <PhoneCall size={14} className="text-[#F4B400]" /> Enquiry
            </a>
            <a href="#contact" className="bg-[#0B3C5D] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#F4B400] hover:text-[#0B3C5D] transition-all shadow-md">
              Plan Your Trip
            </a>
          </div>

          {/* MOBILE TOGGLE & PHONE */}
          <div className="flex lg:hidden items-center gap-4 relative z-[110]">
            <a href="tel:+918852070596" className="text-[#0B3C5D] p-2">
              <PhoneCall size={20} />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-[#0B3C5D] transition-transform active:scale-90"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[90] bg-white transition-transform duration-500 ease-in-out lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ height: '100dvh' }}
      >
        <div className="flex flex-col h-full pt-32 pb-10 px-8">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-2xl font-bold text-[#0B3C5D] border-b border-gray-50 pb-4 transition-all duration-500 ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-8">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-[#0B3C5D] text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-transform"
            >
              Plan Your Trip
            </a>

            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280]">
                Contact the Studio
              </p>
              <div className="text-base font-bold text-[#0B3C5D] flex flex-col gap-1">
                <a href="tel:+918852070596" className="hover:text-[#F4B400] transition-colors w-fit">+91 88520 70596</a>
                <a href="mailto:bhuvan@shubhsafar.online" className="hover:text-[#F4B400] transition-colors w-fit text-sm">bhuvan@shubhsafar.online</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}