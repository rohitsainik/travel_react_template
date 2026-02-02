import React from "react";
import { Instagram, Linkedin, Bookmark, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B3C5D] text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start pb-16 border-b border-white/10">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4B400] text-[#0B3C5D] font-poppins font-bold text-lg">
                IV
              </div>
              <span className="text-2xl font-poppins font-bold tracking-tight">
                IndiVista<span className="text-[#F4B400]">.</span>
              </span>
            </div>
            <p className="text-white/70 text-lg leading-relaxed max-w-sm">
              Crafting bespoke Indian odysseys for the discerning traveller who
              seeks the extraordinary in every detail.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Bookmark].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F4B400] hover:border-[#F4B400] hover:text-[#0B3C5D] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <p className="text-[#F4B400] text-xs font-bold uppercase tracking-[0.2em]">
                Company
              </p>
              <ul className="space-y-4 text-white/80">
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#F4B400] transition-colors"
                  >
                    The Studio
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#F4B400] transition-colors"
                  >
                    Philosophy
                  </a>
                </li>
                <li>
                  <a
                    href="#packages"
                    className="hover:text-[#F4B400] transition-colors"
                  >
                    Journeys
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#F4B400] transition-colors"
                  >
                    Concierge
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <p className="text-[#F4B400] text-xs font-bold uppercase tracking-[0.2em]">
                Destinations
              </p>
              <ul className="space-y-4 text-white/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F4B400] transition-colors"
                  >
                    Rajasthan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F4B400] transition-colors"
                  >
                    Kerala
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F4B400] transition-colors"
                  >
                    Himalayas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F4B400] transition-colors"
                  >
                    Varanasi
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-6">
              <p className="text-[#F4B400] text-xs font-bold uppercase tracking-[0.2em]">
                Newsletter
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Receive curated seasonal highlights from the heart of India.
              </p>
              <form
                className="relative group"
                onSubmit={(e) => e.preventDefault()}
              >
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
        </div>

        {/* Bottom Section: Legal & Credits */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] font-medium uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} IndiVista Journeys • Private Travel
            Management
          </div>

          <div className="flex items-center gap-8 text-[11px] font-medium uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-[#F4B400] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#F4B400] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#F4B400] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Aesthetic Background Detail */}
      <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[15vw] font-poppins font-bold leading-none translate-y-1/4">
          INDIVISTA
        </h2>
      </div>
    </footer>
  );
}
