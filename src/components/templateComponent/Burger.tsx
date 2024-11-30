"use client";
import { animate, useMotionValue } from "framer-motion";
import { useAppContext } from "../context/useAppContext";
import styles from "./burger.module.scss";

export default function Burger() {
  const { isOpen, setIsOpen, scope } = useAppContext();
  const x = useMotionValue(0);
  const handleClick = async () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      if (!scope.current) return;
      animate(scope.current, {
        opacity: [1, 0],
      });
      const xStart = typeof x.get() === "number" ? x.get() : 0;
      await animate("#drawer", {
        x: [xStart, 360],
      });

      setIsOpen(false);
    }
  };
  return (
    <button
      className={`${styles.wrapper} ${isOpen && styles.isMenu}`}
      onClick={handleClick}
    >
      <span />
    </button>
  );
}
