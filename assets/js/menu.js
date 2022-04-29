window.onscroll = function() {
    navfixFunction();
};
var navbar = document.getElementById("nav_top");
var sticky = navbar.offsetTop;

function navfixFunction() {
    if (window.pageYOffset > 300) {
        navbar.classList.add("fixed")
    } else {
        navbar.classList.remove("fixed");
    }
};

//responsive navbar open
document.querySelector(".menu_bar").onclick = function() {
    showNavbar();
}

function showNavbar() {
    document.querySelector(".menu_bar").classList.toggle("menuicon_close");
    document.querySelector(".navbar_area").classList.toggle("show_menu");
    document.querySelector("body").classList.toggle("overflowhide");
};