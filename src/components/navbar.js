export function Navbar() {

    return `

<nav class="navbar">

<div class="logo">

APEX

</div>

<div class="nav-center">
    <a href="#home">Home</a>
    <a href="#products">Products</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
</div>

<button class="menu-btn" aria-label="Toggle navigation">
    ☰
</button>

<div class="mobile-menu">
    <a href="#">Home</a>
    <a href="#products">Products</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
</div>

</nav>

`;

}