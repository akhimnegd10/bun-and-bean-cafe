document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector(".hero");

    if (hero) {
        hero.style.opacity = "0";

        setTimeout(function () {
            hero.style.transition = "opacity 1s ease";
            hero.style.opacity = "1";
        }, 100);
    }
});