import { motion } from "framer-motion";
import { Globe, MapPin, Sparkles } from "lucide-react";
import LOGO_URL from "../assets/Shubh-Safar-About.jpg";

const highlights = [
  {
    id: "network",
    title: "Global Network",
    description:
      "Local partners and premium hotels across Southeast Asia ensure seamless travel beyond India.",
    icon: Globe,
  },
  {
    id: "luxury",
    title: "Luxury Seamlessness",
    description:
      "Every journey is planned with exclusive transfers, insider access, and curated experiences.",
    icon: Sparkles,
  },
  {
    id: "care",
    title: "Personal Concierge",
    description:
      "A dedicated travel specialist guides each itinerary with attention to pace, comfort, and discovery.",
    icon: MapPin,
  },
];

export function InternationalAbout() {
  return (
    <section id="international-about" className="pb-24 bg-[#F9FAFB] font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#F4B400]"></span>
              <span className="text-[#F4B400] font-bold tracking-[0.2em] uppercase text-xs">
                International Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0B3C5D] mb-6">
              Shubh Safar Beyond India: <br />
              Global Travel, Curated.
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
              Discover international trips shaped by our signature care: modern luxury,
              authentic culture, and calm logistics curated for explorers looking for
              effortless, unforgettable escapes.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B3C5D] text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0B3C5D] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-25px_rgba(11,60,93,0.18)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/5 via-transparent to-[#F4B400]/10" />
            <img
              src={LOGO_URL}
              alt="International travel overview"
              className="relative w-full h-full object-cover min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
