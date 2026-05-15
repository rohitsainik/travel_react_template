import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe2,
  ShieldCheck,
  Users,
  MoveRight,
  MapPin,
  Star,
} from "lucide-react";

const indianSlides = [
  {
    url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
    caption: "Taj Mahal, Agra",
    quote: "A testament to eternal love, curated with private access.",
    tag: "HERITAGE",
  },
  {
    url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
    caption: "Backwaters, Kerala",
    quote: "Sail through the emerald veins of God's Own Country.",
    tag: "SLOW TRAVEL",
  },
  {
    url: "https://images.pexels.com/photos/33658451/pexels-photo-33658451.jpeg",
    caption: "Lake Palace, Udaipur",
    quote: "Floating luxury in the city of shimmering lakes.",
    tag: "ROYAL STAYS",
  },
  {
    url: "https://images.unsplash.com/photo-1695876670020-e2c2ac5a21ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVoJTIwbGFkYWtofGVufDB8fDB8fHww",
    caption: "Himalayas, Ladakh",
    quote: "Discover serenity where the earth meets the sky.",
    tag: "ADVENTURE",
  },
];

export function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic Slide Logic (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === indianSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    // Redirects to contact section on the single page
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="py-14  bg-[#F9FAFB] font-inter overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content: The Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-[#F4B400]"></span>
              <span className="text-[#F4B400] font-bold tracking-[0.2em] uppercase text-xs">
                Our Heritage
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0B3C5D] leading-tight mb-8">
              Your Premier Partner for  
              <span className="text-[#F4B400]"> Authentic Indian</span> Discovery
            </h2>

            <div className="space-y-6 text-[#6B7280] text-lg leading-relaxed">
              <p>
                Subh Safar Holidays is more than a travel agency; we are a
                <span className="text-[#1F2933] font-semibold">
                  {" "}
                  boutique travel studio{" "}
                </span>
                dedicated exclusively to the Indian subcontinent. We bridge the
                gap between deep-rooted local knowledge and international luxury
                standards.
              </p>
              <p>
                Our team of on-ground specialists and hospitality veterans
                obsess over the finer details—from selecting the most scenic
                routes to securing private viewings of historic monuments,
                ensuring your journey is as seamless as it is soulful.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-y border-gray-200">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-[#0B3C5D]">
                  <Globe2 className="w-5 h-5 text-[#F4B400]" />
                  <span className="text-2xl font-bold font-poppins">50+</span>
                </div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#6B7280]">
                  Regions Covered
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-[#0B3C5D]">
                  <ShieldCheck className="w-5 h-5 text-[#F4B400]" />
                  <span className="text-2xl font-bold font-poppins">100%</span>
                </div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#6B7280]">
                  Safety Record
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-[#0B3C5D]">
                  <Users className="w-5 h-5 text-[#F4B400]" />
                  <span className="text-2xl font-bold font-poppins">70%</span>
                </div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#6B7280]">
                  Repeat Guests
                </p>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="mt-10 flex items-center gap-3 text-[#0B3C5D] font-bold hover:text-[#F4B400] transition-colors group"
            >
              Plan your story with us
              <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          {/* Right Content: Premium Automatic Slider */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white h-[600px] bg-[#0B3C5D]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  {/* Subtle Zoom "Ken Burns" Effect */}
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 5 }}
                    src={indianSlides[currentIndex].url}
                    alt={indianSlides[currentIndex].caption}
                    className="w-full h-full object-cover"
                  />

                  {/* Luxury Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/90 via-transparent to-transparent" />

                  {/* Dynamic Content Overlay */}
                  <div className="absolute bottom-10 left-8 right-8 text-white">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-[#F4B400] text-[#0B3C5D] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest mb-4 inline-block"
                    >
                      {indianSlides[currentIndex].tag}
                    </motion.span>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-poppins font-semibold italic leading-snug mb-4"
                    >
                      "{indianSlides[currentIndex].quote}"
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center gap-2 text-white/80"
                    >
                      <MapPin className="w-4 h-4 text-[#F4B400]" />
                      <span className="text-sm font-medium">
                        {indianSlides[currentIndex].caption}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="absolute top-8 right-8 flex gap-2 z-30">
                {indianSlides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 transition-all duration-500 rounded-full ${
                      idx === currentIndex
                        ? "w-10 bg-[#F4B400]"
                        : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Shadow Glows */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#F4B400]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#0B3C5D]/10 rounded-full blur-3xl" />

            {/* Verification Badge */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-6 rounded-2xl shadow-xl hidden xl:flex flex-col items-center border border-gray-100">
              <Star className="w-6 h-6 text-[#F4B400] fill-[#F4B400] mb-2" />
              <p className="text-[#0B3C5D] font-bold text-center text-xs tracking-tight">
                VERIFIED
                <br />
                SPECIALIST
              </p>
              <div className="w-8 h-0.5 bg-[#F4B400] mt-2 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
