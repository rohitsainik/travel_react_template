import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, Quote } from "lucide-react";

// MANUALLY VERIFIED PERMANENT IMAGE LINKS
const testimonials = [
  {
    id: 1,
    name: "Shourya Mundaniya",
    text: "A truly royal experience in Udaipur. Every detail was perfect.",
    rating: "5.0",
    img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80",
  },
  {
    id: 2,
    name: "Mahi Jain",
    text: "The Himalayan retreat was breathtaking. Exceptional service.",
    rating: "4.9",
    img: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Sonia Kapoor",
    text: "Subh Safar Holidays found us a side of Kerala we never knew existed.",
    rating: "5.0",
    img: "https://img.magnific.com/free-photo/indian-model-showing-okay-sign-thumbs-up-gesture-studio-giving-like-agreeing-with-optimistic-idea-friendly-positive-approval-ok-symbol-accept-excellent-agreement_482257-43625.jpg",
  },
  {
    id: 4,
    name: "Marcus Thorne",
    text: "Seamless logistics and world-class heritage properties.",
    rating: "4.8",
    img: "https://img.magnific.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg",
  },

];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F9FAFB] pb-4 flex items-center"
    >
      {/* Background Layer - High Performance Link */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2000&q=100"
          alt="Luxury Taj Mahal View"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0B3C5D]/95 via-[#0B3C5D]/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#F9FAFB] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="pt-20 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-[2px] w-12 bg-[#F4B400]"></span>
            <span className="text-[#F4B400] font-bold tracking-[0.3em] uppercase text-xs">
              Exclusively Curated
            </span>
          </motion.div>

          <motion.h1
            className="font-poppins text-5xl lg:text-7xl font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Crafting Your <br />
            <span className="text-[#F4B400]">Royal Indian</span> Odyssey
          </motion.h1>

          <motion.p
            className="mt-8 max-w-lg text-lg text-white/80 leading-relaxed font-inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience the soul of India through bespoke luxury. From private
            palace stays to hidden spiritual retreats.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-[#F4B400] text-[#0B3C5D] px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-all group active:scale-95 shadow-lg">
              Begin Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Content - Image with Testimonial Slider */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="relative w-[85%] aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1663513844814-5f2fd51e957a?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Luxury Heritage Interior"
              className="w-full h-full object-cover"
            />

            {/* Sliding Trust Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl min-h-[140px] flex flex-col justify-center border border-white/20">
              <Quote className="absolute top-4 right-6 w-8 h-8 text-[#F4B400]/20" />

              <div className="relative overflow-hidden h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col h-full"
                  >
                    <p className="text-[#1F2933] font-medium text-sm italic leading-snug mb-4 pr-6">
                      "{testimonials[index].text}"
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonials[index].img}
                          className="w-12 h-12 rounded-full border-2 border-[#F4B400] object-cover"
                          alt={testimonials[index].name}
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://ui-avatars.com/api/?name=" +
                              testimonials[index].name;
                          }}
                        />
                        <div>
                          <p className="text-[#0B3C5D] font-bold text-sm leading-none">
                            {testimonials[index].name}
                          </p>
                          <div className="flex items-center gap-0.5 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={10}
                                className="fill-[#F4B400] text-[#F4B400]"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#0B3C5D] text-white px-3 py-1 rounded-lg text-[10px] font-black tracking-tighter">
                        {testimonials[index].rating}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
