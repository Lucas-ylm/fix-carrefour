"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { useRef } from "react";

type AnimatedTextProps = {
  className?: string;
  children: React.ReactNode;
};

export const AnimatedText = ({ className, children }: AnimatedTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 30%"]
  });

  if (!children) return null;

  const extractText = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (React.isValidElement(node)) {
      const childText = React.Children.toArray(node.props.children).map(extractText).join(' ');
      return childText;
    }
    if (Array.isArray(node)) {
      return node.map(extractText).join(' ');
    }
    return '';
  };

  const text = extractText(children);
  const words = text.split(" ").filter(word => word.length > 0);

  return (
    <div 
      ref={ref}
      className={`font-bitter text-[20px] font-bold italic leading-[32px] text-black lg:text-[38px] lg:leading-[52px] ${className ?? ''}`}
    >
      {words.map((word, index) => {
        const start = index / (words.length * 1.5);
        const end = (index + 1) / (words.length * 1.2);

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

        const displayWord = word.replace(/\s/g, '\u00A0');

        return (
          <motion.span
            key={index}
            style={{ 
              opacity,
              y,
              display: "inline-block",
              marginRight: "0.25em",
            }}
            className={index === words.length - 1 ? "not-italic" : ""}
          >
            {displayWord}
          </motion.span>
        );
      })}
    </div>
  );
};