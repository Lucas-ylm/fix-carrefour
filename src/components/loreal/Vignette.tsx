"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useWindowSize } from "../hook/useWindowSize";
import Visual from "./Visual";
import Content from "./Content";

import { VignetteImageProps } from "../sections/SectionVignettes";

type VignetteProps = {
  index: number;
  scrollYProgress?: MotionValue<number>;
  title: string;
  waitingTitle: React.ReactNode;
  waitingText: React.ReactNode;
  slug: string;
  image?: VignetteImageProps;
  length: number;
};

export default function Vignette({
  index,
  scrollYProgress,
  title,
  waitingTitle,
  waitingText,
  slug,
  image,
  length,
}: Readonly<VignetteProps>) {
  const { width } = useWindowSize();
  const [isHovered, setIsHovered] = useState(false);

  const currentBackgroundClass = index % 2 === 0 ? "gradient-white" : "gradient-white-light";
  const y = useTransform(scrollYProgress ?? new MotionValue(), [0, 0.95], [240 * index, 0]);

  return (
    <Link scroll={false} href={`/${slug}`}>
      <motion.div
        style={width > 768 ? { y } : { y: 0 }}
        className={`relative h-[calc(100vh-10rem)] w-[89vw] overflow-hidden xs:w-[58vw] sm:w-[47vw] md:w-[42vw] lg:w-[30vw] xl:w-[22vw]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`absolute left-0 top-0 h-full w-full ${currentBackgroundClass}`} />
        <Visual image={image} isHovered={isHovered} />
        <Content title={title} waitingTitle={waitingTitle} waitingText={waitingText} isHovered={isHovered} />
      </motion.div>
    </Link>
  );
}
