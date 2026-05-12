import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import LOGO_URL from "../assets/Shubh-Safar-Holidays-Logo-Without-Bg.png"; // Ensure you have a logo image in this path or update accordingly

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experiences", href: "#packages" },
  { label: "Philosophy", href: "#services" },
  { label: "The Studio", href: "#about" },
];

// Replace this URL with your actual logo path (e.g., "/assets/logo.png")


export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm"
          : "bg-[#F9FAFB] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* BRAND LOGO REPLACEMENT */}
        <a href="#home" className="flex items-center group">
          <img 
            src={LOGO_URL} 
            alt="Subh Safar Holidays" 
            className="h-22 w-22 object-cover transition-transform duration-300 group-hover:scale-105"
            // If the logo is missing, fallback to a simple styled text 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback Text (Hidden if logo loads) */}
          <div className="hidden flex-col leading-none">
            <span className="text-lg font-bold text-[#0B3C5D]">Subh Safar</span>
            <span className="text-[10px] uppercase tracking-widest text-[#6B7280]">Holidays</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-[#6B7280] md:flex">
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

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+9198XXXXXXXX"
            className="hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0B3C5D] hover:text-[#F4B400] transition-colors lg:flex mr-4"
          >
            <PhoneCall size={14} className="text-[#F4B400]" />
            Inquiry
          </a>

          <a
            href="#contact"
            className="bg-[#0B3C5D] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#F4B400] hover:text-[#0B3C5D] transition-all shadow-md active:scale-95"
          >
            Plan Your Trip
          </a>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full p-2 text-[#0B3C5D] md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 top-[72px] bg-white z-50 md:hidden p-8 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-poppins font-bold text-[#0B3C5D] flex items-center justify-between group"
              >
                {item.label}
                <div className="h-px flex-1 bg-gray-100 mx-4 group-hover:bg-[#F4B400] transition-colors" />
              </a>
            ))}
            <div className="pt-8 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">
                Connect with us
              </p>
              <p className="text-lg font-bold text-[#0B3C5D]">
                +91 98XX-XXXXXX
              </p>
              <p className="text-lg font-bold text-[#0B3C5D]">
                hello@subhsafarholidays.com
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}