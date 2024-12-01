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
  const [key, setKey] = useState(Math.random()); // Initialisation d'une clé dynamique pour forcer un re-rendu

  // Utilisation de useEffect pour détecter la visibilité de l'élément
  useEffect(() => {
    // Cette logique permet de réinitialiser la clé chaque fois que l'élément devient visible
    setKey(Math.random()); // Cela forcerait un nouveau rendu
  }, [children]); // Ici, on écoute le changement des enfants

  return (
    <motion.span
      key={key}  // La clé dynamique pour forcer un nouveau rendu
      className={`${className} ${fill ? styles.wrapper : styles.filled}`}
      initial="hidden"
      whileInView="visible"
      variants={isGroup ? undefined : variants}
      custom={direction}
      transition={{
        duration: 0.65,
        delay,
      }}
      viewport={{ margin: `100% 0% -10% 0%` }}  // Disable once pour relancer l'animation
    >
      {children}
    </motion.span>
  );
}
