export const navbarFunctionality = () => {

  const menuBtn = document.querySelector("#menu-btn")
  const closeBtn = document.querySelector("#close-menu")

  const mobileMenu = document.querySelector("#mobile-menu")
  const overlay = document.querySelector("#overlay")

  menuBtn.addEventListener("click", () => {

    mobileMenu.style.right = "0"
    
    overlay.classList.remove("opacity-0", "invisible")
    overlay.classList.add("opacity-100", "visible")

  })

  const closeMenu = () => {

    mobileMenu.style.right = "-100%"

    overlay.classList.remove("opacity-100", "visible")
    overlay.classList.add("opacity-0", "invisible")

  }

  closeBtn.addEventListener("click", closeMenu)

  overlay.addEventListener("click", closeMenu)

  // Close menu when window is resized to desktop width
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      closeMenu()
    }
  })

}