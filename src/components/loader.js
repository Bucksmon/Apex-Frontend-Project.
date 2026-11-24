import gsap from "gsap";

export function Loader(){

const loader=document.querySelector("#loader");

loader.innerHTML=`

<div class="loader-logo">

APEX

</div>

`;

gsap.from(".loader-logo",{

scale:.6,

opacity:0,

duration:1

});

gsap.to(loader,{

delay:1.4,

opacity:0,

pointerEvents:"none",

duration:.8

});

}