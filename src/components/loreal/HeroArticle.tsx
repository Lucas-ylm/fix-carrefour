"use client";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import { env } from "@/lib/env";

export default function HeroArticle({
  plane1,
  plane2,
  plane3,
}: {
  plane1: string;
  plane2: string;
  plane3: string;
}) {
  const plane1Ref = useRef<HTMLDivElement>(null);
  const plane2Ref = useRef<HTMLDivElement>(null);
  const plane3Ref = useRef<HTMLDivElement>(null);

  const xForce = useMotionValue(0);
  const yForce = useMotionValue(0);
  const easing = 0.05;
  const speed = 0.1;

  useAnimationFrame(() => {
    const lerp = (start: number, target: number, amt: number) =>
      start * (1 - amt) + target * amt;
    const newX = lerp(xForce.get(), 0, easing);
    const newY = lerp(yForce.get(), 0, easing);
    xForce.set(newX);
    yForce.set(newY);
    if (plane1Ref.current) plane1Ref.current.style.transform = `translate(${newX}px, ${newY}px)`;
    if (plane2Ref.current) plane2Ref.current.style.transform = `translate(${newX * 0.5}px, ${newY * 0.5}px)`;
    if (plane3Ref.current) plane3Ref.current.style.transform = `translate(${newX * 0.25}px, ${newY * 0.05}px)`;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    xForce.set(xForce.get() + e.movementX * speed);
    yForce.set(yForce.get() + e.movementY * speed);
  };

  return (
    <div onMouseMove={handleMouseMove} className="pointer-events-auto absolute bottom-0">
      <div
        className="
          absolute bottom-0 right-0 
          w-[100vw]
          h-[75vh] 
          overflow-hidden
          bg-transparent
          relative
        "
      >
        <motion.div ref={plane1Ref} className="absolute mx-[3vw] s:mx-[unset] inset-0 top-[10%] bottom-[-80px]">
          <img
            src={env.BASE_PATH + plane1}
            alt="plane1"
            className="w-full h-full object-contain"
            style={{ objectPosition: "100% 100%" }}
          />
        </motion.div>
        <motion.div ref={plane2Ref} className="absolute bottom-[-20px] s:bottom-[0px] inset-0 right-[-30px]">
          <img
            src={env.BASE_PATH + plane2}
            alt="plane2"
            className="w-full h-full object-contain"
            style={{ objectPosition: "100% 100%" }}
          />
        </motion.div>
        <motion.div ref={plane3Ref} className="absolute inset-0">
          <img
            src={env.BASE_PATH + plane3}
            alt="plane3"
            className="w-full h-full object-contain"
            style={{ objectPosition: "100% 100%" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
