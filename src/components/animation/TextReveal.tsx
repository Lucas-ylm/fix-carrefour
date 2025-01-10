import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type TextRevealProps = {
  children: string;
  className?: string;
};

export const TextReveal = ({ children, className }: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.length > 0 && entries[0]?.isIntersecting) {
          setShouldAnimate(true);
        } else {
          setShouldAnimate(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const words = children.split(" ");

  const staggerDuration = Math.max(0.05, 0.5 / (words.length ** 0.75));

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDuration, delayChildren: 0 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{
        willChange: "transform, opacity",
        overflow: "hidden",
      }}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={container}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ willChange: "transform, opacity", display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
