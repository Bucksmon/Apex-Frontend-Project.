export function Navbar() {
    return `
<nav class="navbar">
    <div class="logo">APEX</div>

    <div class="nav-center">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </div>

    <button
        class="menu-btn"
        type="button"
        aria-label="Open navigation"
        aria-controls="mobile-navigation"
        aria-expanded="false"
    >☰</button>

    <div class="mobile-menu" id="mobile-navigation">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </div>
</nav>
`;
}
