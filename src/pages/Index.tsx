import { Suspense, lazy, memo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// ─── Lazy-loaded sections (each gets its own Suspense boundary
//     so they appear independently as they load, not all-or-nothing) ───
const Services = lazy(() => import("@/components/Services"));
const TeamValues = lazy(() => import("@/components/TeamValues"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const HowWeWork = lazy(() => import("@/components/HowWeWork"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const QAForm = lazy(() => import("@/components/QAForm"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));
const QuickQuote = lazy(() => import("@/components/QuickQuote"));
const RoofingExperts = lazy(() => import("@/components/RoofingExperts"))

// Thin shimmer placeholder — keeps layout stable while a section loads
const SectionSkeleton = memo(() => (
  <div className="animate-shimmer h-64 w-full" aria-hidden />
));
SectionSkeleton.displayName = "SectionSkeleton";

// Wrap each lazy section in its own boundary
const LazySection = ({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={className}>
    <Suspense fallback={<SectionSkeleton />}>{children}</Suspense>
  </section>
);

const Divider = () => <div className="premium-divider" aria-hidden />;

const Index = () => (
  <div className="relative overflow-x-hidden">
    {/* Fixed dark background — prevents white flash on load */}
    <div className="fixed inset-0 pointer-events-none z-0 bg-background" />

    {/* Navbar lives outside any stacking context so position:fixed works */}
    <Navbar />

    {/* Floating quick-quote widget */}
    <Suspense fallback={null}>
      <QuickQuote />
    </Suspense>

    {/* Main page content */}
    <main className="relative z-10">
      {/* Hero is NOT lazy — it's the LCP element, load it immediately */}
      <section id="hero-section">
        <Hero />
      </section>


      <LazySection id="about" className="bg-background">
        <RoofingExperts />
      </LazySection>


      <LazySection id="services" className="bg-background">
        <Services />
      </LazySection>

      <Divider />

      <LazySection id="team">
        <TeamValues />
      </LazySection>

      <Divider />

      <LazySection id="portfolio">
        <Portfolio />
      </LazySection>

      <Divider />

      <LazySection id="about">
        <HowWeWork />
      </LazySection>

      <Divider />

      <LazySection id="faq">
        <FAQ />
      </LazySection>

      <Divider />

      <LazySection id="contact">
        <QAForm />
      </LazySection>

      <Divider />

      <LazySection id="testimonials">
        <Testimonials />
      </LazySection>

      <Divider />

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  </div>
);

export default Index;
