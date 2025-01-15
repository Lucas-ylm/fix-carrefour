"use client";
import React, { useContext, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Menu from "@/components/modal/Menu";
import NavBar from "@/components/navbar/NavBar";
import SectionContent from "@/components/sections/SectionContent";
import SectionHero from "@/components/sections/SectionHero";
import { useScroll } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/components/context/TransitionContext";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { timeline } = useContext(TransitionContext);
  const image = useRef();

  useLayoutEffect(() => {
    if (!container.current) return;
  
    const targets = gsap.utils.toArray(["p", image.current]);
    gsap.fromTo(
      targets,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.25 }
    );
  
    timeline.add(gsap.to(container.current, { opacity: 0, duration: 0.5 }));
  }, [container.current]);

  console.log("v2");
  return (
    <div ref={container} className="relative grid h-[calc(200vh-10rem)] bg-white">
      <Menu>
        <NavBar />
      </Menu>
      <div ref={image}>
        <SectionHero scrollYProgress={scrollYProgress} />
        <SectionContent scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
