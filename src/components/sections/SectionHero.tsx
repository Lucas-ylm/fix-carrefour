"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useWindowSize } from "../hook/useWindowSize";
import Hero from "../loreal/Hero";
import LazySvg from "../svgComponent/LazySvg";

type SectionHeroProps = {
  scrollYProgress: MotionValue<number>;
};

export default function SectionHero({ scrollYProgress }: Readonly<SectionHeroProps>) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const opacity = useTransform(scrollYProgress, [0.4, 1], [1, 0]);
  const blurFilter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(30px)"]);
  const { width } = useWindowSize();

  return (
    <motion.section style={{ scale, opacity }} className="sticky top-[0px] h-screen w-full">
      <div className="gradient-white h-full w-full"></div>

      <Hero />

      <div className="pointer-events-none">
        <div className="pointer-events-none absolute inset-0 flex flex-col items-end justify-end pb-[15px] pr-[15px]">
          <p className="text-white font-[12px] font-roboto">CreAITech & Ogilvy Paris générée par l'IA</p>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-[35px]">
          <LazySvg 
            name="scroll-arrow" 
            width={40} 
            height={40}
            className="text-center z-10 font-roboto text-[26px] font-normal text-white transition-transform duration-300 hover:translate-y-[10px]"
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0"
      >
        <div className="flex h-full w-full flex-col font-bitter">
          <h1 className="mt-[115px] ml-[20px] text-start text-[48px] font-light leading-[100%] text-black lg:mt-[145px] lg:ml-[40px] lg:text-[72px] lg:leading-[100%]">
            L'Oréal {width < 768 && <br />} Groupe,<br />
            la <span className="font-black">beauté <br /> créatrice</span>
          </h1>
        </div>
      </div>


    </motion.section>
  );
}
