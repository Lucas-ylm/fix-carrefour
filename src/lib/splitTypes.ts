import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default class TextSplitter {
  private readonly elements: NodeListOf<Element>;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    this.elements = window.document.querySelectorAll(".reveal-type");
    this.init();
  }

  public init() {
    this.elements.forEach((char) => {
      this.splitAndAnimate(char);
    });

    ScrollTrigger.update();
  }

  public refresh() {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
  }

  public destroy() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }

  private splitAndAnimate(element: Element) {
    const text = new SplitType(element as HTMLElement, { types: "words" });

    gsap.from(text.words, {
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
        markers: true,
        toggleActions: "play play reverse reverse",
      },
      opacity: 0.1,
      stagger: 0.1,
    });
  }
}
