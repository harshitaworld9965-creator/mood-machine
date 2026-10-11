
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const sunRef = useRef(null);

  useGSAP(() => {
    gsap.to(sunRef.current, {
      rotation: 360,
      scale: 1.2,
      ease: "none",

      scrollTrigger: {
        trigger: ".machine",
        start: "top top",
        end: "+=800",
        scrub: 1,
        pin: true,
        markers: true,
      },
    });
  });

  return (
    <main className="mood-machine">
      <section className="intro section">
        <p className="eyebrow">THE MOOD MACHINE® — ISSUE 001</p>

        <h1>
          A little
          <br />
          more <span>feeling.</span>
        </h1>

        <p className="intro-copy">
          An experiment in colour, motion, and unnecessary joy.
        </p>

        <span className="scroll-note">
          SCROLL TO SHIFT YOUR MOOD ↓
        </span>
      </section>

      <section className="machine section">
        <p className="eyebrow">01 / THE EXPERIMENT</p>

        <h2>Current mood:</h2>

        <div className="sun-stage">
          <div className="sun" ref={sunRef}>
            <span className="sun-eye sun-eye-left" />
            <span className="sun-eye sun-eye-right" />
            <span className="sun-smile" />
          </div>
        </div>

        <p className="machine-caption">
          Something good is about to happen.
        </p>
      </section>

      <section className="finale section">
        <p className="eyebrow">02 / THE RESULT</p>

        <h2>
          You are allowed
          <br />
          to feel <span>everything.</span>
        </h2>

        <p className="finale-copy">
          Even the little things deserve a little drama.
        </p>

        <span className="end-note">END OF EXPERIMENT ✳</span>
      </section>
    </main>
  );
}

export default App;