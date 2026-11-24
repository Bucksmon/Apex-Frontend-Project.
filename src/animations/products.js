import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ProductsAnimation() {

    const cards = gsap.utils.toArray(".product-card");

    gsap.from(".products-header > *",{

        y:50,

        opacity:0,

        duration:1,

        stagger:.2,

        ease:"power3.out",

        scrollTrigger:{
            trigger:".products",
            start:"top 75%"
        }

    });

    gsap.from(cards,{

        y: 0,

        opacity:0,

        scale: .98,

        duration: .7,
        stagger: .08,

        ease:"power4.out",

        scrollTrigger:{
            trigger:".products-grid",
            start:"top 70%"
        }

    });

}
