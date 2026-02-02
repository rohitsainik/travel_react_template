import { motion } from "framer-motion";
import {
  CalendarDays,
  IndianRupee,
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";

const packages = [
  {
    id: "rajasthan",
    title: "Royal Rajasthan Circuit",
    location: "Jaipur • Jodhpur • Udaipur",
    image:
      "https://plus.unsplash.com/premium_photo-1769789069040-454bc06652c5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "48,500",
    duration: "7 Days",
    rating: 4.9,
    tag: "Heritage",
  },
  {
    id: "kerala",
    title: "Kerala Backwaters Escape",
    location: "Kumarakom • Alleppey • Munnar",
    image:
      "https://media.istockphoto.com/id/472873512/photo/houseboat-in-kerala.webp?a=1&b=1&s=612x612&w=0&k=20&c=d1HSBTo_UCZ1KbQYUs2-ulUKf9z2ZP039ICV2EKSLmY=",
    price: "42,000",
    duration: "6 Days",
    rating: 4.8,
    tag: "Slow Travel",
  },
  {
    id: "ladakh",
    title: "Ladakh Himalayan Trails",
    location: "Leh • Nubra • Pangong",
    image:
      "https://media.istockphoto.com/id/1297500238/photo/spituk-gompa-indus-valley-near-leh-ladakh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=PQxfDmTFbjoMLFyZEjFYLRIenxaxen4bge2qP7rXZ4Y=",
    price: "65,000",
    duration: "8 Days",
    rating: 5.0,
    tag: "Adventure",
  },
  {
    id: "spiritual",
    title: "Sacred Ganges & Beyond",
    location: "Varanasi • Rishikesh • Haridwar",
    image:
      "https://images.unsplash.com/photo-1716573260891-23ad993e8833?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UmlzaGlrZXNofGVufDB8fDB8fHww",
    price: "38,500",
    duration: "5 Days",
    rating: 4.7,
    tag: "Spiritual",
  },
];

export function Packages() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-24 bg-[#F9FAFB] font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#F4B400]"></span>
              <span className="text-[#F4B400] font-bold tracking-[0.2em] uppercase text-xs">
                Curated Collections
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0B3C5D]">
              Signature India Packages
            </h2>
            <p className="mt-6 text-[#6B7280] text-lg leading-relaxed">
              Thoughtfully crafted routes and premium stays handled by experts
              who know India inside out. All itineraries are fully customizable
              to your preferences.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#F4B400] text-[#F4B400]"
                />
              ))}
            </div>
            <p className="text-[#1F2933] font-semibold">
              4.9/5 Guest Satisfaction
            </p>
            <p className="text-[#6B7280] text-sm">Based on 1,200+ reviews</p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(11,60,93,0.1)] transition-all duration-500 flex flex-col h-full border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-[#0B3C5D] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    {pkg.tag}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1 text-[#6B7280] text-xs mb-3">
                  <MapPin className="w-3 h-3 text-[#F4B400]" />
                  <span className="truncate">{pkg.location}</span>
                </div>

                <h3 className="text-xl font-poppins font-bold text-[#0B3C5D] group-hover:text-[#F4B400] transition-colors mb-4">
                  {pkg.title}
                </h3>

                <div className="mt-auto">
                  <div className="flex items-center justify-between py-4 border-t border-gray-50">
                    <div className="flex flex-col">
                      <span className="text-[#6B7280] text-[10px] uppercase font-bold tracking-tight">
                        Starts from
                      </span>
                      <div className="flex items-center text-[#0B3C5D] font-bold text-lg">
                        <IndianRupee className="w-4 h-4" />
                        <span>{pkg.price}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[#6B7280] text-[10px] uppercase font-bold tracking-tight">
                        Duration
                      </span>
                      <div className="flex items-center justify-end gap-1 text-[#1F2933] font-semibold">
                        <CalendarDays className="w-4 h-4 text-[#F4B400]" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="w-full cursor-pointer mt-2 flex items-center justify-center gap-2 py-4 bg-[#0B3C5D] text-white rounded-2xl font-bold text-sm transition-all hover:bg-[#F4B400] active:scale-[0.98] group/btn"
                  >
                    Customize Trip
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
