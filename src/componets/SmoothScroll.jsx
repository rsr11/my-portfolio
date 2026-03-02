import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis; // global access (so loader can stop/start)

export const getLenis = () => lenis;

export default function SmoothScroll({ children }) {
  useEffect(() => {
    lenis = new Lenis({
      duration: 1.1,
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => lenis.destroy();
  }, []);

  return children;
}
