import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type TextRevealProps = {
  children: string;
  className?: string;
};

export const TextReveal = ({ children, className }: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  // Split text into words
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0 * i },
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
        overflow: "hidden",
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};