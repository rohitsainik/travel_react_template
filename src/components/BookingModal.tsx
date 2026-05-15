import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Calendar,
  ChevronLeft,
  ChevronRight,
  User,
  Phone,
  MapPin,
  IndianRupee,
  Clock,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BookingPackage {
  title: string;
  price: string;
  duration: string;
  location?: string;
  image?: string;
}

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  package: BookingPackage | null;
  whatsappNumber?: string; // e.g. "+918852070596"
}

// ─── Mini Calendar ────────────────────────────────────────────────────────────

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function MiniCalendar({
  value,
  onChange,
}: {
  value: Date | null;
  onChange: (d: Date) => void;
}) {
  const [viewDate, setViewDate] = useState(new Date());

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const today = new Date();

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  return (
    <div className="bg-[#F9FAFB] rounded-2xl p-4 border border-gray-100">
      {/* Nav */}
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={() => setViewDate(new Date(year, month - 1, 1))}
          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
        >
          <ChevronLeft size={14} className="text-[#0B3C5D]" />
        </button>
        <span className="text-xs font-bold text-[#0B3C5D] tracking-wide">
          {MONTHS[month]} {year}
        </span>
        <button
          type="button"
          onClick={() => setViewDate(new Date(year, month + 1, 1))}
          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
        >
          <ChevronRight size={14} className="text-[#0B3C5D]" />
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 mb-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[9px] font-bold text-gray-400 uppercase py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Cells */}
      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((day, idx) => {
          if (!day) return <div key={`e-${idx}`} />;
          const date = new Date(year, month, day);
          const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
          const isSelected = value && isSameDay(date, value);

          return (
            <button
              key={day}
              type="button"
              disabled={isPast}
              onClick={() => onChange(date)}
              className={`
                h-8 w-full text-xs font-semibold rounded-full flex items-center justify-center transition-all
                ${isPast ? "text-gray-300 cursor-not-allowed" : "cursor-pointer"}
                ${isSelected
                  ? "bg-[#0B3C5D] text-white shadow-md"
                  : !isPast
                  ? "hover:bg-[#F4B400]/20 text-gray-700"
                  : ""}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Modal ───────────────────────────────────────────────────────────────

const INITIAL = { name: "", phone: "" };

export function BookingModal({
  isOpen,
  onClose,
  package: pkg,
  whatsappNumber = "+918852070596",
}: BookingModalProps) {
  const [form, setForm] = useState(INITIAL);
  const [travelDate, setTravelDate] = useState<Date | null>(null);
  const [sent, setSent] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Reset on close/open
  useEffect(() => {
    if (!isOpen) {
      setForm(INITIAL);
      setTravelDate(null);
      setSent(false);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const formatDate = (d: Date) =>
    `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!travelDate) return;

    const message = encodeURIComponent(
      `*New Booking Request - Shubh Safar*\n\n` +
      `*Package:* ${pkg?.title}\n` +
      `*Price:* ₹${pkg?.price} per person\n` +
      `*Duration:* ${pkg?.duration}\n` +
      `*Travel Date:* ${formatDate(travelDate)}\n\n` +
      `*Guest Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}`
    );

    const a = document.createElement("a");
    a.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.click();

    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  if (!pkg) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full mt-20 max-w-lg max-h-[80vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-[0_40px_80px_rgba(11,60,93,0.18)] border border-gray-100 [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:display-none">

              {/* Hero Banner */}
              <div className="relative h-36 overflow-hidden rounded-t-[2.5rem]">
                {pkg.image ? (
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0B3C5D] to-[#1a6a9a]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-14">
                  <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                    Customize Your Trip
                  </p>
                  <h2 className="text-white font-bold text-xl leading-tight font-poppins">
                    {pkg.title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-6 space-y-5">

                {/* Package Summary Pills */}
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 bg-[#0B3C5D]/5 text-[#0B3C5D] text-xs font-bold px-3 py-2 rounded-full">
                    <IndianRupee size={12} />
                    ₹{pkg.price} <span className="font-normal text-gray-500">/ person</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#F4B400]/10 text-[#0B3C5D] text-xs font-bold px-3 py-2 rounded-full">
                    <Clock size={12} className="text-[#F4B400]" />
                    {pkg.duration}
                  </div>
                  {pkg.location && (
                    <div className="flex items-center gap-1.5 bg-gray-50 text-gray-600 text-xs font-medium px-3 py-2 rounded-full">
                      <MapPin size={12} className="text-[#F4B400]" />
                      {pkg.location}
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0B3C5D] flex items-center gap-1.5">
                      <User size={10} /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-2xl px-4 py-3.5 text-sm focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] outline-none transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0B3C5D] flex items-center gap-1.5">
                      <Phone size={10} /> Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#F9FAFB] border border-gray-200 rounded-2xl px-4 py-3.5 text-sm focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] outline-none transition-all"
                    />
                  </div>

                  {/* Locked Package Fields */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Package", value: pkg.title },
                      { label: "Price", value: `₹${pkg.price}` },
                      { label: "Duration", value: pkg.duration },
                    ].map(({ label, value }) => (
                      <div key={label} className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          {label}
                        </label>
                        <div className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl px-3 py-3 text-xs font-semibold text-gray-500 truncate">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Travel Date */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0B3C5D] flex items-center gap-1.5">
                      <Calendar size={10} /> Travel Start Date *
                    </label>
                    {travelDate ? (
                      <div className="flex items-center justify-between bg-[#0B3C5D]/5 border border-[#0B3C5D]/10 rounded-2xl px-4 py-3">
                        <span className="text-sm font-bold text-[#0B3C5D]">
                          {formatDate(travelDate)}
                        </span>
                        <button
                          type="button"
                          onClick={() => setTravelDate(null)}
                          className="text-xs text-gray-400 hover:text-red-400 transition-colors font-medium"
                        >
                          Change
                        </button>
                      </div>
                    ) : (
                      <MiniCalendar value={travelDate} onChange={setTravelDate} />
                    )}
                    {/* Hidden input to trigger required validation */}
                    <input
                      type="text"
                      required
                      value={travelDate ? formatDate(travelDate) : ""}
                      onChange={() => {}}
                      className="sr-only"
                      tabIndex={-1}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={`
                      w-full py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] group
                      ${sent
                        ? "bg-green-500 text-white"
                        : "bg-[#0B3C5D] text-white hover:bg-[#F4B400] hover:text-[#0B3C5D]"
                      }
                    `}
                  >
                    {sent ? (
                      <>✓ Sent to WhatsApp!</>
                    ) : (
                      <>
                        Send to WhatsApp
                        <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}