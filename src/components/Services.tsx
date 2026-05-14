import { motion } from "framer-motion";
import { Compass, Headset, Hotel, CheckCircle2, Sparkles } from "lucide-react";

const services = [
  {
    id: "itineraries",
    title: "Curated Itineraries",
    icon: Compass,
    accent: "bg-[#F4B400]",
    description:
      "Every journey is designed by specialists who balance must-see icons with hidden, local-only experiences tailored to your rhythm.",
    bullets: [
      "Bespoke pacing (Relaxed to Adventurous)",
      "Exclusive access to 'closed-door' sites",
    ],
  },
  {
    id: "support",
    title: "24/7 Concierge",
    icon: Headset,
    accent: "bg-[#10B981]", // Success Green
    description:
      "Real-time travel management. From flight re-bookings to restaurant reservations, we are your silent partners in travel.",
    bullets: [
      "Average WhatsApp response < 10 mins",
      "On-ground support in 40+ Indian cities",
    ],
  },
  {
    id: "stays",
    title: "Heritage & Soul Stays",
    icon: Hotel,
    accent: "bg-[#0B3C5D]",
    description:
      "We bypass generic luxury for stays with soul—heritage palaces, boutique estates, and architectural marvels.",
    bullets: [
      "Personally vetted for privacy & service",
      "Complimentary room upgrades & perks",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className=" bg-white relative overflow-hidden font-inter pb-24">
      {/* Aesthetic Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4B400]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <Sparkles className="w-5 h-5 text-[#F4B400]" />
              <span className="text-[#F4B400] font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs">
                The Shubh Safar Experience
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-[#0B3C5D] leading-[1.1]">
              Everything Handled. <br />
              <span className="text-[#F4B400]/80 italic font-medium">Beautifully.</span>
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#6B7280] text-lg max-w-sm lg:pb-2 border-l-2 border-[#F4B400]/20 pl-6"
          >
            We manage the complexity of India, so you can focus on the poetry of the journey.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
                className="group relative"
              >
                {/* Background Card */}
                <div className="h-full p-8 lg:p-10 rounded-[2.5rem] bg-[#F9FAFB] border border-gray-100 transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_40px_80px_-20px_rgba(11,60,93,0.12)] group-hover:-translate-y-2">
                  
                  {/* Icon Design */}
                  <div className="mb-10 relative inline-block">
                    <div className={`w-16 h-16 rounded-2xl ${service.accent} flex items-center justify-center text-white shadow-lg transform transition-transform duration-500 group-hover:rotate-[10deg]`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    {/* Shadow Decor */}
                    <div className={`absolute inset-0 ${service.accent} blur-xl opacity-20 scale-75 group-hover:scale-110 transition-transform`} />
                  </div>

                  <h3 className="text-2xl font-poppins font-bold text-[#0B3C5D] mb-5 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-[#6B7280] text-sm leading-relaxed mb-8 min-h-[4.5rem]">
                    {service.description}
                  </p>

                  <ul className="space-y-4">
                    {service.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-xs font-semibold text-[#374151]"
                      >
                        <div className="mt-0.5">
                           <CheckCircle2 className="w-4 h-4 text-[#F4B400]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Decoration */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 rounded-full bg-[#F4B400]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Footer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 lg:mt-20 flex flex-col items-center justify-center"
        >
          <div className="w-12 h-px bg-gray-200 " />
          <p className="text-[#0B3C5D]/40  text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-center max-w-lg leading-relaxed">
            "The best way to see India is with someone who knows its secrets."
          </p>
        </motion.div>
      </div>
    </section>
  );
}