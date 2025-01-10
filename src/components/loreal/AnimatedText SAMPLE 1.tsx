import React from "react";
import { TextReveal } from "../animation/TextReveal";

type AnimatedTextProps = {
  className?: string;
  children: React.ReactNode;
};

export const AnimatedText = ({ className, children }: AnimatedTextProps) => {
  if (!children) return null;

  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (React.isValidElement(node)) {
      return React.Children.toArray(node.props.children).map(extractText).join(" ");
    }
    if (Array.isArray(node)) {
      return node.map(extractText).join(" ");
    }
    return "";
  };

  const text = extractText(children);

  return (
    <TextReveal
      className={`font-bitter text-[20px] font-bold italic leading-[32px] text-black lg:text-[38px] lg:leading-[52px] ${className || ""}`}
    >
      {text}
    </TextReveal>
  );
};
