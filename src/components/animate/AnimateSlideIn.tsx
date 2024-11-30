import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import styles from "./animateSLide.module.scss";

type AnimateSlideInProps = PropsWithChildren<{
  fill?: boolean;
  direction?: "bottom" | "top" | "left" | "right";
  className?: string;
  delay?: number;
}>;

export default function AnimateSlideIn({
  children,
  direction = "bottom",
  fill = false,
  className,
  delay,
}: AnimateSlideInProps) {
  return (
    <motion.span
      className={`${className} ${fill ? styles.wrapper : styles.filled}`}
      initial={{
        y: direction === "bottom" ? 48 : direction === "top" ? -48 : 0,
        x: direction === "left" ? 48 : direction === "right" ? -48 : 0,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.65,
        delay,
      }}
      viewport={{ margin: `100% 0% -10% 0%` }}
    >
      {children}
    </motion.span>
  );
}
