import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactAnimation(){

    gsap.from(".contact-header > *",{

        y:60,
        opacity:0,
        stagger:.2,

        duration:1,

        scrollTrigger:{
            trigger:".contact",
            start:"top 75%"
        }

    });

    gsap.from(".contact-form > *",{

        y:50,
        opacity:0,

        stagger:.12,

        duration:.9,

        ease:"power3.out",

        scrollTrigger:{
            trigger:".contact-form",
            start:"top 75%"
        }

    });

}