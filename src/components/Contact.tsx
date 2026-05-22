import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Globe,
  Instagram,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function DateRangePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Reset internal state when parent clears the value
  useEffect(() => {
    if (!value) {
      setStartDate(null);
      setEndDate(null);
    }
  }, [value]);

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const isInRange = (date: Date) => {
    const end = endDate || hoverDate;
    if (!startDate || !end) return false;
    const [s, e] = startDate <= end ? [startDate, end] : [end, startDate];
    return date > s && date < e;
  };

  const formatDate = (d: Date) =>
    `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`;

  const handleDayClick = (day: number) => {
    const clicked = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    if (!startDate || (startDate && endDate)) {
      setStartDate(clicked);
      setEndDate(null);
      setHoverDate(null);
    } else {
      if (clicked < startDate) {
        setEndDate(startDate);
        setStartDate(clicked);
      } else {
        setEndDate(clicked);
      }
      const s = clicked < startDate ? clicked : startDate;
      const e = clicked < startDate ? startDate : clicked;
      onChange(`${formatDate(s)} → ${formatDate(e)}`);
      setOpen(false);
    }
  };

  const prevMonth = () =>
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  const nextMonth = () =>
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const today = new Date();

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div ref={ref} className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="w-full bg-[#F9FAFB] border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:border-[#F4B400] outline-none transition-all cursor-pointer flex items-center justify-between gap-2 hover:border-[#F4B400]"
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {value || "Select date range"}
        </span>
        <div className="flex items-center gap-1">
          {value && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setStartDate(null);
                setEndDate(null);
                onChange("");
              }}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={14} />
            </button>
          )}
          <Calendar className="w-4 h-4 text-[#F4B400]" />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute z-50 top-full mt-2 left-0 bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 w-[320px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={prevMonth}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="font-bold text-[#0B3C5D] text-sm">
                {MONTHS[month]} {year}
              </span>
              <button
                type="button"
                onClick={nextMonth}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Day labels */}
            <div className="grid grid-cols-7 mb-1">
              {DAYS.map((d) => (
                <div key={d} className="text-center text-[10px] font-bold text-gray-400 uppercase py-1">
                  {d}
                </div>
              ))}
            </div>

            {/* Cells */}
            <div className="grid grid-cols-7 gap-y-1">
              {cells.map((day, idx) => {
                if (!day) return <div key={`empty-${idx}`} />;
                const date = new Date(year, month, day);
                const isStart = startDate && isSameDay(date, startDate);
                const isEnd = endDate && isSameDay(date, endDate);
                const inRange = isInRange(date);
                const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());

                return (
                  <button
                    key={day}
                    type="button"
                    disabled={isPast}
                    onClick={() => handleDayClick(day)}
                    onMouseEnter={() => startDate && !endDate && setHoverDate(date)}
                    onMouseLeave={() => setHoverDate(null)}
                    className={`
                      relative text-xs font-semibold h-9 w-full flex items-center justify-center transition-all
                      ${isPast ? "text-gray-300 cursor-not-allowed" : "cursor-pointer"}
                      ${isStart || isEnd
                        ? "bg-[#0B3C5D] text-white rounded-full z-10"
                        : inRange
                        ? "bg-[#F4B400]/15 text-[#0B3C5D]"
                        : !isPast
                        ? "hover:bg-[#F4B400]/20 text-gray-700 rounded-full"
                        : ""
                      }
                      ${isStart && endDate ? "rounded-r-none" : ""}
                      ${isEnd ? "rounded-l-none" : ""}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Hint */}
            <p className="text-center text-[10px] text-gray-400 mt-4">
              {!startDate
                ? "Click to select start date"
                : !endDate
                ? "Now select your return date"
                : ""}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  travelDates: "",
  intent: "",
};

export function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const WHATSAPP_NUMBER = "+918852070596";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `*New Itinerary Request - Shubh Safar*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Dates:* ${formData.travelDates}\n` +
      `*Travel Intent:* ${formData.intent || "Not specified"}`
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    const a = document.createElement("a");
    a.href = whatsappUrl;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.click();

    // Reset form
    setFormData(INITIAL_FORM);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-14 bg-[#F9FAFB] font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-[#F4B400]"></span>
            <span className="text-[#F4B400] font-bold tracking-[0.2em] uppercase text-xs">
              Start Your Story
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#0B3C5D] leading-tight mb-6">
            Let&apos;s Plan Your <br />
            <span className="text-[#F4B400]">Next Masterpiece</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl">
            Share your vision with us. Our specialists will reach out via WhatsApp to shape your bespoke itinerary.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              className="space-y-6 bg-[#efefef] p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(11,60,93,0.05)] border border-gray-100"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0B3C5D] ml-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] outline-none transition-all"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0B3C5D] ml-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] outline-none transition-all"
                    placeholder="rahul@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0B3C5D] ml-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] outline-none transition-all"
                    placeholder="+91 88520-70596"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0B3C5D] ml-1">Travel Dates *</label>
                  <DateRangePicker
                    value={formData.travelDates}
                    onChange={(val) => setFormData({ ...formData, travelDates: val })}
                  />
                  {/* Hidden required input to trigger native validation */}
                  <input
                    type="text"
                    required
                    value={formData.travelDates}
                    onChange={() => {}}
                    className="sr-only"
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B3C5D] ml-1">Your Travel Intent</label>
                <textarea
                  rows={4}
                  value={formData.intent}
                  onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                  className="w-full bg-[#F9FAFB] border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:border-[#F4B400] focus:ring-1 focus:ring-[#F4B400] outline-none transition-all resize-none"
                  placeholder="Tell us about the destinations or special occasions..."
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#0B3C5D] text-white px-10 py-5 rounded-full font-bold hover:bg-[#F4B400] hover:text-[#0B3C5D] transition-all flex items-center justify-center gap-3 group active:scale-95"
                >
                  Request Custom Itinerary
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <AnimatePresence>
                  {submitted && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm font-semibold text-green-600 flex items-center gap-1"
                    >
                      ✓ Sent to WhatsApp!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[#0B3C5D] text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <Globe className="absolute -right-10 -top-10 w-40 h-40 text-white/5" />
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="text-[#F4B400] w-6 h-6" />
                Shubh Safar Holidays HQ
              </h3>
              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Office Locations</p>
                  <p className="text-lg">54, Ganesh Ghati , Near Gadiya Devra , Udaipur , Rajasthan</p>
                </div>
                <a href="tel:+918852070596" className="block group">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Direct Contact</p>
                  <p className="text-lg group-hover:text-[#F4B400] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" /> +91 88520 70596
                  </p>
                </a>
                <a href="mailto:bhuvan@shubhsafar.online" className="block group">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg group-hover:text-[#F4B400] transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" /> bhuvan@shubhsafar.online
                  </p>
                </a>
              </div>
            </div>

            {/* <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="bg-[#F4B400]/10 p-3 rounded-xl">
                <MessageSquare className="text-[#F4B400] w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#0B3C5D] text-sm">Real-time Concierge</h4>
                <p className="text-xs text-[#6B7280]">WhatsApp response: &lt; 15 mins</p>
              </div>
            </div> */}

            <div className="flex justify-center items-center gap-3 pt-2">
              <a href="https://www.instagram.com/shubhsafarholidays?igsh=b3V5dWg3cG4zNDY1" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#0B3C5D] hover:border-[#F4B400] hover:text-[#F4B400] transition-all shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/918852070596" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#0B3C5D] hover:border-[#25D366] hover:text-[#25D366] transition-all shadow-sm">
                <MessageSquare size={18} />
              </a>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] ml-2">Follow our journal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}