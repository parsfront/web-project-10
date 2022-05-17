//===Append arrow icon header menu
//--Level 1
const header_menu_level_one = document.querySelectorAll(".header-main__menu-list > ul > li");
header_menu_level_one.forEach((item) => {
    if (item.querySelector("ul") != null) {
        item.querySelector("a").insertAdjacentHTML("beforeend", "<i class='fas fa-angle-down'></i>");
    }
});

//--Level 2
const header_menu_level_two = document.querySelectorAll(".header-main__menu-list > ul > li ul li");
header_menu_level_two.forEach((item) => {
    if (item.querySelector("ul") != null) {
        item.querySelector("a").insertAdjacentHTML("beforeend", "<i class='fas fa-chevron-left'></i>");
    }
});
