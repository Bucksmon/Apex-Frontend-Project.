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

    if (!hero || !heroTitle || !bottle || !wrapper) return;

    const mm = gsap.matchMedia();
    let split;

    // Desktop intro and scroll sequence remain unchanged.
    mm.add("(min-width:1024px)", () => {
      split = new SplitType(heroTitle, { types: "chars" });

      gsap.timeline()
        .from(split.chars, {
          opacity: 0,
          y: 120,
          rotateX: -90,
          duration: 1,
          stagger: 0.03,
          ease: "power4.out",
        })
        .from(".hero-description", { opacity: 0, y: 40 }, "-=0.5")
        .from(".primary-btn", { opacity: 0, scale: 0.75 }, "-=0.35");

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
        },
      });

      tl.to(bottle, {
        scale: 2.7,
        rotation: 18,
        x: -240,
        y: 450,
      }, 0)
        .to(".hero-light", { scale: 2.2, opacity: 0.9 }, 0)
        .to(".hero-content", { opacity: 0, y: -120 }, 0)
        .to(".products-header", { y: -220 }, 0.7)
        .to(".products-grid", { y: -220 }, 0.7);

      return () => {
        tl.kill();
        floatBottle.kill();
        split?.revert();
      };
    });

    // On tablets and phones, reveal the copy as the bottle travels
    // down behind it and fades away. The sequence is tied to scroll.
    mm.add("(max-width:1023px)", () => {
      gsap.set(".hero-content", { opacity: 0, y: 70 });
      gsap.set(wrapper, { y: 0, rotation: 0 });
      gsap.set(bottle, { opacity: 1, scale: 1, rotation: 0, x: 0, y: 0 });

      const reveal = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=650",
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      reveal
        .to(wrapper, {
          y: () => Math.min(window.innerHeight * 0.55, 360),
          scale: 0.82,
          ease: "none",
        }, 0)
        .to(bottle, {
          opacity: 0,
          ease: "none",
        }, 0.42)
        .to(".hero-content", {
          opacity: 1,
          y: 0,
          ease: "none",
        }, 0.18);

      return () => reveal.kill();
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });

    return () => {
      mm.revert();
      split?.revert();
      window.removeEventListener("load", refresh);
    };
  });
}
