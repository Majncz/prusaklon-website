document.addEventListener("DOMContentLoaded", () => { // source: chatGPT
    loadFooter();

    async function loadFooter() {
        const footerContainer = document.querySelector(".footerWrapper");
        const response = await fetch("footer.txt");
        const footer = await response.text();

        footerContainer.innerHTML = footer;
    }
})