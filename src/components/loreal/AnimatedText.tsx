import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type AnimatedTextProps = {
  className?: string;
  children: React.ReactNode;
};

export const AnimatedText = ({ className, children }: AnimatedTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  if (!children) return null;

  // Convert children to string, handling both direct strings and React nodes
  const text = React.isValidElement(children) 
    ? children.props.children 
    : String(children);

  // Split text into words
  const words = text.split(" ");

  return (
    <div 
      ref={ref}
      className={`font-bitter text-[20px] font-bold italic leading-[32px] text-black lg:text-[38px] lg:leading-[52px] ${className || ''}`}
    >
      {words.map((word, index) => {
        // Calculate when each word should start appearing based on its position
        const start = index / words.length;
        const end = (index + 1) / words.length;

        // Create opacity and y transforms for each word based on scroll progress
        const opacity = useTransform(
          scrollYProgress,
          [start, end],
          [0, 1]
        );
        
        const y = useTransform(
          scrollYProgress,
          [start, end],
          [20, 0]
        );

        return (
          <motion.span
            key={index}
            style={{ 
              opacity,
              y,
              display: "inline-block",
              marginRight: "0.25em",
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};