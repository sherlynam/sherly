// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        // Toggle nav listr class
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// Clear form before unload
window.Beforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};