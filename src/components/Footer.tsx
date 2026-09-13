import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Star,
  Award,
  CheckCircle2,
  ArrowRight,
  Building2,
  Hammer,
  Home,
  AlertTriangle,
  ChevronUp,
  ShieldCheck,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/newlogo.png";
import completeData from "../src/data/completeData.json";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Hammer,
  AlertTriangle,
  Shield,
  CheckCircle2,
  Award,
  Star,
  ShieldCheck,
  Phone,
  Mail,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
};

const Footer = () => {
  const {
    company,
    emergencyBar,
    divisions,
    serviceAreas,
    contact,
    certifications,
    social,
    bottom,
    marquee,
  } = completeData.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const marqueeItems = marquee?.texts || [];

  return (
    <footer
      className="relative text-white overflow-hidden border-t"
      style={{
        background: "var(--navy-color)",
        borderColor: "rgba(var(--primary-rgb), 0.25)",
      }}
    >
      {/* ── Top Brand Accent Glow ── */}
      <div
        className="h-1.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--primary-hex) 35%, var(--primary-hover-hex) 65%, transparent 100%)",
        }}
      />

      {/* ── Background Subtle Tech Pattern ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(var(--white-rgb), 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--white-rgb), 0.2) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* ── 1. Infinite Ticker Marquee Ribbon ── */}
      {marqueeItems.length > 0 && (
        <div
          className="py-3 border-b overflow-hidden relative z-10"
          style={{
            background: "rgba(var(--navy-rgb), 0.8)",
            borderColor: "rgba(var(--white-rgb), 0.08)",
          }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="flex items-center space-x-10 whitespace-nowrap w-max"
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              (text, idx) => (
                <div key={idx} className="flex items-center space-x-6">
                  <span
                    className="text-xs font-black uppercase tracking-[0.22em]"
                    style={{ color: "var(--light-silver-color)" }}
                  >
                    {text}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "var(--primary-hex)" }}
                  />
                </div>
              )
            )}
          </motion.div>
        </div>
      )}

      {/* ── 2. Top Emergency Dispatch Action Ribbon ── */}
      {emergencyBar && (
        <div
          className="border-b relative z-10"
          style={{
            borderColor: "rgba(var(--white-rgb), 0.08)",
            background: "rgba(var(--navy-rgb), 0.6)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex items-center gap-3.5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(var(--primary-rgb), 0.18)",
                    border: "1px solid rgba(var(--primary-rgb), 0.35)",
                  }}
                >
                  <AlertTriangle className="w-5 h-5" style={{ color: "var(--primary-hex)" }} />
                </div>
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-white leading-tight">
                      {emergencyBar.title}
                    </h4>
                    {emergencyBar.badge && (
                      <span
                        className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-sm"
                        style={{
                          background: "rgba(var(--primary-rgb), 0.15)",
                          color: "var(--primary-hex)",
                          border: "1px solid rgba(var(--primary-rgb), 0.3)",
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--primary-hex)" }} />
                        {emergencyBar.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-xs sm:text-sm mt-0.5"
                    style={{ color: "var(--light-silver-color)" }}
                  >
                    {emergencyBar.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={emergencyBar.phoneLink}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--primary-hex), var(--primary-hover-hex))",
                    color: "var(--white-color)",
                    boxShadow: "0 8px 24px rgba(var(--primary-rgb), 0.35)",
                  }}
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>{emergencyBar.phone}</span>
                </a>

                <a
                  href={emergencyBar.ctaLink}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider border transition-all duration-300 hover:bg-white/10"
                  style={{
                    borderColor: "rgba(var(--white-rgb), 0.25)",
                    color: "var(--white-color)",
                  }}
                >
                  <span>{emergencyBar.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 3. Main 4-Column Footer Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Col 1: Authentic Brand & Authority (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="h-12 w-auto flex items-center">
                  <img
                    src={logo}
                    alt={company.name}
                    className="h-12 w-auto object-contain filter drop-shadow-md"
                  />
                </div>
                <div>
                  <h3
                    className="text-2xl font-black tracking-tight text-white leading-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {company.name}
                  </h3>
                  <span
                    className="text-[10px] font-black tracking-[0.25em] uppercase block mt-1"
                    style={{ color: "var(--primary-hex)" }}
                  >
                    {company.subTitle}
                  </span>
                </div>
              </div>
            </a>

            {company.licenseBadge && (
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
                style={{
                  background: "rgba(var(--primary-rgb), 0.12)",
                  color: "var(--light-silver-color)",
                  border: "1px solid rgba(var(--primary-rgb), 0.3)",
                }}
              >
                <ShieldCheck className="w-3.5 h-3.5" style={{ color: "var(--primary-hex)" }} />
                <span>{company.licenseBadge}</span>
              </div>
            )}

            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "var(--light-silver-color)" }}
            >
              {company.description}
            </p>

            {/* Social Icons */}
            {social && (
              <div className="flex items-center gap-2.5 pt-1">
                {social.map((s, idx) => {
                  const IconComponent = iconMap[s.icon] || Phone;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-110"
                      style={{
                        background: "rgba(var(--white-rgb), 0.05)",
                        borderColor: "rgba(var(--white-rgb), 0.12)",
                        color: "var(--light-silver-color)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--primary-hex)";
                        e.currentTarget.style.color = "var(--white-color)";
                        e.currentTarget.style.background = "rgba(var(--primary-rgb), 0.25)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(var(--white-rgb), 0.12)";
                        e.currentTarget.style.color = "var(--light-silver-color)";
                        e.currentTarget.style.background = "rgba(var(--white-rgb), 0.05)";
                      }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Col 2: Core Operating Divisions (3 Cols) */}
          {divisions && (
            <div className="lg:col-span-3 space-y-4">
              <h4
                className="text-xs font-black uppercase tracking-[0.22em] flex items-center gap-2"
                style={{ color: "var(--primary-hex)" }}
              >
                <span>{divisions.title}</span>
              </h4>
              <ul className="space-y-2.5 text-sm">
                {divisions.items.map((item, idx) => {
                  const ItemIcon = iconMap[item.icon] || Home;
                  return (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className="group inline-flex items-center gap-2.5 transition-colors duration-200"
                        style={{ color: "var(--light-silver-color)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white-color)")}
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--light-silver-color)")
                        }
                      >
                        <ItemIcon
                          className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                          style={{ color: "var(--primary-hex)" }}
                        />
                        <span className="font-medium">{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Col 3: Service Communities (2 Cols) */}
          {serviceAreas && (
            <div className="lg:col-span-2 space-y-4">
              <h4
                className="text-xs font-black uppercase tracking-[0.22em]"
                style={{ color: "var(--primary-hex)" }}
              >
                {serviceAreas.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {serviceAreas.items.map((city, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2"
                    style={{ color: "var(--light-silver-color)" }}
                  >
                    <MapPin
                      className="w-3.5 h-3.5 shrink-0"
                      style={{ color: "var(--primary-hex)" }}
                    />
                    <span>{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Col 4: Command Center & Hours (3 Cols) */}
          {contact && (
            <div className="lg:col-span-3 space-y-4">
              <h4
                className="text-xs font-black uppercase tracking-[0.22em]"
                style={{ color: "var(--primary-hex)" }}
              >
                {contact.title}
              </h4>

              <div className="space-y-3.5 text-sm">
                <a
                  href={contact.phoneLink}
                  className="flex items-start gap-3 transition-colors group"
                  style={{ color: "var(--light-silver-color)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white-color)")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--light-silver-color)")
                  }
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(var(--primary-rgb), 0.15)" }}
                  >
                    <Phone className="w-4 h-4" style={{ color: "var(--primary-hex)" }} />
                  </div>
                  <div>
                    <span className="font-bold block text-white text-base leading-tight group-hover:text-primary transition-colors">
                      {contact.phone}
                    </span>
                    <span className="text-xs" style={{ color: "var(--light-silver-color)" }}>
                      {contact.phoneLabel}
                    </span>
                  </div>
                </a>

                <a
                  href={contact.emailLink}
                  className="flex items-start gap-3 transition-colors"
                  style={{ color: "var(--light-silver-color)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white-color)")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--light-silver-color)")
                  }
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(var(--primary-rgb), 0.15)" }}
                  >
                    <Mail className="w-4 h-4" style={{ color: "var(--primary-hex)" }} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="truncate block font-semibold text-white">
                      {contact.email}
                    </span>
                    <span className="text-xs" style={{ color: "var(--light-silver-color)" }}>
                      {contact.emailLabel}
                    </span>
                  </div>
                </a>

                <div
                  className="pt-3 border-t"
                  style={{ borderColor: "rgba(var(--white-rgb), 0.08)" }}
                >
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2 text-white">
                    <Clock className="w-3.5 h-3.5" style={{ color: "var(--primary-hex)" }} />
                    <span>{contact.hoursTitle}</span>
                  </div>
                  <div
                    className="space-y-1.5 text-xs"
                    style={{ color: "var(--light-silver-color)" }}
                  >
                    {contact.schedule.map((slot, sIdx) => (
                      <div
                        key={sIdx}
                        className={`flex justify-between items-center ${slot.isHighlight ? "pt-0.5" : ""}`}
                      >
                        <span>{slot.days}</span>
                        {slot.isHighlight ? (
                          <span
                            className="font-black flex items-center gap-1.5"
                            style={{ color: "var(--primary-hex)" }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--primary-hex)" }} />
                            {slot.hours}
                          </span>
                        ) : (
                          <span className="text-white font-semibold">{slot.hours}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ── 4. Certifications & Credibility Ribbon ── */}
        {certifications && (
          <div
            className="mt-14 pt-8 border-t grid grid-cols-2 lg:grid-cols-4 gap-4 text-center"
            style={{ borderColor: "rgba(var(--white-rgb), 0.08)" }}
          >
            {certifications.map((item, idx) => {
              const ItemIcon = iconMap[item.icon] || Award;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border flex flex-col items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(var(--white-rgb), 0.03)",
                    borderColor: "rgba(var(--white-rgb), 0.07)",
                  }}
                >
                  <ItemIcon className="w-5 h-5 mb-2" style={{ color: "var(--primary-hex)" }} />
                  <span className="text-sm font-bold text-white block">{item.title}</span>
                  <span
                    className="text-[11px] mt-0.5"
                    style={{ color: "var(--light-silver-color)" }}
                  >
                    {item.subtitle}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* ── 5. Bottom Legal Bar & Back To Top ── */}
        {bottom && (
          <div
            className="mt-10 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-center sm:text-left"
            style={{
              borderColor: "rgba(var(--white-rgb), 0.08)",
              color: "var(--light-silver-color)",
            }}
          >
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span>{bottom.copyright}</span>
              <span className="hidden sm:inline">•</span>
              <span style={{ color: "var(--primary-hex)", fontWeight: 700 }}>
                {bottom.tagline}
              </span>
            </div>

            <div className="flex items-center gap-6">
              {bottom.links.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              {/* Back to Top Button */}
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-300 hover:scale-105 cursor-pointer ml-2"
                style={{
                  background: "rgba(var(--white-rgb), 0.05)",
                  borderColor: "rgba(var(--white-rgb), 0.15)",
                  color: "var(--white-color)",
                }}
                title="Back to Top"
              >
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  {bottom.backToTop}
                </span>
                <ChevronUp className="w-3.5 h-3.5" style={{ color: "var(--primary-hex)" }} />
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;

