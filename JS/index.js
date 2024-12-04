const container = document.getElementsByClassName("container")[0]
let timeout;
window.addEventListener("scroll", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log("Scroll ended. Adding new divs...");

        for (let i = 1; i <= 15; i++) {
            const div = document.createElement("div");
            div.classList.add("item")
            container.append(div);
        }
    }, 200);
});