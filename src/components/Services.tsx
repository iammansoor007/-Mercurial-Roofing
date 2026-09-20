import { useRef, useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import {
  Wrench, Home, Building2, Sun, CloudRain, Shield,
  TreePine, Droplets, Hammer, Square, ArrowRight,
  Layout, Building, CheckCircle, Phone, Zap,
} from "lucide-react";
import completeData from "../src/data/completeData.json";
import imgRoofing from "@/assets/p1.webp";
import imgConstruction from "@/assets/p2.webp";
import imgRestoration from "@/assets/mercurial_roofing_upscaled_2x.jpg";

const serviceImageMap: Record<string, string> = {
  "01": imgRoofing,
  "02": imgConstruction,
  "03": imgRestoration,
};

const iconMap: Record<string, React.ElementType> = {
  Wrench, Home, Building2, Sun, CloudRain, Shield,
  TreePine, Droplets, Hammer, Square, Layout, Building,
  Search: Zap, CloudSun: Sun, Thermometer: Zap,
};

// ── Animated Number ───────────────────────────────────────────────
const AnimatedNumber = ({ value, suffix = "" }: { value: number | string; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isNum = typeof value === "number" || (!isNaN(Number(value)) && typeof value !== "boolean");
  const numValue = isNum ? Number(value) : 0;
  const [display, setDisplay] = useState<number | string>(isNum ? 0 : value);
  const started = useRef(false);

  useEffect(() => {
    if (!isNum) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let t0: number;
        const run = (ts: number) => {
          if (!t0) t0 = ts;
          const p = Math.min((ts - t0) / 2000, 1);
          setDisplay(Math.floor(numValue * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(run);
          else setDisplay(numValue);
        };
        requestAnimationFrame(run);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [numValue, isNum, value]);

  return <span ref={ref} className="tabular-nums">{typeof display === "number" ? display.toLocaleString() : display}{suffix}</span>;
};

// ── Service Card ──────────────────────────────────────────────────
const ServiceCard = memo(({
  service, index, orphan = false,
}: { service: any; index: number; orphan?: boolean }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Wrench;
  const img = serviceImageMap[service.number];

  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative rounded-2xl overflow-hidden flex flex-col cursor-pointer transform-gpu will-change-transform transition-all duration-500 hover:-translate-y-2 ${orphan ? "md:col-start-2" : ""}`}
      style={{ background: "var(--card-bg)", border: "1px solid var(--graphite-color)", boxShadow: "0 4px 24px rgba(var(--black-rgb), 0.4)" }}
      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = "rgba(var(--primary-rgb), 0.25)"}
      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = "var(--graphite-color)"}
    >
      {/* Gold left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-10" style={{ background: "linear-gradient(180deg, var(--primary-hex), var(--primary-hover-hex))" }} />

      {/* Image */}
      <div className="relative h-48 overflow-hidden shrink-0 bg-gradient-to-br from-primary/5 to-primary/10">
        {img ? (
          <>
            <img
              src={img}
              alt={service.title}
              loading="lazy"
              decoding="async"
              onLoad={(e) => e.currentTarget.classList.add('loaded')}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform transform-gpu" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon className="w-20 h-20 text-primary/20" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap" style={{ background: "linear-gradient(135deg, var(--primary-hex), var(--primary-hover-hex))", color: "var(--dark-bg)" }}>
            {service.tag}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="font-black text-4xl leading-none select-none" style={{ color: "rgba(var(--primary-rgb), 0.2)" }}>
            {service.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: "rgba(var(--primary-rgb), 0.08)", border: "1px solid rgba(var(--primary-rgb), 0.2)" }}>
            <Icon className="w-5 h-5" style={{ color: "var(--primary-hex)" }} />
          </div>
          <h3 className="text-lg font-black transition-colors duration-300 leading-tight text-foreground group-hover:text-[var(--primary-hex)]">
            {service.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--body-text-color)" }}>
          {service.description}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-5 flex-1">
          {service.features?.slice(0, 4).map((f: string, i: number) => (
            <div key={i} className="flex items-center gap-1.5 text-xs" style={{ color: "var(--body-text-color)" }}>
              <CheckCircle className="w-3 h-3 shrink-0" style={{ color: "var(--primary-hex)" }} />
              <span className="truncate">{f}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 text-sm font-black uppercase tracking-wider transition-colors duration-300 whitespace-nowrap" style={{ color: "var(--primary-hex)" }}>
          <span className="whitespace-nowrap">{completeData.services.cardCta}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
        </div>
      </div>
    </motion.a>
  );
});

ServiceCard.displayName = "ServiceCard";

// ── Main Component ────────────────────────────────────────────────
const Services = () => {
  const { badge, headline, description, stats, services, cta } = completeData.services;

  return (
    <section className="relative bg-background overflow-hidden py-20 md:py-28">

      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* ══ HEADER — split, heading left / desc+stats right ════ */}
        <div className="mb-14 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* LEFT: Badge + Headline */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ background: "rgba(var(--primary-rgb), 0.08)", border: "1px solid rgba(var(--primary-rgb), 0.25)" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--primary-hex)" }} />
                <span className="text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: "var(--primary-hex)" }}>
                  {badge}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black leading-[1.1] tracking-tight" style={{ color: "var(--heading-color)", fontFamily: "var(--font-heading)" }}>
                {headline.prefix}{" "}
                <span style={{ color: "var(--primary-hex)" }}>{headline.highlight}</span>{" "}
                <span style={{ color: "var(--body-text-color)" }}>{headline.suffix}</span>
              </h2>
            </motion.div>

            {/* RIGHT: Description + Stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              <p className="text-base md:text-lg leading-relaxed font-medium" style={{ color: "var(--body-text-color)" }}>
                {description[0]}
              </p>

              {/* Stat cards — gold top bar */}
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat: any) => (
                  <div
                    key={stat.label}
                    className="relative rounded-xl p-4 overflow-hidden transition-all duration-300"
                    style={{ background: "var(--card-bg)", border: "1px solid var(--graphite-color)" }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl" style={{ background: "linear-gradient(90deg, var(--primary-hex), var(--primary-hover-hex))" }} />
                    <div className="text-2xl md:text-3xl font-black leading-none mb-1 pt-1" style={{ color: "var(--primary-hex)" }}>
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest leading-tight" style={{ color: "var(--silver-color)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Separator line */}
          <div className="mt-12 h-px" style={{ background: "linear-gradient(to right, rgba(var(--primary-rgb), 0.25), var(--graphite-color), transparent)" }} />
        </div>

        {/* ══ SERVICES GRID ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12 md:mb-16">
          {services.map((service: any, index: number) => {
            return (
              <ServiceCard key={service.number} service={service} index={index} orphan={false} />
            );
          })}
        </div>

        {/* ══ PREMIUM CTA BANNER ═══════════════════════════════ */}
        {(() => {
          const ctaBadge = cta.badge || "Multi-State Dispatch Available";
          const ctaPhone = cta.phone || "(470) 323-6048";
          const ctaPhoneLink = cta.phoneLink || "tel:+14703236048";
          const ctaDivider = cta.dividerText || "Or Call Direct";
          const ctaTrustBadges = cta.trustBadges || ["Fully Insured", "24/7 Leak Response", "Free Inspections"];

          return (
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative overflow-hidden rounded-3xl"
              style={{
                background: "linear-gradient(135deg, var(--navy-color) 0%, var(--primary-hover-hex) 100%)",
                border: "1px solid rgba(var(--primary-rgb), 0.25)",
                boxShadow: "0 25px 60px rgba(var(--navy-rgb), 0.25)",
              }}
            >
              {/* Accent top line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, transparent, var(--accent-hex), transparent)" }}
              />

              {/* Ambient glow */}
              <div
                className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(174, 184, 194, 0.15)" }}
              />
              <div
                className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(18, 54, 90, 0.3)" }}
              />

              {/* Technical blueprint grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(var(--white-rgb), 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--white-rgb), 0.2) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />

              <div className="relative z-10 px-8 py-12 md:px-14 md:py-16">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">

                  {/* ── Left: Editorial Headline Block ── */}
                  <div className="flex-1 max-w-2xl text-center lg:text-left">
                    {/* Badge */}
                    <div
                      className="inline-flex items-center gap-2.5 mb-6 rounded-full px-4 py-1.5 backdrop-blur-sm"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(174, 184, 194, 0.35)",
                      }}
                    >
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent-hex)" }} />
                      <span
                        className="text-[11px] font-black uppercase tracking-[0.25em]"
                        style={{ color: "var(--white-color)" }}
                      >
                        {ctaBadge}
                      </span>
                    </div>

                    {/* Big headline */}
                    <h3
                      className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.08] mb-5"
                      style={{ color: "var(--white-color)", fontFamily: "var(--font-heading)" }}
                    >
                      {cta.title}
                    </h3>

                    <p
                      className="text-base sm:text-lg leading-relaxed max-w-lg font-medium mx-auto lg:mx-0"
                      style={{ color: "var(--light-silver-color)" }}
                    >
                      {cta.description}
                    </p>

                    {/* Trust ribbon */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
                      {ctaTrustBadges.map((t: string) => (
                        <div
                          key={t}
                          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md"
                          style={{
                            background: "rgba(var(--white-rgb), 0.08)",
                            border: "1px solid rgba(var(--white-rgb), 0.15)",
                          }}
                        >
                          <CheckCircle className="w-3.5 h-3.5 shrink-0 text-white" />
                          <span
                            className="text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                            style={{ color: "var(--white-color)" }}
                          >
                            {t}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── Right: Action Stack ── */}
                  <div className="flex flex-col gap-4 w-full lg:w-[330px] xl:w-[350px] shrink-0 lg:pt-2">
                    {/* Primary CTA */}
                    <motion.a
                      href={cta.buttonLink}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative w-full flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-black text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 shadow-2xl whitespace-nowrap"
                      style={{
                        background: "#FFFFFF",
                        color: "var(--primary-hex)",
                        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.35)",
                      }}
                    >
                      <span className="relative z-10 font-black whitespace-nowrap">{cta.buttonText}</span>
                      <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                    </motion.a>

                    {/* Divider label */}
                    <div className="flex items-center gap-3 my-1">
                      <div className="flex-1 h-px" style={{ background: "rgba(var(--white-rgb), 0.15)" }} />
                      <span
                        className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap"
                        style={{ color: "var(--light-silver-color)" }}
                      >
                        {ctaDivider}
                      </span>
                      <div className="flex-1 h-px" style={{ background: "rgba(var(--white-rgb), 0.15)" }} />
                    </div>

                    {/* Direct Call Button */}
                    <motion.a
                      href={ctaPhoneLink}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="group w-full flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 whitespace-nowrap"
                      style={{
                        background: "rgba(var(--white-rgb), 0.08)",
                        color: "var(--white-color)",
                        border: "1px solid rgba(var(--white-rgb), 0.25)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <Phone className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ color: "var(--accent-hex)" }} />
                      <span className="font-black tracking-wide whitespace-nowrap">{ctaPhone}</span>
                    </motion.a>

                    <p
                      className="text-center text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
                      style={{ color: "var(--light-silver-color)" }}
                    >
                      {cta.phoneLabel}
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          );
        })()}
      </div>

      {/* Integrated Elegant Transition Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default Services;
