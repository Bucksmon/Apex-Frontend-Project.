import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function HeroAnimation() {
  requestAnimationFrame(() => {
    const hero = document.querySelector(".hero");
    const heroTitle = document.querySelector(".hero-title");
    const bottle = document.querySelector("#heroBottle");
    const wrapper = document.querySelector(".hero-bottle-wrapper");
    const products = document.querySelector(".products");

    if (!hero || !heroTitle || !bottle || !wrapper) return;

    const split = new SplitType(heroTitle, {
      types: "chars",
    });

    // ------------------------
    // Intro
    // ------------------------

    gsap.timeline()
      .from(split.chars, {
        opacity: 0,
        y: 120,
        rotateX: -90,
        duration: 1,
        stagger: 0.03,
        ease: "power4.out",
      })
      .from(
        ".hero-description",
        {
          opacity: 0,
          y: 40,
        },
        "-=0.5"
      )
      .from(
        ".primary-btn",
        {
          opacity: 0,
          scale: 0.75,
        },
        "-=0.35"
      );

    // ------------------------
    // Floating wrapper ONLY
    // ------------------------

    const floatBottle = gsap.to(wrapper, {
      y: -20,
      rotation: 2,
      repeat: -1,
      yoyo: true,
      duration: 2.4,
      ease: "sine.inOut",
    });

    gsap.to(".floating-card", {
      y: -12,
      repeat: -1,
      yoyo: true,
      duration: 2,
      stagger: 0.2,
      ease: "sine.inOut",
    });

    const mm = gsap.matchMedia();

    // ===========================
    // Desktop
    // ===========================

    mm.add("(min-width:1024px)", () => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=1500",
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onEnter: () => floatBottle.pause(),
          onEnterBack: () => floatBottle.pause(),

          onLeave: () => floatBottle.resume(),
          onLeaveBack: () => floatBottle.resume(),
        }
      });

      tl.to(bottle, {
        scale: 2.7,
        rotation: 18,
        x: -240,
        y: 450
      }, 0)

        .to(".hero-light", {
          scale: 2.2,
          opacity: .9
        }, 0)

        .to(".hero-content", {
          opacity: 0,
          y: -120
        }, 0)

        .to(".products-header", {
          y: -220
        }, 0.7)

        .to(".products-grid", {
          y: -220
        }, 0.7);

      return () => tl.kill();

    });

    // ===========================
    // Tablet and Mobile
    // ===========================

    // Keep hero copy visible while scrolling on smaller screens.
    // The scroll-driven bottle zoom previously pushed the bottle over
    // the heading and faded the text away on compact layouts.
    mm.add("(max-width:1023px)", () => {
      gsap.set(".hero-content", {
        clearProps: "opacity,transform"
      });

      gsap.set(bottle, {
        clearProps: "transform"
      });
    });

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    return () => {
      mm.revert();
      split.revert();
    };
  });
}