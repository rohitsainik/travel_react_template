import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Globe,
  Instagram,
  Linkedin,
  Bookmark,
} from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#F9FAFB] font-inter overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section - Moved to top to ensure column alignment below */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-[#F4B400]"></span>
            <span className="text-[#F4B400] font-bold tracking-[0.2em] uppercase text-xs">
              Start Your Story
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0B3C5D] leading-tight mb-6">
            Let&apos;s Plan Your <br />
            <span className="text-[#F4B400]">Next Masterpiece</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl">
            Share your vision with us. Our Subh Safar travel specialists will
            reach out within 24 hours to shape your bespoke itinerary.
          </p>
        </div>

        {/* Main Content Grid - Columns now start at the same vertical position */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* Left Side: Original Form Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              className="space-y-6 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(11,60,93,0.05)] border border-gray-100"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0B3C5D] ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] outline-none transition-all placeholder:text-gray-400"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0B3C5D] ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] outline-none transition-all placeholder:text-gray-400"
                    placeholder="rahul@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0B3C5D] ml-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] outline-none transition-all placeholder:text-gray-400"
                    placeholder="+91 98XX-XXXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0B3C5D] ml-1">
                    Travel Dates
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] outline-none transition-all placeholder:text-gray-400"
                    placeholder="e.g. Dec 2026 or Flexible"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B3C5D] ml-1">
                  Your Travel Intent
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-[#F9FAFB] border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] outline-none transition-all resize-none placeholder:text-gray-400"
                  placeholder="Tell us about the destinations, themes, or special occasions you have in mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#0B3C5D] text-white px-10 py-5 rounded-full font-bold hover:bg-[#F4B400] hover:text-[#0B3C5D] transition-all flex items-center justify-center gap-3 cursor-pointer group active:scale-95"
              >
                Request Custom Itinerary
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right Side: Info Cards Aligned to Form Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Headquarters Card */}
            <div className="bg-[#0B3C5D] text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <Globe className="absolute -right-10 -top-10 w-40 h-40 text-white/5" />
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="text-[#F4B400] w-6 h-6" />
                Subh Safar HQ
              </h3>
              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">
                    Office Locations
                  </p>
                  <p className="text-lg">Mumbai & New Delhi, India</p>
                </div>
                <a href="tel:+919800000000" className="block group">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">
                    Direct Contact
                  </p>
                  <p className="text-lg group-hover:text-[#F4B400] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" /> +91 98XX-XXXXXX
                  </p>
                </a>
                <a href="mailto:hello@subhsafarholidays.com" className="block group">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">
                    Email Us
                  </p>
                  <p className="text-lg group-hover:text-[#F4B400] transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" /> hello@subhsafarholidays.com
                  </p>
                </a>
              </div>
            </div>

            {/* Quick Trust Cards */}
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="bg-[#F4B400]/10 p-3 rounded-xl">
                <MessageSquare className="text-[#F4B400] w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#0B3C5D] text-sm">
                  Real-time Concierge
                </h4>
                <p className="text-xs text-[#6B7280]">
                  WhatsApp response: &lt; 15 mins
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[Instagram, Linkedin, Bookmark].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#0B3C5D] hover:border-[#F4B400] hover:text-[#F4B400] transition-all shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
              <span className="text-[10px] font-bold uppercase tracking-tighter text-[#6B7280] ml-2">
                Follow our journal
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
