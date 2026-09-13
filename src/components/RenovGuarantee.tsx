import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Star } from "lucide-react";
import completeData from "../src/data/completeData.json";

const RenovGuarantee = () => {
  const { whyChooseUs } = completeData;
  const ctaData = whyChooseUs.cta;
  return (
    <section className="relative bg-background border-t border-border overflow-hidden">

      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28">

        {/* Two-Column Layout — stacks on mobile */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">

          {/* ── LEFT: Headline + Body + CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col justify-between gap-8 pr-0 lg:pr-16 pb-10 lg:pb-0 border-b lg:border-b-0 lg:border-r border-border"
          >
            <div>
              {/* Label */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-6 sm:w-8 h-[2px] bg-primary flex-shrink-0" />
                <span className="text-primary text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em]">
                  {ctaData.badge}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-[2.4rem] xs:text-[2.8rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[7rem] font-black text-foreground uppercase tracking-tighter leading-[0.85] italic"
                dangerouslySetInnerHTML={{ __html: ctaData.title }}
              />
            </div>

            {/* Body copy */}
              <p className="text-foreground/85 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                {ctaData.description}
              </p>

            {/* CTA */}
            <motion.a
              href={ctaData.buttons[0].href}
              whileHover={{ x: 4 }}
              className="group self-start inline-flex items-center gap-3 sm:gap-5 bg-primary text-dark px-6 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[10px] sm:text-xs hover:bg-secondary hover:text-white transition-colors w-full sm:w-auto justify-center sm:justify-start"
            >
              {ctaData.buttons[0].text}
              <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* ── RIGHT: Shield + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:w-[400px] xl:w-[420px] flex flex-col gap-0 pt-10 lg:pt-0 lg:pl-16"
          >
            {/* Shield Badge */}
            <div className="flex items-center gap-4 sm:gap-6 pb-8 sm:pb-10 border-b border-border">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                <div className="relative w-14 h-14 sm:w-20 sm:h-20 border-2 border-primary flex items-center justify-center bg-primary/5">
                  <ShieldCheck className="w-7 h-7 sm:w-10 sm:h-10 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <p className="text-foreground font-black uppercase tracking-wider text-xs sm:text-sm leading-tight">{whyChooseUs.section.badge}</p>
                <p className="text-primary font-black uppercase tracking-wider text-xs sm:text-sm leading-tight">Guarantee</p>
                <div className="flex gap-0.5 sm:gap-1 mt-1.5 sm:mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary fill-primary" />
                  ))}
                </div>
              </div>
            </div>

            {/* Stat Rows */}
            {ctaData.trustBadges.map((badge: string, i: number) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center justify-between py-5 sm:py-7 border-b border-border last:border-b-0 gap-4"
              >
                <span className="text-foreground/80 text-[9px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] leading-snug flex-1">
                  {badge}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-primary tabular-nums flex-shrink-0">✓</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default RenovGuarantee;
