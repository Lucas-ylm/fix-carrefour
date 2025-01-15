"use client";
import { useRef, useEffect } from "react";
import { motion, MotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vignette from "../loreal/Vignette";
import vignetteData from "@/lib/vignettesData";

gsap.registerPlugin(ScrollTrigger);

type SectionVignettesProps = {
  isAtBottom: boolean;
  isDragging: boolean;
  scrollYProgress: MotionValue<number>;
  slug?: string;
  customClass?: string;
  sortFunction?: number[];
};

export type VignetteImageProps = {
  className: string;
  alt: string;
  src: string;
};

type VignetteData = {
  title: string;
  waitingTitle: React.ReactNode;
  waitingText: React.ReactNode;
  isActive: boolean;
  slug: string;
  image: VignetteImageProps;
};

export default function SectionVignettes({
  isAtBottom,
  scrollYProgress,
  isDragging,
  slug,
  customClass,
  sortFunction = [],
}: Readonly<SectionVignettesProps>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.set(container, { willChange: "transform" });

    const totalScroll = container.scrollWidth - container.offsetWidth;

    gsap.fromTo(
      container,
      { x: 0 },
      {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          pin: true,
          scrub: window.innerWidth <= 768 ? 1.3 : window.innerWidth <= 1024 ? 0.75 : 1,
          anticipatePin: 1,
          end: () => "+=" + totalScroll,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const sortedVignettes = sortFunction.length
    ? sortFunction
        .map((index) => vignetteData[index - 1])
        .filter((v) => v)
    : vignetteData;

  return (
    <div className="relative overflow-hidden">
      <section
        ref={containerRef}
        suppressHydrationWarning
        className={`relative w-screen h-screen pt-[10rem] ${customClass ?? ""}`}
      >
        <motion.div className="flex w-auto h-full">
          {sortedVignettes
            .filter(
              (data): data is VignetteData =>
                data !== undefined && data.slug !== slug
            )
            .map((data, index) => (
              <div key={data.slug} className="w-full h-full">
                <Vignette
                  index={index}
                  title={data?.title ?? ""}
                  waitingTitle={data?.waitingTitle}
                  waitingText={data?.waitingText}
                  slug={data?.slug ?? ""}
                  image={data?.image}
                  scrollYProgress={scrollYProgress}
                  length={sortedVignettes.length}
                />
              </div>
            ))}
        </motion.div>
      </section>
    </div>
  );
}
