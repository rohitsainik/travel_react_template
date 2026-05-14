import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import LOGO_URL from "../assets/Shubh-Safar-Holidays-Logo-Without-Bg.png"; 

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experiences", href: "#packages" },
  { label: "Philosophy", href: "#services" },
  { label: "The Studio", href: "#about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll state for header styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // STOPS BACKGROUND SCROLL: This is critical for mobile menus
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
          
          {/* BRAND IDENTITY */}
          <a href="#home" className="flex items-center gap-3 group relative z-[110]">
            <img 
              src={LOGO_URL} 
              alt="Shubh Safar Holidays" 
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-[#0B3C5D] leading-tight">
                Shubh Safar<span className="hidden sm:inline"> Holidays</span><span className="text-[#F4B400]">.</span>
              </span>
              {/* <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.22em] text-[#6B7280] font-bold leading-none mt-0.5">
                Curated Journeys
              </span> */}
            </div>
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

      {/* MOBILE MENU OVERLAY - Fixed to Viewport */}
      <div
        className={`fixed inset-0 z-[90] bg-white transition-transform duration-500 ease-in-out lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ height: '100dvh' }} // Uses dynamic viewport height
      >
        <div className="flex flex-col h-full pt-32 pb-10 px-8">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-6">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-2xl font-bold text-[#0B3C5D] border-b border-gray-50 pb-4 transition-all duration-500 delay-[${idx * 100}ms] ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Bottom Actions Area */}
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
              <div className="text-base font-bold text-[#0B3C5D] space-y-1">
                <a 
      href="tel:+918852070596" 
      className="hover:text-[#F4B400] transition-colors inline-block w-fit"
    >
      +91 88520 70596
    </a>
    
    {/* Email Link */}
    <a 
      href="mailto:hello@subhsafarholidays.com" 
      className="hover:text-[#F4B400] transition-colors inline-block w-fit"
    >
      hello@subhsafarholidays.com
    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}