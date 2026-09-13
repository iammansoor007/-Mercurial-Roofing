import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import completeData from "../src/data/completeData.json";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { about } = completeData;

  useEffect(() => {
    if (!sectionRef.current) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
    tl.fromTo(sectionRef.current.querySelector(".mission-headline"), { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" })
      .fromTo(sectionRef.current.querySelectorAll(".mission-copy"), { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: "power3.out" }, "-=0.4");
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="grid-editorial items-center">
        <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
          <div className="accent-line mb-6 mission-copy" />
          <h2 className="heading-lg text-foreground mb-8 mission-headline"
            dangerouslySetInnerHTML={{ __html: about.headline.prefix + ' ' + about.headline.highlight }}
          />
          <div className="space-y-6">
            <p className="body-lg text-foreground/90 mission-copy">{about.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
