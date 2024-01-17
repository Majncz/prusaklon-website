// loading the navigation bar
document.addEventListener("DOMContentLoaded", () => { // source: chatGPT
    loadNavBar();

    async function loadNavBar() {
        const navbarContainer = document.querySelector("section.navBarContainer");
        const response = await fetch("navbar.txt");
        const navBar = await response.text();

        navbarContainer.innerHTML = navBar;
        appendNavBarScript();
    }
})

function appendNavBarScript() {
    const navBarScript = document.createElement("script");
    navBarScript.src = "navbar.js";
    document.body.appendChild(navBarScript);
}