import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";
import styles from "./animateSLide.module.scss";

type AnimateSlideInProps = PropsWithChildren<{
  fill?: boolean;
  direction?: "bottom" | "top" | "left" | "right";
  className?: string;
  delay?: number;
  isGroup?: boolean;
}>;

const variants = {
  hidden: (direction: string) => ({
    y: direction === "bottom" ? 48 : direction === "top" ? -48 : 0,
    x: direction === "left" ? 48 : direction === "right" ? -48 : 0,
    opacity: 0,
  }),
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
  },
};

export default function AnimateSlideIn({
  children,
  direction = "bottom",
  fill = false,
  className,
  delay = 0,
  isGroup = false,
}: AnimateSlideInProps) {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random());
  }, [children]);

  return (
    <motion.span
      key={key}
      className={`${className} ${fill ? styles.wrapper : styles.filled}`}
      initial="hidden"
      whileInView="visible"
      variants={isGroup ? undefined : variants}
      custom={direction}
      transition={{
        duration: 0.65,
        delay,
      }}
      viewport={{ margin: "0px 0px -10% 0px", once: false }}
    >
      {children}
    </motion.span>
  );
}