import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default class TextSplitter {
  private readonly elements: NodeListOf<Element>;
  private observers: IntersectionObserver[] = [];
  private animations: gsap.core.Tween[] = [];
  private isInitialized = false;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    this.elements = window.document.querySelectorAll(".reveal-type");
  }

  public init() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    // Create a single observer for all elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.splitAndAnimate(entry.target);
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    // Observe all elements
    this.elements.forEach((element) => {
      observer.observe(element);
    });

    this.observers.push(observer);
  }

  public refresh() {
    // Only refresh ScrollTrigger, not the splits
    ScrollTrigger.refresh();
  }

  public destroy() {
    // Clean up observers
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];

    // Kill animations
    this.animations.forEach((anim) => anim.kill());
    this.animations = [];

    // Kill ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    
    this.isInitialized = false;
  }

  private splitAndAnimate(element: Element) {
    const text = new SplitType(element as HTMLElement, { types: "words" });
    
    if (!text.words) return;

    const animation = gsap.fromTo(
      text.words,
      { 
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        }
      }
    );

    this.animations.push(animation);
  }
}