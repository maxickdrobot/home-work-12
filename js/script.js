let wigwam = document.getElementById("wigwam");
let peoples = document.querySelectorAll(".human");
let bushes = document.querySelectorAll(".primary-island__bush");
let trees = document.querySelectorAll(".garden-island__tree");
let cloud = document.getElementById("rainy-cloud");

wigwam.addEventListener("click", function () {
    for (let i = 0; i < 2; i++) {
        peoples[i].classList.toggle("human--dance");
    }

    for (let i = 0; i < 3; i++) {
        bushes[i].classList.toggle("bush--with-barry");
    }

    for (let i = 0; i < 5; i++) {
        trees[i].classList.toggle("tree--with-fruits");
    }
    cloud.classList.toggle("cloud--rainy")
});