import { motion } from "framer-motion";
import {
  HeartPulse,
  Mountain,
  Sparkles,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const specialties = [
  {
    id: "spiritual",
    icon: HeartPulse,
    title: "Spiritual & Wellness",
    description:
      "Sacred cities, sunrise aartis on the Ganges, and restorative Ayurvedic stays in the Himalayan foothills.",
    tags: ["Varanasi", "Rishikesh", "Yoga"],
    // Verified: Ganga Aarti at night
    image:
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "adventure",
    icon: Mountain,
    title: "Soft Adventure",
    description:
      "High-altitude passes in Ladakh and camel safaris in the Thar desert with expert local safety teams.",
    tags: ["Ladakh", "Thar Desert", "Hiking"],
    // Verified: Ladakh prayer flags & mountains
    image:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "heritage",
    icon: Sparkles,
    title: "Heritage & Culture",
    description:
      "Live India’s royal history through palace stays, textile tours, and private encounters with master artisans.",
    tags: ["Rajasthan", "Hampi", "Crafts"],
    // Verified: High-quality Hawa Mahal / Palace Architecture
    image:
      "https://images.pexels.com/photos/33797760/pexels-photo-33797760.jpeg",
  },
];

export function Specialty() {
  return (
    <section id="specialty" className="pb-24 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-[#F4B400] font-bold tracking-[0.2em] uppercase text-[10px]">
                Niche Expertise
              </span>
              <div className="h-px w-12 bg-[#F4B400]"></div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0B3C5D] mb-6">
              Focused Perspectives. <br />
              Deeply <span className="text-[#F4B400]">Indian.</span>
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              We specialize in specific travel themes that allow you to go
              beyond the surface and connect with the soul of the subcontinent.
            </p>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-[#0B3C5D] font-bold border-b-2 border-[#F4B400] pb-1 hover:text-[#F4B400] transition-colors group cursor-pointer"
          >
            Explore All Themes{" "}
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </motion.button>
        </div>

        {/* Specialty Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className="group relative flex flex-col h-full bg-[#F9FAFB] rounded-[2rem] overflow-hidden border border-gray-100 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(11,60,93,0.12)] transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
              >
                {/* Image & Icon Container */}
                <div className="h-64 w-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay for better icon visibility */}
                  <div className="absolute inset-0 bg-[#0B3C5D]/10 group-hover:bg-transparent transition-colors duration-500" />

                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#0B3C5D] z-10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Top Right Label */}
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-[#0B3C5D]/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                      <MapPin className="w-3 h-3 text-[#F4B400]" />
                      <span className="text-[10px] font-bold text-white tracking-wider">
                        {item.tags[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow p-8">
                  <h3 className="text-xl font-poppins font-bold text-[#0B3C5D] mb-4 group-hover:text-[#F4B400] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280] text-[15px] leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>

                  {/* Tag Pills - Now matching your palette */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[#0B3C5D]/5 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#0B3C5D] uppercase border border-transparent group-hover:border-[#F4B400]/40 group-hover:bg-white transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
