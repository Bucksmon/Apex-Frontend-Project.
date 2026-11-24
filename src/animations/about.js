import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutAnimation(){

    gsap.from(".about-image",{

        x:-120,
        opacity:0,
        duration:1.2,

        scrollTrigger:{
            trigger:".about",
            start:"top 70%"
        }

    });

    gsap.from(".about-content > *",{

        x:80,
        opacity:0,
        duration:1,

        stagger:.18,

        ease:"power3.out",

        scrollTrigger:{
            trigger:".about",
            start:"top 70%"
        }

    });

    gsap.from(".about-stats div",{

        y:40,
        opacity:0,
        stagger:.15,

        scrollTrigger:{
            trigger:".about-stats",
            start:"top 80%"
        }

    });

}