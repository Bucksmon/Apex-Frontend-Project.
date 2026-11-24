import "./style.css";
const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "");

import { Navbar } from "./components/navbar";
import { Loader } from "./components/loader";
import { HeroAnimation } from "./animations/hero";
import { NavbarAnimation } from "./animations/navbar";
import { ProductsAnimation } from "./animations/products";
import { AboutAnimation } from "./animations/about";
import { ContactAnimation } from "./animations/contact";
document.querySelector("#app").innerHTML = `

${Navbar()}

<main>

<section class="hero" id="home">

<div class="hero-content">

<p class="hero-tag">

ENGINEERED PERFORMANCE

</p>

<h1 class="hero-title">

UNLEASH
<br>
YOUR
<br>
STRENGTH

</h1>

<p class="hero-description">

Premium supplements crafted for athletes who demand more.

</p>

<button class="primary-btn">

Explore Collection

</button>

</div>

<div class="hero-stage">

<div class="hero-light"></div>

  <div class="hero-bottle-wrapper">
        <img
            id="heroBottle"
            src="\${asset("products/whey.png")}"
            alt="Protein Bottle"
        >
    </div>

<div class="floating-card protein">

<h3>24g</h3>

<span>Protein</span>

</div>

<div class="floating-card bcaa">

<h3>5.5g</h3>

<span>BCAAs</span>

</div>

<div class="floating-card recovery">

<h3>Fast</h3>

<span>Recovery</span>

</div>

</div>

</section>

</main>
<section class="products" id="products">

    <div class="products-header">

        <p class="section-tag">
            OUR COLLECTION
        </p>

        <h2 class="section-title">
            Premium Supplements
        </h2>

        <p class="section-description">
            Scientifically formulated supplements built for strength,
            endurance and recovery.
        </p>

    </div>

    <div class="products-grid">

        <article class="product-card">

            <div class="product-image">
                <img src="\${asset("products/55.png")}" alt="Whey Protein">
            </div>

            <div class="product-info">

                <span class="product-category">
                    Protein
                </span>

                <h3>
                    Whey Isolate
                </h3>

                <p>
                    Ultra-pure whey isolate delivering rapid muscle recovery
                    and premium performance.
                </p>

                <div class="product-footer">

                    <span class="price">
                        $59
                    </span>

                    <button>
                        View
                    </button>

                </div>

            </div>

        </article>

        <article class="product-card">

            <div class="product-image">
                <img src="\${asset("products/56.png")}" alt="">
            </div>

            <div class="product-info">

                <span class="product-category">
                    Energy
                </span>

                <h3>
                    Pre Workout
                </h3>

                <p>
                    Clean energy with explosive focus for your toughest
                    training sessions.
                </p>

                <div class="product-footer">

                    <span class="price">
                        $45
                    </span>

                    <button>
                        View
                    </button>

                </div>

            </div>

        </article>

        <article class="product-card">

            <div class="product-image">
                <img src="\${asset("products/7.jpeg")}" alt="">
            </div>

            <div class="product-info">

                <span class="product-category">
                    Strength
                </span>

                <h3>
                    Creatine
                </h3>

                <p>
                    Increase power output, strength and lean muscle with
                    pharmaceutical-grade creatine.
                </p>

                <div class="product-footer">

                    <span class="price">
                        $38
                    </span>

                    <button>
                        View
                    </button>

                </div>

            </div>

        </article>

    </div>

</section>
<!-- ================= ABOUT ================= -->

<section class="about" id="about">

    <div class="about-image">

        <img src="\${asset("products/whey.png")}" alt="About Apex">

    </div>

    <div class="about-content">

        <p class="section-tag">
            ABOUT US
        </p>

        <h2 class="section-title">
            Built For Elite Performance
        </h2>

        <p class="section-description">

            We engineer premium sports nutrition using research-backed
            ingredients, helping athletes maximize strength, endurance,
            recovery and overall performance.

        </p>

        <div class="about-stats">

            <div>

                <h3>10K+</h3>
                <span>Athletes</span>

            </div>

            <div>

                <h3>25+</h3>
                <span>Products</span>

            </div>

            <div>

                <h3>99%</h3>
                <span>Pure Ingredients</span>

            </div>

        </div>

    </div>

</section>

<!-- ================= CONTACT ================= -->

<section class="contact" id="contact">

    <div class="contact-header">

        <p class="section-tag">
            CONTACT
        </p>

        <h2 class="section-title">
            Let's Talk Performance
        </h2>

        <p class="section-description">

            Questions about products, wholesale, or partnerships?
            We'd love to hear from you.

        </p>

    </div>

    <form class="contact-form">

        <input
            type="text"
            placeholder="Your Name"
        >

        <input
            type="email"
            placeholder="Email Address"
        >

        <textarea
            placeholder="Your Message"
        ></textarea>

        <button class="primary-btn">

            Send Message

        </button>

    </form>

</section>
`;


Loader();

NavbarAnimation();
HeroAnimation();
ProductsAnimation();
AboutAnimation();
ContactAnimation();