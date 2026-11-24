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

        y:120,

        opacity:0,

        scale:.85,

        duration:1,

        stagger:.18,

        ease:"power4.out",

        scrollTrigger:{
            trigger:".products-grid",
            start:"top 70%"
        }

    });

    cards.forEach(card=>{

        const image = card.querySelector("img");

        card.addEventListener("mousemove",(e)=>{

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = (x/rect.width-.5)*14;

            const rotateX = -(y/rect.height-.5)*14;

            gsap.to(card,{

                rotateX,

                rotateY,

                transformPerspective:900,

                duration:.4

            });

            gsap.to(image,{

                x:rotateY*2,

                y:-rotateX*2,

                duration:.5

            });

        });

        card.addEventListener("mouseleave",()=>{

            gsap.to(card,{

                rotateX:0,

                rotateY:0,

                duration:.6,

                ease:"power3.out"

            });

            gsap.to(image,{

                x:0,

                y:0,

                duration:.6

            });

        });

    });

}