import { motion } from "framer-motion";
import { Compass, Globe, Sparkles } from "lucide-react";

const internationalSpecialties = [
  {
    id: "city-culture",
    icon: Globe,
    title: "City Culture & Nightlife",
    description:
      "From Bangkok markets to Singapore rooftop dining, enjoy vibrant cities with local guides and private access.",
    tags: ["Bangkok", "Singapore", "Nightlife"],
    image:
      "https://images.unsplash.com/photo-1771773678049-b39847eb0236?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "coastal-retreat",
    icon: Compass,
    title: "Beach & Island Retreats",
    description:
      "Relax on world-class shores in Phuket, Bali and the Malay coast, paired with wellness stays and sunset dining.",
    tags: ["Phuket", "Bali", "Wellness"],
    image:
      "https://img.magnific.com/premium-photo/palm-trees-beach-against-sky_1632719-898.jpg",
  },
  {
    id: "nature-explore",
    icon: Sparkles,
    title: "Nature & Discovery",
    description:
      "Experience lush rainforests, scenic highlands, and cultural villages with expert local hosts and premium comfort.",
    tags: ["Malaysia", "Vietnam", "Adventure"],
    image:
      "https://images.unsplash.com/photo-1559149016-d88a571327ab?q=80&w=1125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function InternationalSpecialty() {
  return (
    <section id="international-specialty" className="py-14 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#F4B400] font-bold tracking-[0.2em] uppercase text-[10px]">
                International Speciality
              </span>
              <div className="h-px w-12 bg-[#F4B400]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0B3C5D] mb-6">
              Themed International Journeys 
              for Discerning Travellers
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              Discover carefully chosen global travel styles that balance discovery,
              luxury, and effortless comfort on every itinerary.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {internationalSpecialties.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href="#contact" // Link to contact section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="group relative flex flex-col h-full bg-[#F9FAFB] rounded-[2rem] overflow-hidden border border-gray-100 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(11,60,93,0.12)] transition-all duration-500"
              >
                {/* Image & Icon Container */}
                <div className="h-64 w-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0B3C5D]/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#0B3C5D] z-10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-8">
                  <h3 className="text-xl font-poppins font-bold text-[#0B3C5D] mb-4 group-hover:text-[#F4B400] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280] text-[15px] leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
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
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}