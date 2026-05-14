import { Instagram, MessageCircle, ArrowUpRight, Phone, Mail } from "lucide-react";
import LOGO_URL from "../assets/Shubh-Safar-Holidays-Logo-Without-Bg.png";

export function Footer() {
  return (
    <footer className="relative bg-[#0B3C5D] text-white pt-16 md:pt-24 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Grid Section */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-20 w-20 rounded-full bg-white  flex items-center justify-center">
                <img 
                  src={LOGO_URL} 
                  alt="Shubh Safar Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight">
                  Shubh Safar Holidays <span className="text-[#F4B400]">.</span>
                </span>
                {/* <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold mt-1">
                  Holidays
                </span> */}
              </div>
            </div>
            <p className="text-white/70 text-base leading-relaxed max-w-xs">
              Crafting bespoke journeys across India and beyond for travellers
              who seek the extraordinary in every detail.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/shubhsafarholidays?igsh=b3V5dWg3cG4zNDY1"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F4B400] hover:border-[#F4B400] hover:text-[#0B3C5D] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/918852070596"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Destinations */}
          <div className="space-y-6">
            <p className="text-[#F4B400] text-xs font-bold uppercase tracking-[0.2em]">
              Destinations
            </p>
            <ul className="space-y-3 text-white/80 text-sm">
              {["Rajasthan", "Kerala", "Himalayas", "Varanasi"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#F4B400] transition-colors inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-6">
            <p className="text-[#F4B400] text-xs font-bold uppercase tracking-[0.2em]">
              Contact
            </p>
            <div className="space-y-4 text-sm text-white/80">
              <a href="tel:+918852070596" className="flex items-center gap-3 hover:text-[#F4B400] transition-colors">
                <Phone size={16} className="text-[#F4B400]" />
                +91 88520 70596
              </a>
              <a href="mailto:hello@subhsafarholidays.com" className="flex items-center gap-3 hover:text-[#F4B400] transition-colors">
                <Mail size={16} className="text-[#F4B400]" />
                hello@subhsafarholidays.com
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <p className="text-[#F4B400] text-xs font-bold uppercase tracking-[0.2em]">
              Newsletter
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Receive curated seasonal highlights from the heart of India.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm outline-none focus:border-[#F4B400] transition-colors placeholder:text-white/30"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[#F4B400] hover:scale-110 transition-transform"
              >
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Legal & Credits */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-center md:text-left font-medium uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} Shubh Safar Holidays • Private Travel
            Management
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-[10px] font-medium uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-[#F4B400] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#F4B400] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F4B400] transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Large Aesthetic Background Text */}
      <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none select-none hidden sm:block">
        <h2 className="text-[12vw] font-bold leading-none translate-y-1/3">
          SHUBH SAFAR
        </h2>
      </div>
    </footer>
  );
}