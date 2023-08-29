const burgerBtn = document.querySelector(".menu-button");
const burgerDisplay = document.querySelector(".nav-burger");
const crossIconBurger = document.querySelector(".cross-icon-burger");

burgerBtn.addEventListener('click', function(event) {
    burgerDisplay.classList.add("active");
    document.body.style.overflow = "hidden";
});

crossIconBurger.addEventListener('click', function(event) {
    burgerDisplay.classList.remove("active");
    document.body.style.overflow = "auto";
})