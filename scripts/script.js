let menu = document.getElementById("menu");
let menu_button = document.getElementById("menu_button");
let menu_button_container = document.getElementById("menu_button_container");

const showMenu = () => {
    menu.style.display = "block";
    menu_button.addEventListener("click", function () {
        hideMenu();
    })
}

const hideMenu = () => {
    menu.style.display = "none";
    menu_button.addEventListener("click", function () {
        showMenu();
    })
}

menu_button.addEventListener('click', function () {
    showMenu();
});
