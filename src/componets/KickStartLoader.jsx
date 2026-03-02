import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { getLenis } from "./SmoothScroll";
import Iconn from "../assets/planeImgg.png"

// import meLoader from "../assets/ImgProfileLoader1.png";

export default function KickStartLoader() {
  const container = useRef();
  const counter = useRef();
  const left = useRef();
  const right = useRef();

  useGSAP(() => {
    const lenis = getLenis();

    lenis?.stop(); // stop scroll during intro

    const obj = { val: 0 };

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => {
        lenis?.start(); // enable scroll
        // onFinish?.();
      },
    });

    // 🔥 Counter
    tl.to(obj, {
      val: 100,
      duration: 3,
      ease: "power2.out",
      onUpdate: () => {
        counter.current.innerText = Math.floor(obj.val) + "%";
      },
    })

      // pause
      .to({}, { duration: 0.3 })

      // 🔥 curtains open
      .to(left.current, { x: "-100%", duration: 1.2 })
      .to(right.current, { x: "100%", duration: 1.2 }, "<")

      // fade out
      .to(container.current, { opacity: 0, duration: 0.4 });

  }, []);

  return (
    <main
      ref={container}
      className="fixed inset-0 border-x-[40px] border-green-500 z-[999] flex bg-blk text-white"
    >
      <div
        ref={left}
        className="w-1/2 h-full flex pageBg2 items-center justify-center pr-8 bg-black"
      > 
      {/* <div className=""> */}
        <h1
          ref={counter}
          className="text-5xl tracking-widest border-b-2 border-green-500 px-2 pb-1"
        >
          0 %
        </h1>
        {/* </div> */}
      </div>

      <div
        ref={right}
        className="w-1/2 h-full flex items-center justify-start  pageBg2 bg-black"
      >
         {/* <span className="text-7xl font-bold tracking-widest animate-bounce mr-5" >.</span>
        <span className="text-7xl font-bold tracking-widest animate-bounce mr-5" >.</span>
        <span className="text-7xl font-bold tracking-widest animate-bounce mr-5" >.</span> */}
        <img src={Iconn} className=" h-40 animate-bounce mr-4" alt="" />
       
        </div>
    </main>
  );
}
