import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  ArrowRight,
  Shield,
  Star,
  Clock,
  Building2,
  CheckCircle2,
  Home,
  Hammer,
  AlertTriangle,
  Zap,
} from "lucide-react";
import roofingBg from "@/assets/p2.png";
import completeData from "../src/data/completeData.json";

const heroIconMap: Record<string, React.ElementType> = {
  Star,
  Building2,
  Clock,
  Shield,
  Home,
  Hammer,
  AlertTriangle,
};

const Hero = () => {
  const {
    badge,
    headlines,
    description,
    emergencyButton,
    requestButton,
    trustMetrics,
    estimateCard,
  } = completeData.hero;

  const [activeDivision, setActiveDivision] = useState<string>(
    estimateCard.divisions[0].key
  );
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    urgency: "standard",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", address: "", urgency: "standard" });
    }, 4000);
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden isolate pt-24 pb-16 lg:pt-32 lg:pb-24"
      style={{ background: "var(--navy-color)" }}
    >
      {/* ── Background Imagery & Luxury Lighting ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src={roofingBg}
          alt={headlines[0]}
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          style={{ opacity: 0.60 }}
          loading="eager"
          decoding="async"
        />

        {/* Architectural lighting overlay balancing left-side readability with right-side imagery vibrancy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(var(--navy-rgb), 0.92) 0%, rgba(var(--navy-rgb), 0.84) 38%, rgba(var(--navy-rgb), 0.50) 68%, rgba(var(--navy-rgb), 0.18) 100%)",
          }}
        />

        {/* Technical Grid Accent */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(var(--white-rgb), 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--white-rgb), 0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Ambient Brand Glow */}
        <div
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(var(--primary-rgb), 0.22) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(var(--primary-hover-rgb), 0.25) 0%, transparent 70%)" }}
        />

        {/* Bottom seamless transition fade into page background */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, var(--dark-bg), transparent)" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ════ LEFT COLUMN: Brand Authority & Messaging ════ */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7">

            {/* Pill Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-md shadow-lg"
                style={{
                  borderColor: "rgba(var(--primary-rgb), 0.35)",
                  background: "rgba(var(--primary-rgb), 0.12)",
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--primary-hex)" }} />
                <span
                  className="text-xs sm:text-sm font-bold tracking-wider uppercase"
                  style={{ color: "var(--white-color)" }}
                >
                  {badge}
                </span>
              </motion.div>
            )}

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[1.02]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--white-color)" }}
            >
              <span className="block">{headlines[0]}</span>
              {headlines[1] && (
                <span
                  className="block mt-1 text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--primary-hex) 0%, var(--primary-hover-hex) 100%)",
                  }}
                >
                  {headlines[1]}
                </span>
              )}
            </motion.h1>

            {/* Sub-headline / Brand Promise */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl"
              style={{ color: "var(--light-silver-color)" }}
            >
              {description}
            </motion.p>

            {/* Main Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
            >
              {/* 24/7 Emergency Dispatch Button */}
              {emergencyButton && (
                <motion.a
                  href={emergencyButton.href}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative group px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-2xl transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--primary-hex) 0%, var(--primary-hover-hex) 100%)",
                    color: "var(--white-color)",
                    boxShadow: "0 10px 30px rgba(var(--primary-rgb), 0.4)",
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full animate-ping" style={{ background: "var(--white-color)" }} />
                  <Phone className="w-5 h-5" style={{ color: "var(--white-color)" }} />
                  <span>{emergencyButton.text}</span>
                </motion.a>
              )}

              {/* Start Your Request */}
              {requestButton && (
                <motion.a
                  href={requestButton.href}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 border transition-all duration-300"
                  style={{
                    background: "rgba(var(--white-rgb), 0.08)",
                    borderColor: "rgba(var(--white-rgb), 0.25)",
                    color: "var(--white-color)",
                  }}
                >
                  <span>{requestButton.text}</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </motion.a>
              )}
            </motion.div>

            {/* Trust Metrics Bar */}
            {trustMetrics && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 w-full border-t"
                style={{ borderColor: "rgba(var(--white-rgb), 0.12)" }}
              >
                {trustMetrics.map((item, i) => {
                  const IconComponent = heroIconMap[item.icon] || Star;
                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border backdrop-blur-sm flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-300 hover:border-primary/50"
                      style={{
                        background: "rgba(var(--navy-rgb), 0.55)",
                        borderColor: "rgba(var(--white-rgb), 0.08)",
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <IconComponent
                          className="w-4 h-4"
                          style={{ color: "var(--primary-hex)" }}
                        />
                        <span
                          className="text-lg sm:text-xl font-black tracking-tight leading-none"
                          style={{ color: "var(--white-color)" }}
                        >
                          {item.value}
                        </span>
                      </div>
                      <span
                        className="text-[11px] font-medium leading-tight"
                        style={{ color: "var(--light-silver-color)" }}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>

          {/* ════ RIGHT COLUMN: Streamlined Priority Dispatch Card ════ */}
          {estimateCard && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 w-full max-w-lg mx-auto"
            >
              <div
                className="rounded-3xl border shadow-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden"
                style={{
                  background: "rgba(var(--white-rgb), 0.98)",
                  borderColor: "var(--border-color)",
                  boxShadow:
                    "0 25px 60px rgba(var(--black-rgb), 0.28), 0 0 40px rgba(var(--primary-rgb), 0.15)",
                }}
              >
                {/* Card Header */}
                <div
                  className="flex items-center justify-between pb-5 border-b"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-black tracking-tight"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--heading-color)" }}
                    >
                      {estimateCard.title}
                    </h3>
                    <p
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: "var(--silver-color)" }}
                    >
                      {estimateCard.subtitle}
                    </p>
                  </div>
                  {estimateCard.badge && (
                    <div
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold"
                      style={{
                        background: "rgba(var(--primary-rgb), 0.1)",
                        color: "var(--primary-hex)",
                      }}
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>{estimateCard.badge}</span>
                    </div>
                  )}
                </div>

                {/* Division Selector */}
                {estimateCard.divisions && (
                  <div className="mt-5">
                    <label
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "var(--heading-color)" }}
                    >
                      {estimateCard.divisionLabel}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {estimateCard.divisions.map((div) => {
                        const DivIcon = heroIconMap[div.icon] || Home;
                        const isActive = activeDivision === div.key;
                        return (
                          <button
                            type="button"
                            key={div.key}
                            onClick={() => setActiveDivision(div.key)}
                            className="flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-bold transition-all duration-200 cursor-pointer"
                            style={{
                              background: isActive
                                ? "linear-gradient(135deg, var(--primary-hex), var(--primary-hover-hex))"
                                : "var(--dark-bg)",
                              color: isActive ? "var(--white-color)" : "var(--heading-color)",
                              borderColor: isActive ? "var(--primary-hex)" : "var(--border-color)",
                              boxShadow: isActive
                                ? "0 4px 14px rgba(var(--primary-rgb), 0.25)"
                                : "none",
                            }}
                          >
                            <DivIcon className="w-4 h-4 mb-1" />
                            <span>{div.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Form Body */}
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                        style={{ color: "var(--heading-color)" }}
                      >
                        {estimateCard.fields.name.label}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={estimateCard.fields.name.placeholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm font-medium focus:outline-none transition-all"
                        style={{
                          background: "var(--dark-bg)",
                          border: "1px solid var(--border-color)",
                          color: "var(--heading-color)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-hex)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                        style={{ color: "var(--heading-color)" }}
                      >
                        {estimateCard.fields.phone.label}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={estimateCard.fields.phone.placeholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm font-medium focus:outline-none transition-all"
                        style={{
                          background: "var(--dark-bg)",
                          border: "1px solid var(--border-color)",
                          color: "var(--heading-color)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-hex)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                        style={{ color: "var(--heading-color)" }}
                      >
                        {estimateCard.fields.address.label}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={estimateCard.fields.address.placeholder}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm font-medium focus:outline-none transition-all"
                        style={{
                          background: "var(--dark-bg)",
                          border: "1px solid var(--border-color)",
                          color: "var(--heading-color)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-hex)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                        style={{ color: "var(--heading-color)" }}
                      >
                        {estimateCard.fields.urgency.label}
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm font-medium focus:outline-none transition-all cursor-pointer"
                        style={{
                          background: "var(--dark-bg)",
                          border: "1px solid var(--border-color)",
                          color: "var(--heading-color)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary-hex)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                      >
                        {estimateCard.fields.urgency.options.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--primary-hex) 0%, var(--primary-hover-hex) 100%)",
                        color: "var(--white-color)",
                        boxShadow: "0 8px 24px rgba(var(--primary-rgb), 0.35)",
                      }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{estimateCard.submitButton.submitting}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>{estimateCard.submitButton.idle}</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                      style={{
                        background: "rgba(var(--primary-rgb), 0.12)",
                        color: "var(--primary-hex)",
                      }}
                    >
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4
                      className="text-xl font-black uppercase tracking-tight"
                      style={{ color: "var(--heading-color)" }}
                    >
                      {estimateCard.success.title}
                    </h4>
                    <p className="text-sm max-w-xs mx-auto" style={{ color: "var(--silver-color)" }}>
                      {estimateCard.success.message}
                    </p>
                  </div>
                )}

                {/* Trust Footer Note */}
                <div
                  className="mt-5 pt-4 border-t text-center text-[11px] font-semibold"
                  style={{ borderColor: "var(--border-color)", color: "var(--silver-color)" }}
                >
                  <span>{estimateCard.trustNote}</span>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Hero;
