import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  IndianRupee,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BookingModal, type BookingPackage } from "./BookingModal";

const internationalPackages = [
  {
    id: "vietnam",
    title: "Vietnam Highlights",
    location: "Hanoi • Halong Bay • Hoi An",
    image: "https://img.magnific.com/free-photo/fishing-village-ha-long-bay-viet-nam_181624-47285.jpg",
    price: "82,000",
    duration: "8 Days",
    tag: "Nature",
  },
  {
    id: "thailand",
    title: "Thailand Island Escape",
    location: "Phuket • Krabi • Koh Samui",
    image: "https://img.magnific.com/premium-photo/clear-water-beach-thailand_78361-13797.jpg?uid=R238757107&ga=GA1.1.779844756.1777550090&semt=ais_hybrid&w=740&q=80",
    price: "76,500",
    duration: "7 Days",
    tag: "Beach",
  },
  {
    id: "bangkok",
    title: "Bangkok City & River",
    location: "Bangkok • Chao Phraya • Floating Markets",
    image: "https://img.magnific.com/premium-photo/beautiful-sunset-chao-phraya-river-bangkok-with-city-skyline-temple-lights_1090747-6330.jpg",
    price: "48,000",
    duration: "5 Days",
    tag: "Urban",
  },
  {
    id: "bali",
    title: "Bali Culture & Beach",
    location: "Ubud • Seminyak • Nusa Dua",
    image: "https://images.unsplash.com/photo-1775729841668-dde9263c5362?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "79,000",
    duration: "7 Days",
    tag: "Culture",
  },
];

export function InternationalPackages() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // const scrollToContact = () => {
  //   document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  // };

    const [selectedPackage, setSelectedPackage] = useState<BookingPackage | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleCustomize = (pkg: typeof internationalPackages[0]) => {
    setSelectedPackage({
      title: pkg.title,
      price: pkg.price,
      duration: pkg.duration,
      location: pkg.location,
      image: pkg.image,
    });
    setModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 overflow-hidden">
      {/* HEADER WITH TOP NAVIGATION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#F4B400]"></span>
            <span className="text-[#F4B400] font-bold tracking-[0.2em] uppercase text-xs">
              International Travel
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3C5D]">
            Global Escapes & Destinations
          </h2>
          <p className="mt-6 text-[#6B7280] text-lg leading-relaxed">
            Explore premium international journeys designed for discerning travellers.
          </p>
        </div>

        {/* CUSTOM NAVIGATION BUTTONS */}
        <div className="flex gap-4 mb-2">
          <button
            ref={prevRef}
            className="group w-14 h-14 rounded-full border-2 border-[#0B3C5D]/10 flex items-center justify-center transition-all hover:bg-[#0B3C5D] hover:border-[#0B3C5D] disabled:opacity-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#0B3C5D] group-hover:text-white transition-colors" />
          </button>
          <button
            ref={nextRef}
            className="group w-14 h-14 rounded-full border-2 border-[#0B3C5D]/10 flex items-center justify-center transition-all hover:bg-[#0B3C5D] hover:border-[#0B3C5D] disabled:opacity-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#0B3C5D] group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      {/* SWIPER CAROUSEL */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination", // Custom element for easier styling
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Assign refs to navigation parameters
          if (typeof swiper.params.navigation !== "boolean") {
            const nav = swiper.params.navigation;
            if (nav) {
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }
          }
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!overflow-visible"
      >
        {internationalPackages.map((pkg) => (
          <SwiperSlide key={pkg.id} className="h-auto pb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 group"
            >
              {/* Card Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0B3C5D]">
                    {pkg.tag}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-[#6B7280] text-xs mb-4">
                  <MapPin className="w-4 h-4 text-[#F4B400]" />
                  <span className="font-medium">{pkg.location}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#0B3C5D] mb-6 group-hover:text-[#F4B400] transition-colors line-clamp-1">
                  {pkg.title}
                </h3>

                <div className="mt-auto">
                  <div className="flex items-center justify-between py-5 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">From</p>
                      <div className="flex items-center text-2xl font-bold text-[#0B3C5D]">
                        <IndianRupee className="w-5 h-5" />
                        <span>{pkg.price}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Duration</p>
                      <p className="text-lg font-bold text-[#1F2933]">{pkg.duration}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCustomize(pkg)}
                    className="w-full mt-2 flex items-center justify-center gap-3 py-4 bg-[#0B3C5D] text-white rounded-2xl font-bold hover:bg-[#F4B400] transition-all active:scale-95 shadow-lg shadow-[#0B3C5D]/10"
                  >
                    Tailor Your Escape
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PAGINATION DOTS WITH MARGIN */}
      <div className="custom-swiper-pagination flex justify-center gap-2 mt-12"></div>

      <style>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #0B3C5D;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>

      {/* Reusable Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        package={selectedPackage}
        whatsappNumber="+919660283288"
      />
    </div>
  );
}