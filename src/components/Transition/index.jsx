// @ts-nocheck
"use client";
import { useState, useContext } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/components/context/TransitionContext";
gsap.registerPlugin(useGSAP);

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children)
    const { timeline } = useContext(TransitionContext);
    const { contextSafe } = useGSAP(); 

    const exit = contextSafe( () => {
        timeline.eventCallback("onComplete", () => {
            window.scrollTo(0, 0);
            setDisplayChildren(children);
            timeline.pause().clear();
          });
          console.log("Timeline children:", timeline.getChildren());
          timeline.play();
    })
    
    useGSAP(() => {
        //if page is not the current page
            exit();            

    }, [children]) 

    return (
        <div className="bg-white">
            {displayChildren}
        </div>
    )
}