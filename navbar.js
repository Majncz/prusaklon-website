const menu = document.getElementById("menu");

document.querySelector("#hamburger").addEventListener("click", toggleMenu);
document.querySelector("main").addEventListener("click", turnOffMenu);
window.addEventListener("scroll", turnOffMenu);

function toggleMenu() {
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {menu.style.display = "none"};
}

function turnOffMenu() {
    menu.style.display = "none";
}