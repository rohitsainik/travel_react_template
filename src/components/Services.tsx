import { motion } from "framer-motion";
import { Compass, Headset, Hotel, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "itineraries",
    title: "Curated Itineraries",
    icon: Compass,
    description:
      "Every journey is designed by specialists who balance must-see icons with hidden, local-only experiences.",
    bullets: [
      "Tailored to your travel style and pace",
      "Handpicked experiences, not mass-market",
    ],
  },
  {
    id: "support",
    title: "24/7 Personal Concierge",
    icon: Headset,
    description:
      "From flight delays to last-minute changes, your dedicated specialist is just a WhatsApp message away.",
    bullets: [
      "Local teams in every major Indian city",
      "Real-time assistance during your trip",
    ],
  },
  {
    id: "stays",
    title: "Luxury & Character Stays",
    icon: Hotel,
    description:
      "Stay in boutique hotels, heritage palaces, and serene retreats that reflect the soul of the destination.",
    bullets: [
      "Personally vetted stays and hosts",
      "Priority room upgrades where available",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-px w-8 bg-[#F4B400]"></span>
            <span className="text-[#F4B400] font-bold tracking-[0.2em] uppercase text-xs">
              Our Commitment
            </span>
            <span className="h-px w-8 bg-[#F4B400]"></span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0B3C5D] mb-6">
            Everything Handled. Beautifully.
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed">
            IndiVista Journeys exists so you can focus on being present in each
            moment—not on coordinating logistics. We handle the details
            end-to-end.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="relative group p-8 rounded-[2rem] bg-[#F9FAFB] border border-transparent hover:border-[#0B3C5D]/10 hover:bg-white hover:shadow-[0_20px_50px_rgba(11,60,93,0.08)] transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
              >
                {/* Icon Circle */}
                <div className="mb-8 relative">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#0B3C5D] group-hover:bg-[#0B3C5D] group-hover:text-white transition-colors duration-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#F4B400] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
                </div>

                <h3 className="text-xl font-poppins font-bold text-[#0B3C5D] mb-4">
                  {service.title}
                </h3>

                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-xs font-medium text-[#1F2933]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#F4B400] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#F4B400] group-hover:w-1/3 transition-all duration-500 rounded-t-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Simple Trust Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-100 text-center"
        >
          <p className="text-[#6B7280] text-sm italic">
            "The best way to see India is with someone who knows its secrets."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
