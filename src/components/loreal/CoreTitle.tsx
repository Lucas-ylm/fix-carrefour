import React from "react";
import SlideIn from "../animation/SlideIn";
import { cn } from "@/lib/utils";

type CoreTitleProps = {
  className?: string;
  children: React.ReactNode;
  elementClassName?: string;
};

export const CoreTitle = ({ className, children, elementClassName = "" }: CoreTitleProps) => {
  if (!children) return null;

  return (
    <div className={className}>
      <SlideIn>
        <h3
          className={cn(
            "font-bitter text-[37px] font-extrabold italic leading-[52px] text-black lg:text-[54px] lg:leading-[72px]",
            elementClassName
          )}>
          {children}
        </h3>
      </SlideIn>
    </div>
  );
};
