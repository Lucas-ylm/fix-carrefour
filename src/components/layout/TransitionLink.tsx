// TransitionLink.tsx
"use client";
import { useContext, MouseEvent } from "react";
import { useRouter } from "next/navigation"; // or next/router
import { TransitionContext } from "@/components/context/TransitionContext";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  // You can spread additional props if needed:
  [key: string]: any;
}

export default function TransitionLink({ href, children, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("TransitionContext not found");
  }
  const { timeline } = context;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    timeline.eventCallback("onComplete", () => {
      timeline.eventCallback("onComplete", null);
      router.push(href);
    });

    if (timeline.getChildren().length) {
      timeline.play();
    } else {
      router.push(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
