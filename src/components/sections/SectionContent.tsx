import { motion, MotionValue, useTransform } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";
import SectionParallax from "./SectionParallax";
import { throttle } from "lodash";
import SectionVignettes from "./SectionVignettes";

type Props = {
  scrollYProgress: MotionValue<number>;
};

const SectionContent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { scrollYProgress } = props;
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [isDragging] = useState(false);
  
    useEffect(() => {
      const handleScroll = throttle(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
  
        setIsAtBottom(scrollTop + windowHeight >= documentHeight);
      }, 100);
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        handleScroll.cancel();
      };
    }, []);

  return (
    <motion.section className="relative h-full">
      <motion.div style={{ scale }} className="scaling-container">
          <div className="absolute left-0 right-0 top-0 h-full">
            <div className="gradient-white absolute left-0 top-0 h-full w-full"></div>
          </div>
          <SectionParallax ref={ref} scrollYProgress={scrollYProgress} />
      </motion.div>

      <SectionVignettes
        isAtBottom={isAtBottom}
        scrollYProgress={scrollYProgress}
        isDragging={isDragging}
        sortFunction={[5, 3, 4, 1, 2, 7, 6]}
      />
    </motion.section>
  );
});

export default SectionContent;
