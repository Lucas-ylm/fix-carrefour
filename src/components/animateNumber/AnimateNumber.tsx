import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  start: number;
  end: number;
  duration: number;
  delay: number;
  isInView: boolean;
};

export default function AnimateNumber({
  start,
  end,
  duration,
  delay,
  isInView,
}: Props) {
  const count = useMotionValue(start);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      setTimeout(() => {
        const controls = animate(count, end, {
          duration: duration,
          ease: [0.42, 0, 0.58, 1],
        });

        return controls.stop;
      }, delay * 1000);
    }
  }, [isInView, hasAnimated, count, end, duration, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latestValue) => {
      setDisplayValue(latestValue);
    });

    return () => unsubscribe();
  }, [rounded]);
  return <motion.p>{displayValue}</motion.p>;
}
