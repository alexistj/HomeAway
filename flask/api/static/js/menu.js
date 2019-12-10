function openMobileMenu() {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    document.getElementById("mobile-menu-background").style.display = "block";
    document.getElementById("nav-bar").classList.add("open-menu");
}

function closeMobileMenu() {
    document.body.style.overflow = "unset";
    document.getElementById("mobile-menu-background").style.display = "none";
    document.getElementById("nav-bar").classList.remove("open-menu");
}