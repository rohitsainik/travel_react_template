import { Instagram, MessageCircle, Phone, Mail } from "lucide-react";
import LOGO_URL from "../assets/Shubh-Safar-Holidays-Logo-Without-Bg.png";

export function Footer() {
  return (
    <footer className="relative bg-[#0B3C5D] text-white pt-16 md:pt-24 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Grid Section: Three Columns */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-20 w-20 rounded-full bg-white  flex items-center justify-center shadow-lg">
                <img 
                  src={LOGO_URL} 
                  alt="Shubh Safar Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight whitespace-nowrap">
                Shubh Safar Holidays<span className="text-[#F4B400]">.</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Crafting bespoke journeys across India for travellers
              who seek the extraordinary in every detail. Your journey, curated with soul and precision.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/shubhsafarholidays"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#F4B400] hover:border-[#F4B400] hover:text-[#0B3C5D] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/918852070596"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#10B981] hover:border-[#10B981] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6 lg:pl-12">
            <p className="text-[#F4B400] text-[10px] font-bold uppercase tracking-[0.25em]">
              Explore
            </p>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About the Studio</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Experiences</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-6">
            <p className="text-[#F4B400] text-[10px] font-bold uppercase tracking-[0.25em]">
              Connect
            </p>
            <div className="space-y-4 text-sm text-white/70">
              <a href="tel:+918852070596" className="flex items-center gap-4 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                   <Phone size={16} className="text-[#F4B400]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/30 font-bold">Call Us</span>
                  <span className="font-medium">+91 88520 70596</span>
                </div>
              </a>
              <a href="mailto:bhuvan@shubhsafar.online" className="flex items-center gap-4 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                   <Mail size={16} className="text-[#F4B400]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/30 font-bold">Email Us</span>
                  <span className="font-medium break-all">bhuvan@shubhsafar.online</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] text-center md:text-left font-bold uppercase tracking-[0.2em] text-white/30">
            © {new Date().getFullYear()} Shubh Safar Holidays • Private Travel Management
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
            <a href="#" className="hover:text-[#F4B400] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#F4B400] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F4B400] transition-colors">Design By Shubh Safar</a>
          </div>
        </div>
      </div>

      {/* Large Aesthetic Background Text */}
      <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[13vw] font-bold leading-none translate-y-1/4">
          SHUBH SAFAR
        </h2>
      </div>
     
    </footer>
  );
}