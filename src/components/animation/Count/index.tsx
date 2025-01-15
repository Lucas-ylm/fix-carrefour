import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
  AnimatePresence,
} from "framer-motion";

interface CountProps {
  start: number;
  end: number;
  duration: number;
  delay?: number;
  style?: "small" | "mid" | "big";
  showPlusSign?: boolean;
  showPercentage?: boolean;
  showAns?: boolean;
  addSpaceNumber?: boolean;
}

const AnimatedDigit: React.FC<{ digit: string }> = ({ digit }) => {
  const variants = {
    initial: { rotateX: -90, opacity: 0 },
    enter: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 },
  };

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        width: "0.5em",
        height: "1.1em",
        margin: "0 2px",
        perspective: "500px",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={digit}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "block",
          }}
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export const Count: React.FC<CountProps> = ({
  start,
  end,
  duration,
  delay = 0,
  style = "small",
  showPlusSign = false,
  showPercentage = false,
  showAns = false,
  addSpaceNumber = true,
}) => {
  const count = useMotionValue(start);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(start);

  const lastValueRef = useRef(start);

  const maxIncrements = 5;
  const stepValue = Math.max(1, Math.floor((end - start) / maxIncrements));

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      count.set(start);
      lastValueRef.current = start;
      setDisplayValue(start);

      const timeoutId = setTimeout(() => {
        const controls = animate(count, end, {
          duration: duration,
          ease: [0.42, 0, 0.58, 1],
        });
        return controls.stop;
      }, delay * 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isInView, count, start, end, duration, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latestValue) => {
      if (latestValue >= lastValueRef.current + stepValue || latestValue === end) {
        lastValueRef.current = latestValue;
        setDisplayValue(latestValue);
      }
    });
    return () => unsubscribe();
  }, [rounded, stepValue, end]);

  const formattedValue = addSpaceNumber
    ? displayValue.toLocaleString("fr-FR")
    : displayValue.toString();

  const renderCharacters = formattedValue.split("").map((char, index) => {
    if (/\d/.test(char)) {
      return <AnimatedDigit key={`${index}-${char}`} digit={char} />;
    }
    return (
      <span
        key={index}
      >
        {char}
      </span>
    );
  });

  return (
    <span ref={ref}>
      {showPlusSign && <span>+ </span>}
      <motion.span>
        {renderCharacters}
      </motion.span>
      {showPercentage && <span> %</span>}
      {showAns && <span> ans</span>}
    </span>
  );
};
