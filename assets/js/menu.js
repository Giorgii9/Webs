function menuDown() {
    let menu = document.querySelector(".menu")
    menu.classList.toggle("active")

    menuIcon.src = menu.classList.contains("active") ? 'assets/images/menu.png' : 'assets/images/menu.png'
}